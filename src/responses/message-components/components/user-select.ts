// Packages
import { ComponentType } from 'discord.js';

// LocaL Imports
import { Component } from './component';
import { COMPONENT_TYPE } from '../../../config/discord';

export class UserSelectComponent extends Component {
  /**
   * Retrieves the Component's type.
   *
   * @returns {ComponentType} Type of the Component.
   */
  getType(): ComponentType {
    return COMPONENT_TYPE.USER_SELECT;
  }
}
