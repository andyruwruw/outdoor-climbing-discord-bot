// Packages
import dotenv from 'dotenv';

dotenv.config();

/**
 * Static methods for retrieving environment variables.
 */
export class Environment {
  /**
   * Retrieves password for connecting with database if needed.
   *
   * @returns {string} Password for connecting with database if needed.
   */
  static getDatabasePassword(): string {
    return process.env.DATABASE_PASSWORD as string || '';
  }

  /**
   * Retrieves type of database to use.
   *
   * @returns {string} Type of database to use.
   */
  static getDatabaseType(): string {
    return process.env.DATABASE_TYPE || 'cache';
  }

  /**
   * Retrieves URL for connecting with database if needed.
   *
   * @returns {string} URL for connecting with database if needed.
   */
  static getDatabaseUrl(): string {
    return process.env.DATABASE_URL as string || 'mongodb://localhost:27017/';
  }

  /**
   * Retrieves username for connecting with database if needed.
   *
   * @returns {string} Username for connecting with database if needed.
   */
  static getDatabaseUser(): string {
    return process.env.DATABASE_USER as string || '';
  }

  /**
   * Whether log layer DEBUG is enabled.
   *
   * @returns {boolean} Whether log layer DEBUG is enabled.
   */
  static isDebugLayerEnabled(): boolean {
    return process.env.DISABLE_DEBUG_LAYER !== 'true';
  }

  /**
   * Whether log layer WARNING is enabled.
   *
   * @returns {boolean} Whether log layer WARNING is enabled.
   */
  static isWarningLayerEnabled(): boolean {
    return process.env.DISABLE_WARNING_LAYER !== 'true';
  }

  /**
   * Whether log layer UPDATE is enabled.
   *
   * @returns {boolean} Whether log layer UPDATE is enabled.
   */
  static isUpdateLayerEnabled(): boolean {
    return process.env.DISABLE_UPDATE_LAYER !== 'true';
  }

  /**
   * Retrieves discord bot token.
   *
   * @returns {string} Discord token.
   */
  static getDiscordBotToken(): string {
    return process.env.DISCORD_BOT_TOKEN as string | '';
  }

  /**
   * Retrieves default response color.
   *
   * @returns {number} Default color for Discord components.
   */
  static getDefaultColor(): number {
    return process.env.DEFAULT_COLOR ? 
      parseInt(process.env.DEFAULT_COLOR as string, 10) : 0xd9823b;
  }

  /**
   * Retrieves API key for weather requests.
   *
   * @returns {string} API key for weather requests.
   */
  static getWeatherApiKey(): string {
    return process.env.WEATHER_API_KEY as string;
  }

  static getDiscordApplicationId(): string {
    return 'null';
  }
}
