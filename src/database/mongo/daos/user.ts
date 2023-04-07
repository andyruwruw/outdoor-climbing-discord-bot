// Packages
import { Model } from 'mongoose';

// Local Imports
import { User as UserModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  User as UserInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Users.
 */
export class User
  extends DataAccessObject<UserInterface>
  implements DataAccessObjectInterface<UserInterface> {
  /**
   * Creates an User in the Database.
   *
   * @returns {UserInterface} The user created.
   */
  async create(
    discord: string,
    username: string,
    name = '',
    origin = '',
  ): Promise<UserInterface> {
    return this._create({
      discord,
      username,
      name,
      origin,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return UserModel;
  }
}
