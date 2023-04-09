// Local Imports
import { StringParameter } from '../string-parameter';

/**
 * Command parameter for specifying a Gym.
 */
export class GymName extends StringParameter {
  /**
   * The parameter's key.
   */
  static key: string = 'gym';

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Name of the Gym';
  }
  
  /**
   * Retrieves the parameter's key.
   *
   * @returns {string} Key of the parameter.
   */
  getKey(): string {
    return GymName.key;
  }

  /**
   * Whether this parameter is required.
   *
   * @returns {boolean} Whether this parameter is required.
   */
  isRequired(): boolean {
    return true;
  }
}
