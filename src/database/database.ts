/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { UsedAbstractDatabaseError } from '../errors/used-abstract-database-error';

// Types
import {
  Crag,
  NullableDataAccessObject,
  Forecast,
  Rock,
  Route,
  Send,
  SubCrag,
  TripAttendee,
  Trip,
  User,
  Weather,
} from '../types';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for Crags.
   */
  crag: NullableDataAccessObject<Crag> = null;

  /**
   * Data access object for Forecasts.
   */
  forecast: NullableDataAccessObject<Forecast> = null;

  /**
   * Data access object for Rocks.
   */
  rock: NullableDataAccessObject<Rock> = null;

  /**
   * Data access object for Routes.
   */
  route: NullableDataAccessObject<Route> = null;

  /**
   * Data access object for Sends.
   */
  send: NullableDataAccessObject<Send> = null;

  /**
   * Data access object for Sub-Crags.
   */
  subCrag: NullableDataAccessObject<SubCrag> = null;

  /**
   * Data access object for Trip Attendees.
   */
  tripAttendee: NullableDataAccessObject<TripAttendee> = null;

  /**
   * Data access object for Trips.
   */
  trip: NullableDataAccessObject<Trip> = null;

  /**
   * Data access object for Users.
   */
  user: NullableDataAccessObject<User> = null;

  /**
   * Data access object for Weather records..
   */
  weather: NullableDataAccessObject<Weather> = null;

  /**
   * Connects to database.
   *
   * @param {string | undefined} [databaseUrl=''] Database URL.
   * @param {string | undefined} [databaseUser=''] Database username.
   * @param {string | undefined} [databasePassword=''] Database password.
   */
  async connect(
    databaseUrl = '',
    databaseUser = '',
    databasePassword = '',
  ): Promise<void> {
    throw new UsedAbstractDatabaseError();
  }

  /**
   * Whether or not the database is connected.
   *
   * @returns {boolean} Whether or not the database is connected.
   */
  isConnected(): boolean {
    return false;
  }
}
