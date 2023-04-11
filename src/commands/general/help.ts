// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import { HelpResponse } from '../../responses/help-response';

/**
 * Lists available commands.
 */
export class HelpCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'help';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    // const response = new HelpResponse();
    // interaction.reply(await response.create());
    console.log('help!');
    const response = new HelpResponse();
    const data = await response.create();
    interaction.reply(data);
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Displays all the commands available!';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return HelpCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [] as ApplicationCommandOptionData[];
  }
}
