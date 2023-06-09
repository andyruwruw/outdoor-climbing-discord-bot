/**
 * Typically, the Discord bot will listen for any events
 * that would result in a change in the database.
 * 
 * However in the case the Discord bot is stopped,
 * restarted, or the database wiped, the DataSync class
 * will update the database with any missed events.
 */

// Packages
// import {
//   Guild,
//   GuildChannel,
//   GuildMember,
//   NonThreadGuildBasedChannel,
//   OAuth2Guild,
// } from 'discord.js';

// // Local Imports
// import {
//   MESSAGE_DATA_SYNCED,
//   MESSAGE_DATA_SYNC_START,
// } from '../config/messages';
// import { Monitor } from './monitor';
// import { DiscordBot } from '../discord-bot';
// import { getDatabase } from '../database';
// import { sleep } from './sleep';

// // Types
// import {
//   IChannel,
//   IGuild,
// } from '../types';

// /**
//  * Ensures the database is synced with Discord.
//  */
// export class DataSync {
//   /**
//    * Ensures the database is synced with Discord.
//    *
//    * @param {DiscordBot} client Discord bot client.
//    */
//   static async syncDatabase(client: DiscordBot): Promise<void> {
//     try {
//       Monitor.log(
//         DataSync,
//         MESSAGE_DATA_SYNC_START,
//         Monitor.Layer.UPDATE,
//       );

//       await this._checkGuilds(client);

//       Monitor.log(
//         DataSync,
//         MESSAGE_DATA_SYNCED,
//         Monitor.Layer.UPDATE,
//       );
//     } catch (error) {
//       Monitor.log(
//         DataSync,
//         error,
//         Monitor.Layer.WARNING,
//       );
//     }
//   }

//   /**
//    * Ensures all guild the bot is apart of are in the database.
//    *
//    * @param {DiscordBot} client Discord.js bot client.
//    */
//   static async _checkGuilds(client: DiscordBot): Promise<void> {
//     const guilds = await this._getGuildsFromClient(client);
//     const databaseGuildIds = (await getDatabase().guild.find()).map((guild: IGuild) => guild.id);

//     for (let i = 0; i < guilds.length; i += 1) {
//       await sleep(500);
//       const guild = guilds[i];

//       if (!(databaseGuildIds.includes(guild.id))) {
//         await getDatabase().guild.create(
//           guild.id,
//           guild.name,
//           guild.iconURL(),
//         );
//       }

//       await this._checkChannels(guild);
//       await this._checkMembers(guild);
//     }
//   }

//   /**
//    * Ensures all channels in a guild are in the database.
//    *
//    * @param {Guild} guild Discord guild to check.
//    */
//   static async _checkChannels(guild: Guild): Promise<void> {
//     const channels = await this._getChannelsFromGuild(guild);
//     const databaseChannelIds = (await getDatabase().channel.find({
//       guild: guild.id,
//     })).map((channel: IChannel) => channel.id);

//     for (let i = 0; i < channels.length; i += 1) {
//       await sleep(500);
//       const channel = channels[i];

//       if (!(databaseChannelIds.includes(guild.id))) {
//         await getDatabase().channel.create(
//           channel.id,
//           guild.id,
//           channel.name,
//           '',
//           channel.parentId,
//         );
//       }
//     }
//   }

//   /**
//    * Ensures all members in a guild are in the database.
//    *
//    * @param {Guild} guild Discord guild to check.
//    */
//   static async _checkMembers(guild: Guild): Promise<void> {
//     const members = await this._getMembersFromGuild(guild);
//     const databaseMemberIds = (await getDatabase().member.find({
//       guild: guild.id,
//     })).map((member: IGuild) => member.id);

//     for (let i = 0; i < members.length; i += 1) {
//       const member = members[i];

//       if (!(databaseMemberIds.includes(member.id))) {
//         await getDatabase().member.create(
//           member.id,
//           guild.id,
//           member.user.username,
//           member.nickname,
//           member.user.avatar,
//           0,
//           0,
//         );
//       }
//     }
//   }

//   /**
//    * Retrieves the guilds the bot is a part of.
//    *
//    * @param {DiscordBot} client Discord bot client.
//    * @returns {Promise<Guild[]>} Guilds the bot is in..
//    */
//   static async _getGuildsFromClient(client: DiscordBot): Promise<Guild[]> {
//     const guilds = [
//       ...(await client.guilds.fetch({
//         limit: 200,
//       })).values(),
//     ] as OAuth2Guild[];

//     await sleep(500);

//     return Promise.all(guilds.map(async (guild: OAuth2Guild) => {
//       return guild.fetch();
//     }));
//   }

//   /**
//    * Retrieves the channels from a guild.
//    *
//    * @param {Guild} guild Guild to retrieve channels from.
//    * @returns {Promise<GuildChannel[]>} Channels from the guild.
//    */
//   static async _getChannelsFromGuild(guild: Guild): Promise<GuildChannel[]> {
//     const channels = [
//       ...(await guild.channels.fetch()).values(),
//     ];

//     await sleep(500);

//     return Promise.all(channels.map((async (channel: NonThreadGuildBasedChannel) => {
//       return channel.fetch();
//     })));
//   }

//   /**
//    * Retrieves the memberss from a guild.
//    *
//    * @param {Guild} guild Guild to retrieve members from.
//    * @returns {Promise<GuildMember[]>} Members from the guild.
//    */
//   static async _getMembersFromGuild(guild: Guild): Promise<GuildMember[]> {
//     const members = [
//       ...(await guild.members.list()).values(),
//     ];

//     await sleep(500);

//     return Promise.all(members);
//   }
// }
