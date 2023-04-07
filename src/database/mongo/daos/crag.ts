// Packages
import { Model } from 'mongoose';

// Local Imports
import { Crag as CragModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Crag as CragInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Crags.
 */
export class Crag
  extends DataAccessObject<CragInterface>
  implements DataAccessObjectInterface<CragInterface> {
  /**
   * Creates an Crag in the Database.
   *
   * @param {number} longitude Longitude of item.
   * @param {number} latitude Latitude of the item.
   * @param {string} name Name of the location.
   * @param {CragType[]} [type = []] Type of climbing.
   * @param {number} [elevation = -50000] Elevation in feet.
   * @param {string} [address = ''] Address of the crag.
   * @param {string} [country = 'US'] ISO Alpha-2 code of country of crag.
   * @param {string} [state = 'OR'] USPS State Abbreviations of state of crag or alternate two letter coding.
   * @param {string} [locale = 'Willamette Valley'] Local area of crag.
   * @param {string} [href = '#'] Link to item.
   * @param {boolean} [isGym = false] Whether this is just a gym.
   * @returns {CragInterface} The crag created.
   */
  async create(
    longitude: number,
    latitude: number,
    name: string,
    type: [],
    elevation = -50000,
    address = '',
    country = 'US',
    state = 'OR',
    locale = 'Willamette Valley',
    href = '#',
    isGym = false,
  ): Promise<CragInterface> {
    return this._create({
      longitude,
      latitude,
      name,
      type,
      elevation,
      address,
      country,
      state,
      locale,
      href,
      isGym,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return CragModel;
  }
}
