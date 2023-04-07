// Packages
import { Model } from 'mongoose';

// Local Imports
import { Forecast as ForecastModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Forecast as ForecastInterface,
  DataAccessObject as DataAccessObjectInterface,
  HourlyForecast,
  DailyForecast,
} from '../../../types';

/**
 * Data access object for Forecasts.
 */
export class Forecast
  extends DataAccessObject<ForecastInterface>
  implements DataAccessObjectInterface<ForecastInterface> {
  /**
   * Creates an Forecast in the Database.
   *
   * @param {string} crag Id of the climbing area.
   * @param {number} date Date of the weather report.
   * @param {HourlyForecast[]} hourly 24 hour forecasts for crag.
   * @param {DailyForecast[]} daily 7 day forecasts for crag.
   * @returns {ForecastInterface} The forecast created.
   */
  async create(
    crag: string,
    date: number,
    hourly: HourlyForecast[],
    daily: DailyForecast[],
  ): Promise<ForecastInterface> {
    return this._create({
      crag,
      date,
      hourly,
      daily,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return ForecastModel;
  }
}
