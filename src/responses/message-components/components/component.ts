/**
 * The Component class is abstract and defines methods
 * used by all components, namely converting a concrete
 * implementation into a JSON object that Discord
 * recognizes as a component.
 * 
 * Use of this class is limited to concrete components
 * inheriting from this class.
 */

// Packages
import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
  ActionRowData,
  ComponentType,
  JSONEncodable,
  MessageActionRowComponentBuilder,
  MessageActionRowComponentData,
} from 'discord.js';

// Local Imports
import { UsedAbstractComponentError } from 'src/errors/used-abstract-component-error';

export class Component {
  /**
   * Converts the component into data for uploading to Discord.
   *
   * @returns {Promise<(JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>> | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder> | APIActionRowComponent<APIMessageActionRowComponent>)>} Discord accepted object for command.
   */
  async create(): Promise<(JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>>
  | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder>
  | APIActionRowComponent<APIMessageActionRowComponent>)> {
    const data = {
      type: 1,
    } as unknown as JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>>
    | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder>
    | APIActionRowComponent<APIMessageActionRowComponent>;

    return data;
  }

  /**
   * Retrieves the Component's type.
   *
   * @returns {ComponentType} Type of the Component.
   */
  getType(): ComponentType {
    throw new UsedAbstractComponentError();
  }

  /**
   * Retrieves the Component's type.
   *
   * @returns {number} Type of the Component.
   */
  async getComponents(): Promise<(JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent>>
  | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder>
  | APIActionRowComponent<APIMessageActionRowComponent>)[] | undefined> {
    return undefined;
  }
}
