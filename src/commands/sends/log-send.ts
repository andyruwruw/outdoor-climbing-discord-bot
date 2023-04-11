// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandSubCommandData,
  ApplicationCommandSubGroupData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { SubCommand } from '../generic/sub-command';
import { RouteHref } from '../options';

/**
 * Adds a new send.
 */
export class LogSendCommand extends SubCommand {
  /**
   * The Command's key.
   */
  static key: string = 'add';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    console.log('add send');
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Logs a new send.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return LogSendCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[]} Options of the Command.
   */
  getOptions(): Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[] {
    return [
      RouteHref.create(),
    ] as Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[];
  }
}
