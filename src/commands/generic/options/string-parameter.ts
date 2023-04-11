// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandOptionType,
} from 'discord.js';

// Local Imports
import { CommandOption } from './command-option';
import { UsedAbstractCommandError } from '../../errors/used-abstract-command-error';

export class StringParameter extends CommandOption {
  /**
   * Converts the command into ApplicationCommandOptionData for uploading to Discord.
   *
   * @returns {ApplicationCommandOptionData} Discord accepted object for command.
   */
  create(): ApplicationCommandOptionData {
    return {
      type: this.getType(),
      name: this.getKey(),
      description: this.getDescription(),
    };
  }

  /**
   * Retrieves the Command's type.
   *
   * @returns {number} Type of the Command.
   */
  getType(): ApplicationCommandOptionType.String {
    return ApplicationCommandOptionType.String;
  }

  /**
   * Whether this parameter is required.
   *
   * @returns {boolean} Whether this parameter is required.
   */
  isRequired(): boolean {
    throw new UsedAbstractCommandError();
  }
}
