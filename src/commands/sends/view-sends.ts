// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandSubCommandData,
  ApplicationCommandSubGroupData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { SubCommand } from '../generic/sub-command';

/**
 * View all of your sends.
 */
export class ViewSendsCommand extends SubCommand {
  /**
   * The Command's key.
   */
  static key: string = 'view';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    console.log('view sends');
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Views a list of your sends.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return ViewSendsCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[]} Options of the Command.
   */
  getOptions(): Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[] {
    return [] as Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[];
  }
}
