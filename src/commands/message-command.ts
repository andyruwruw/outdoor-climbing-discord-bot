/**
 * The Message Command class is abstract and defines methods
 * used by all commands, namely converting a concrete
 * implementation into a JSON object that Discord
 * recognizes as a command.
 * 
 * Use of this class is limited to concrete message commands
 * inheriting from this class.
 */

// Packages
import { ApplicationCommandType } from 'discord.js';

// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../config/discord';
import { Command } from './command';

/**
 * Abstract Message Command class, only implement inherited classes.
 */
export class MessageCommand extends Command {
  /**
   * Instantiates a new Message Command.
   */
  constructor() {
    super();
  }

  /**
   * Retrieves the Command's type.
   *
   * @returns {ApplicationCommandType} Type of the Command.
   */
  getType(): ApplicationCommandType {
    return APPLICATION_COMMAND_TYPES.MESSAGE;
  }
}
