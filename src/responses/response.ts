/**
 * The Response class is abstract and defines methods
 * used by all responses, namely converting a concrete
 * implementation into a JSON object that Discord
 * recognizes as a message.
 * 
 * Messages can get complicated, with attatchments,
 * embeds, components and dynamic messages. All these
 * components are gathered via virtual methods, which
 * are overriden in concrete classes to give each 
 * response a unique behavior.
 * 
 * Use of this class is limited to concrete commands
 * inheriting from this class.
 */

// Packages
import {
  APIActionRowComponent,
  APIAttachment,
  APIEmbed,
  APIMessageActionRowComponent,
  ActionRowData,
  Attachment,
  AttachmentBuilder,
  AttachmentPayload,
  BufferResolvable,
  InteractionReplyOptions,
  JSONEncodable,
  MessageActionRowComponentBuilder,
  MessageActionRowComponentData,
} from 'discord.js';
import { Stream } from 'stream';

/**
 * Abstract response object.
 */
export class DiscordResponse {
  /**
   * Creates response object.
   * 
   * @returns {Promise<InteractionReplyOptions>} JSON of message object.
   */
  async create(): Promise<InteractionReplyOptions> {
    const pending = [
      this.getContent(),
      this.getEmbeds(),
      this.getFiles(),
      this.getComponents(),
    ];

    const [
      content,
      embeds,
      files,
      components,
    ] = await Promise.all(pending);

    return {
      content: content as string,
      embeds: embeds as (JSONEncodable<APIEmbed> | APIEmbed)[],
      files: files as (BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[],
      components: components as (JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>> | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder> | APIActionRowComponent<APIMessageActionRowComponent>)[],
      ephemeral: this.isEphemeral(),
    };
  }

  /**
   * Returns content for message.
   *
   * @returns {Promise<string>} Message content.
   */
  async getContent(): Promise<string> {
    return '';
  }

  /**
   * Returns embeds for message.
   *
   * @returns {Promise<(JSONEncodable<APIEmbed> | APIEmbed)[]>} Message embeds.
   */
  async getEmbeds(): Promise<(JSONEncodable<APIEmbed> | APIEmbed)[]> {
    return [];
  }

  /**
   * Returns attatched files for message.
   *
   * @returns {Promise<(BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[]>} Attatched files.
   */
  async getFiles(): Promise<(BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[]> {
    return [];
  }

  /**
   * Returns attatched message components.
   *
   * @returns {Promise<(JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>> | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder> | APIActionRowComponent<APIMessageActionRowComponent>)[]>} Message components.
   */
  async getComponents(): Promise<(JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>> | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder> | APIActionRowComponent<APIMessageActionRowComponent>)[]> {
    return [];
  }

  /**
   * Whether the response should only be viewable by the command user.
   *
   * @returns {boolean} Whether the response should only be viewable by the command user.
   */
  isEphemeral(): boolean {
    return false;
  }
}
