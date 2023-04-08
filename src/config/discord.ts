// Packages
import {
  BitFieldResolvable,
  IntentsBitField,
} from 'discord.js';

/**
 * Component types.
 */
export const COMPONENT_TYPE: Record<string, number> = {
  ACTION_ROW: 1,
  BUTTON: 2,
  MENU: 3,
};

/**
 * Keys for Discord Button component types.
 */
export const BUTTON_STYLE: Record<string, number> = {
  PRIMARY: 1,
  SECONDARY: 2,
  SUCCESS: 3,
  DESTRUCTIVE: 4,
  LINK: 5,
};

/**
 * Default color for Discord components.
 */
export const DEFAULT_COLOR: number = 0xd9823b;

/**
 * The default intents for the bot.
 */
export const DISCORD_INTENTS: number[] = [
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.GuildMessageReactions,
  IntentsBitField.Flags.DirectMessages,
  IntentsBitField.Flags.DirectMessageReactions,
  IntentsBitField.Flags.GuildScheduledEvents,
];

/**
 * Zero width character, helps avoids conflicting with other bots.
 */
export const RESPONSE_PREFIX = '\u200B';

/**
 * Discord application command option types.
 */
export const APPLICATION_COMMAND_OPTION_TYPES = {
  SUB_COMMAND: 1,
  SUB_COMMAND_GROUP: 2,
  STRING: 3,
  INTEGER: 4,
  BOOLEAN: 5,
  USER: 6,
  CHANNEL: 7,
  ROLE: 8,
  MENTIONABLE: 9,
  NUMBER: 10,
};

/**
 * Discord application command types.
 */
export const APPLICATION_COMMAND_TYPES = {
  CHAT_INPUT: 1,
  USER: 2,
  MESSAGE: 3,
  HIDDEN: 4,
};

/**
 * Generates Invite Link
 *
 * @param {string} clientId Discord bot Id.
 * @returns {string} Invite link.
 */
export const INVITE_LINK = (clientId: string) => (`https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=1644972469495&scope=bot%20applications.commands`);
