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

/**
 * Response to the help request.
 */
export class HelpResponse extends DiscordResponse {
  /**
   * Returns attatched files for message.
   *
   * @returns {Promise<(BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[]>} Attatched files.
   */
  async getFiles(): Promise<(BufferResolvable | Stream | JSONEncodable<APIAttachment> | Attachment | AttachmentBuilder | AttachmentPayload)[]> {
    const component = ConvertSVG({
      children: [],
      height: '100',
      width: '100',
    }) as ReactElement<any, any>;

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
