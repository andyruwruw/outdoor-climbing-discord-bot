// Packages
import { Model } from 'mongoose';

// Local Imports
import { SubCrag as SubCragModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  SubCrag as SubCragInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for SubCrags.
 */
export class SubCrag
  extends DataAccessObject<SubCragInterface>
  implements DataAccessObjectInterface<SubCragInterface> {
  /**
   * Creates an SubCrag in the Database.
   *
   * @returns {SubCragInterface} The Sub-Crag created.
   */
  async create(
    crag: string,
    name: string,
    longitude = 0,
    latitude = 0,
    type = [],
    elevation = -50000,
    href = '#',
    isGym = false,
  ): Promise<SubCragInterface> {
    return this._create({
      crag,
      name,
      longitude,
      latitude,
      type,
      elevation,
      href,
      isGym,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return SubCragModel;
  }
}
