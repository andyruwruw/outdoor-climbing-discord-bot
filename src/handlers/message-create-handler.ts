// Packages
import { Message } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles Discord bot messages.
 */
export class MessageCreateHandler extends Handler<Message> {
  /**
   * Handles the event.
   */
  async execute(message: Message) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
