/**
 * Here we start the bot and connect to the database.
 */

// Local Imports
import { DISCORD_INTENTS } from './config/discord';
import { SendBot } from './discord-bot';
import { Environment } from './helpers/environment';
import { initializeDatabase } from './database';

/**
 * Sets database instance.
 */
initializeDatabase();

// Creating a new Discord Bot.
const server = new SendBot({
  intents: DISCORD_INTENTS,
});

// Logging bot into Discord.
server.login(Environment.getDiscordBotToken());
