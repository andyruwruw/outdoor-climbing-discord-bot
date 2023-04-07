// Packages
import { Model } from 'mongoose';

// Local Imports
import { Weather as WeatherModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Weather as WeatherInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Weathers.
 */
export class Weather
  extends DataAccessObject<WeatherInterface>
  implements DataAccessObjectInterface<WeatherInterface> {
  /**
   * Creates an Weather in the Database.
   *
   * @returns {WeatherInterface} The weather created.
   */
  async create(
    crag: string,
    date: number,
    temp: number,
    dewPoint: number,
    humidity: number,
    clouds: number,
    type: number,
  ): Promise<WeatherInterface> {
    return this._create({
      crag,
      date,
      temp,
      dewPoint,
      humidity,
      clouds,
      type,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return WeatherModel;
  }
}
