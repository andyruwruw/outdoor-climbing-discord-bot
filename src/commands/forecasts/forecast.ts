// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import { ViewForecastCommand } from './view-forecast';

/**
 * Forecast related commands.
 */
export class ForecastCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'forecast';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    console.log('forecast');
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Forecast related commands.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return ForecastCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      (new ViewForecastCommand()).create(),
    ] as ApplicationCommandOptionData[];
  }
}
