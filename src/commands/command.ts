/**
 * The Command class is abstract and defines methods
 * used by all commands, namely converting a concrete
 * implementation into a JSON object that Discord
 * recognizes as a command.
 * 
 * Use of this class is limited to concrete commands
 * inheriting from this class.
 */

// Packages
import {
  ApplicationCommandData,
  ApplicationCommandOptionData,
  ApplicationCommandType,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { UsedAbstractCommandError } from '../errors/used-abstract-command-error';

/**
 * Abstract Command class, only implement inherited classes.
 */
export class Command {
  /**
   * Instantiates a new Command.
   */
  constructor() {
  }

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    throw new UsedAbstractCommandError();
  }

  /**
   * Converts the command into ApplicationCommandData for uploading to Discord.
   *
   * @returns {ApplicationCommandData} Discord accepted object for command.
   */
  create(): ApplicationCommandData {
    return {
      description: this.getDescription(),
      name: this.getKey(),
      type: this.getType(),
      options: [
        ...this.getOptions(),
      ],
    };
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    throw new UsedAbstractCommandError();
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    throw new UsedAbstractCommandError();
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [] as ApplicationCommandOptionData[];
  }

  /**
   * Retrieves the Command's type.
   *
   * @returns {number} Type of the Command.
   */
  getType(): ApplicationCommandType {
    throw new UsedAbstractCommandError();
  }

  /**
   * Whether the command is hidden from registration.
   *
   * @returns {boolean} Whether the command is hidden from registration.
   */
  isHidden(): boolean {
    return false;
  }
}
