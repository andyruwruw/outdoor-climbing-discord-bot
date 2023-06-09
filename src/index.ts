/**
 * Here we start the bot and connect to the database.
 */

// Local Imports
import { DISCORD_INTENTS } from './config/discord';
import { DiscordBot } from './discord-bot';
import { Environment } from './helpers/environment';
import { initializeDatabase } from './database';

/**
 * Sets database instance.
 */
initializeDatabase();

// Creating a new Discord Bot.
const server = new DiscordBot({
  intents: DISCORD_INTENTS,
});

// Logging bot into Discord.
server.login(Environment.getDiscordBotToken());
