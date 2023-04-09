// Packages
import {
  Client,
  ClientOptions,
  Interaction,
  Message,
} from 'discord.js';

// Local Imports
import {
  ErrorHandler,
  InteractionHandler,
  MessageCreateHandler,
  ReadyHandler,
} from './handlers';
import { getDatabase } from './database';
import { Monitor } from './helpers/monitor';
import { Handler } from './handlers/handler';

/**
 * Our little buddy.
 */
export class DiscordBot extends Client {
  /**
   * Instantiates the Discord Bot, calling discord.js' Client constructor.
   *
   * @param {ClientOptions} options Options for the client.
   */ 
  constructor(options: ClientOptions) {
    super(options);

    // Set static references to handlers.
    Handler.setClient(this);
    Handler.setDatabase(getDatabase());

    // Connect database and handlers.
    this._connectToDatabase();
    this._setEventHandlers();
  }

  /**
   * Connects bot to the database.
   */
  async _connectToDatabase(): Promise<void> {
    try {
      // Connect via Database instance.
      await getDatabase().connect();
    } catch (error) {
      Monitor.log(
        DiscordBot,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }

  /**
   * Assigns event listeners for Discord and websockets.
   */
  _setEventHandlers() {
    // Discord Events
    this.on('ready', (client: Client) => ReadyHandler.execute(client));
    this.on('error', (error: Error) => ErrorHandler.execute(error));
    this.on('interactionCreate', (interaction: Interaction) => InteractionHandler.execute(interaction));
    this.on('messageCreate', (message: Message) => MessageCreateHandler.execute(message));
  }
}
