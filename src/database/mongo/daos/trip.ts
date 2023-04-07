// Packages
import { Model } from 'mongoose';

// Local Imports
import { Trip as TripModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Trip as TripInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Trips.
 */
export class Trip
  extends DataAccessObject<TripInterface>
  implements DataAccessObjectInterface<TripInterface> {
  /**
   * Creates an Trip in the Database.
   *
   * @returns {TripInterface} The Trip created.
   */
  async create(
    crag: string,
    date: number,
    photos = '#',
  ): Promise<TripInterface> {
    return this._create({
      crag,
      date,
      photos,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return TripModel;
  }
}
