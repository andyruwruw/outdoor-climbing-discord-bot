// Local Imports
import { Handler } from './handler';
import { Monitor } from '../helpers/monitor';

/**
 * Updates weather.
 */
export class UpdateWeatherHandler extends Handler<any> {
  /**
   * Handles the event.
   */
  async execute(params: any) {
    try {
      
    } catch (error) {
      Monitor.log(
        UpdateWeatherHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}
