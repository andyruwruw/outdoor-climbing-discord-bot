// Local Imports
import { Handler } from './handler';
import { Monitor } from '../helpers/monitor';

/**
 * Handles discord.js error event.
 */
export class ErrorHandler extends Handler<Error> {
  /**
   * Handles the event.
   */
  async execute(error: Error) {
    try {
      // const subscriptions = Handler._database.crag.
    } catch (error) {
      Monitor.log(
        ErrorHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}
