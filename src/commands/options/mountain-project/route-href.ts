// Local Imports
import { StringParameter } from '../string-parameter';

/**
 * Command parameter for specifying a route.
 */
export class RouteHref extends StringParameter {
  /**
   * The parameter's key.
   */
  static key: string = 'route';

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Link to Mountain Project of Route';
  }
  
  /**
   * Retrieves the parameter's key.
   *
   * @returns {string} Key of the parameter.
   */
  getKey(): string {
    return RouteHref.key;
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
