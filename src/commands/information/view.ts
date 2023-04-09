// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../chat-command';
import { ViewCragCommand } from './view-crag';
import { ViewGymCommand } from './view-gym';
import { ViewRouteCommand } from './view-route';

/**
 * Commands for viewing information.
 */
export class ViewCommand extends ChatCommand {
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
    console.log('view');
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'View crags or routes.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return ViewCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      (new ViewCragCommand()).create(),
      (new ViewGymCommand()).create(),
      (new ViewRouteCommand()).create(),
    ] as ApplicationCommandOptionData[];
  }
}
