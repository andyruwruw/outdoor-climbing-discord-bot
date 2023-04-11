// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import { LogSendCommand } from './log-send';
import { RemoveSendCommand } from './remove-send';
import { ViewSendsCommand } from './view-sends';
/**
 * Commands for managing sends.
 */
export class SendsCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'send';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    console.log('send');
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Manage your sends.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return SendsCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      (new LogSendCommand()).create(),
      (new RemoveSendCommand()).create(),
      (new ViewSendsCommand()).create(),
    ] as ApplicationCommandOptionData[];
  }
}
