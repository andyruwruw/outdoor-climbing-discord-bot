// Packages
import { Model } from 'mongoose';

// Local Imports
import { TripAttendee as TripAttendeeModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  TripAttendee as TripAttendeeInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for TripAttendees.
 */
export class TripAttendee
  extends DataAccessObject<TripAttendeeInterface>
  implements DataAccessObjectInterface<TripAttendeeInterface> {
  /**
   * Creates an TripAttendee in the Database.
   *
   * @returns {TripAttendeeInterface} The Trip Attendee created.
   */
  async create(
    trip: string,
    user: string,
    pads = 0,
    ropes = 0,
    harness = false,
    car = 0,
  ): Promise<TripAttendeeInterface> {
    return this._create({
      trip,
      user,
      pads,
      ropes,
      harness,
      car,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return TripAttendeeModel;
  }
}
