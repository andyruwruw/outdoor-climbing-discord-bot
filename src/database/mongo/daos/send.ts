// Packages
import { Model } from 'mongoose';

// Local Imports
import { Send as SendModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Send as SendInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Sends.
 */
export class Send
  extends DataAccessObject<SendInterface>
  implements DataAccessObjectInterface<SendInterface> {
  /**
   * Creates an Send in the Database.
   *
   * @returns {SendInterface} The send created.
   */
  async create(
    climber: string,
    route: string,
    date: number,
    flash: boolean,
  ): Promise<SendInterface> {
    return this._create({
      climber,
      route,
      date,
      flash,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return SendModel;
  }
}
