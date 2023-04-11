// Packages
import { APIEmbed, APIEmbedAuthor, APIEmbedField, APIEmbedFooter, APIEmbedImage, APIEmbedThumbnail, APIEmbedVideo } from 'discord.js';
import { DEFAULT_COLOR } from 'src/config/discord';

/**
 * Abstract representation of Discord embed.
 */
export class Embed {
  /**
   * Creates the embed.
   *
   * @returns {Promise<APIEmbed>} JSON of embed object.
   */
  async create(): Promise<APIEmbed | undefined> {
    try {
      const pending = [
        this.getTitle(),
        this.getDescription(),
        this.getUrl(),
        this.getTimestamp(),
        this.getColor(),
        this.getFields(),
        this.getAuthor(),
        this.getThumbnail(),
        this.getImage(),
        this.getVideo(),
        this.getFooter(),
      ];

      const [
        title,
        description,
        url,
        timestamp,
        color,
        fields,
        author,
        thumbnail,
        image,
        video,
        footer,
      ] = await Promise.all(pending);

      return {
        title: title as string,
        description: description as string,
        url: url as string,
        timestamp: timestamp as string,
        color: color as number,
        fields: fields as APIEmbedField[],
        author: author as APIEmbedAuthor,
        thumbnail: thumbnail as APIEmbedThumbnail,
        image: image as APIEmbedImage,
        video: video as APIEmbedVideo,
        footer: footer as APIEmbedFooter,
      };
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }

  /**
   * Retrieves the title of the embed.
   *
   * @returns {Promise<string | undefined>} Title of the embed.
   */
  async getTitle(): Promise<string | undefined> {
    return undefined;
  }

  /**
   * Retrieves the description of the embed.
   *
   * @returns {Promise<string | undefined>} Description of the embed.
   */
  async getDescription(): Promise<string | undefined> {
    return undefined;
  }

  /**
   * Retreives the url of the embed.
   *
   * @returns {Promise<string | undefined>} Url of the embed.
   */
  async getUrl(): Promise<string | undefined> {
    return undefined;
  }
  
  /**
   * Retrieves the timestamp of the embed.
   *
   * @returns {Promise<string>} Timestamp of the embed. 
   */
  async getTimestamp(): Promise<string | undefined> {
    return undefined;
  }

  /**
   * Retrieves the color of the embed.
   *
   * @returns {Promise<number>} Color of the embed.
   */
  async getColor(): Promise<number> {
    return DEFAULT_COLOR;
  }

  /**
   * Retrieves the embeds fields.
   *
   * @returns {Promise<APIEmbedField[] | undefined>} Embed fields.
   */
  async getFields(): Promise<APIEmbedField[] | undefined> {
    return undefined;
  }

  /**
   * Retrieves the embeds author.
   * 
   * @returns {Promise<APIEmbedAuthor | undefined>} Embed author.
   */
  async getAuthor(): Promise<APIEmbedAuthor | undefined> {
    return undefined;
  }

  /**
   * Retrieves the embeds thumbnail.
   * 
   * @returns {Promise<APIEmbedThumbnail | undefined>} Embed thumbnail.
   */
  async getThumbnail(): Promise<APIEmbedThumbnail | undefined> {
    return undefined;
  }

  /**
   * Retrieves the embeds image.
   * 
   * @returns {Promise<APIEmbedImage | undefined>} Embed image.
   */
  async getImage(): Promise<APIEmbedImage | undefined> {
    return undefined;
  }

  /**
   * Retrieves the embeds video.
   * 
   * @returns {Promise<APIEmbedVideo | undefined>} Embed video.
   */
  async getVideo(): Promise<APIEmbedVideo | undefined> {
    return undefined;
  }

  /**
   * Retrieves the embeds footer.
   * 
   * @returns {Promise<APIEmbedFooter | undefined>} Embed footer.
   */
  async getFooter(): Promise<APIEmbedFooter | undefined> {
    return undefined;
  }
}