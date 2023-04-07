// Packages
import { Model } from 'mongoose';

// Local Imports
import { Route as RouteModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Route as RouteInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Routes.
 */
export class Route
  extends DataAccessObject<RouteInterface>
  implements DataAccessObjectInterface<RouteInterface> {
  /**
   * Creates an Route in the Database.
   *
   * @returns {RouteInterface} The route created.
   */
  async create(
    crag: string,
    subCrag: string,
    rock: string,
    name: string,
    alt = [],
    type = [],
    grade = 0,
    subGrade = 0,
    danger = 0,
    href = '#',
    color = 'Red',
    set = -1,
    isGym = false,
  ): Promise<RouteInterface> {
    return this._create({
      crag,
      subCrag,
      rock,
      name,
      alt,
      type,
      grade,
      subGrade,
      danger,
      href,
      color,
      set,
      isGym,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return RouteModel;
  }
}
