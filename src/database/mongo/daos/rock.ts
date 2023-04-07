// Packages
import { Model } from 'mongoose';

// Local Imports
import { Rock as RockModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Rock as RockInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Rocks.
 */
export class Rock
  extends DataAccessObject<RockInterface>
  implements DataAccessObjectInterface<RockInterface> {
  /**
   * Creates an Rock in the Database.
   *
   * @param {string} crag Id of the crag.
   * @param {string} name Name of the location.
   * @param {number} longitude Longitude of item.
   * @param {number} latitude Latitude of the item.
   * @param {CragType[]} [type = []] Type of climbing.
   * @param {string} [href = '#'] Link to item.
   * @param {string} [subCrag = ''] Subcrag this rock belongs to.
   * @param {number} [elevation = -50000] Elevation in feet.
   * @param {boolean} [isGym = false] Whether this is just a gym.
   * @returns {RockInterface} The rock created.
   */
  async create(
    crag: string,
    name: string,
    longitude: number,
    latitude: number,
    type = [],
    href: string = '#',
    subCrag: string = '',
    elevation = -50000,
    isGym = false,
  ): Promise<RockInterface> {
    return this._create({
      crag,
      name,
      longitude,
      latitude,
      type,
      href,
      subCrag,
      elevation,
      isGym,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return RockModel;
  }
}
