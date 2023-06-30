// Packages
import {
  APIAttachment,
  Attachment,
  AttachmentBuilder,
  AttachmentPayload,
  BufferResolvable,
  JSONEncodable,
} from 'discord.js';
import { ReactElement } from 'react';

// Local Imports
import { ConvertSVG } from './message-components/react-responses/convert-svg';
import { DiscordResponse } from './response';
import { Stream } from 'stream';
import { createImage } from './message-components/react-responses';
import { ForecastComponent } from '../components/forecast/forecast';
import { WeatherData } from '../api/weather/weather';

// Types
import { MountainProjectItem } from '../types';

/**
 * Response to a forecast request.
 */
export class ForecastResponse extends DiscordResponse {
  /**
   * Mountain project area details.
   */
  _area: MountainProjectItem;

  /**
   * Weather data on area.
   */
  _weather: WeatherData;

  /**
   * Instantiates a forecast response.
   */
  constructor(
    area: MountainProjectItem,
    weather: WeatherData,
  ) {
    super();

    this._area = area;
    this._weather = weather;
  }

  /**
   * Returns attatched files for message.
   *
   * @returns {Promise<(BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[]>} Attatched files.
   */
  async getFiles(): Promise<(BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[]> {
    const component = ForecastComponent({
      area: this._area,
      weather: this._weather,
    }) as ReactElement;

    const image = await createImage(component);

    return [ image ];
  }

  /**
   * Whether the response should only be viewable by the command user.
   *
   * @returns {boolean} Whether the response should only be viewable by the command user.
   */
  isEphemeral(): boolean {
    return true;
  }
}
