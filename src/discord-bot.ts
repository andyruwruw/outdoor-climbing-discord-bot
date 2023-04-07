// Packages
import {
  Client,
  ClientOptions,
  GuildMember,
  Interaction,
  MessageReaction,
  PartialGuildMember,
  PartialMessageReaction,
  PartialUser,
  Role,
  User,
} from 'discord.js';

// Local Imports
import {
  ErrorHandler,
  ReadyHandler,
} from './handlers';
import { getDatabase } from './database';
import { Database } from './database/database';
import { Monitor } from './helpers/monitor';

/**
 * Our little buddy.
 */
export class SendBot extends Client {
  /**
   * Database connection and queries.
   */
  _database: Database;

  /**
   * Whether the Discord bot is connected to Discord.
   */
  _ready: boolean = false;

  /**
   * Instantiates the Copper Bot, calling discord.js' Client constructor.
   *
   * @param {ClientOptions} options Options for the client.
   */ 
  constructor(options: ClientOptions) {
    super(options);

    this._database = getDatabase();

    this._connectToDatabase();
    this._assignListeners();
  }

  /**
   * Connects the bot to the database.
   */
  async _connectToDatabase() {
    await this._database.connect();
  }

  /**
   * Assigns event listeners for Discord and websockets.
   */
  _assignListeners() {
    // Discord Events
    this.on('ready', (client: Client) => ReadyHandler.execute(client));
    this.on('error', (error: Error) => ErrorHandler.execute(error));
    // this.on('interactionCreate', (interaction: Interaction) => this._handleInteraction(interaction));
    // this.on('guildMemberAdd', (member: GuildMember) => this._handleGuildMemberAdded(member));
    // this.on('guildMemberRemove', (member: GuildMember | PartialGuildMember) => this._handleGuildMemberRemove(member));
    // this.on('messageReactionAdd', (messageReaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => this._handleMessageReactionAdd(messageReaction, user));
    // this.on('roleCreate', (role: Role) => this._handleRoleCreate(role));
  }

  /**
   * Handles client errors.
   * 
   * @param {Error} error Error in question.
   */
  _handleError(
    error: Error,
    remoteAddress?: string,
  ) {
    Monitor.log(
      SendBot,
      error.message,
      Monitor.Layer.WARNING,
    );
  }
}
