// Packages
import {
  connect,
  connection,
} from 'mongoose';

// Local Imports
import {
  Crag,
  Forecast,
  Rock,
  Route,
  Send,
  SubCrag,
  TripAttendee,
  Trip,
  User,
  Weather,
} from './daos';
import { Database } from '../database';
import { DatabaseUrlMissingError } from '../../errors/database-url-missing';
import { MESSAGE_DATABASE_CONNECTION_SUCCESS } from '../../config/messages';
import { Monitor } from '../../helpers/monitor';
import { Environment } from '../../helpers/environment';

/**
 * Database connection to MongoDB.
 */
export class MongoDatabase extends Database {
  /**
   * Data access object for Crags.
   */
  crag: Crag;

  /**
   * Data access object for Forecasts.
   */
  forecast: Forecast;

  /**
   * Data access object for Rocks.
   */
  rock: Rock;

  /**
   * Data access object for Routes.
   */
  route: Route;

  /**
   * Data access object for Sends.
   */
  send: Send;

  /**
   * Data access object for Sub-Crags.
   */
  subCrag: SubCrag;

  /**
   * Data access object for Trip Attendees.
   */
  tripAttendee: TripAttendee;

  /**
   * Data access object for Trips.
   */
  trip: Trip;

  /**
   * Data access object for Users.
   */
  user: User;

  /**
   * Data access object for Weather records..
   */
  weather: Weather;

  /**
   * Instantiates MongoDatabase with correct queries.
   */
  constructor() {
    super();

    this.crag = new Crag();
    this.forecast = new Forecast();
    this.rock = new Rock();
    this.route = new Route();
    this.send = new Send();
    this.subCrag = new SubCrag();
    this.tripAttendee = new TripAttendee();
    this.trip = new Trip();
    this.user = new User();
    this.weather = new Weather();
  }

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    const authorizedUrl = Environment.getDatabaseUrl()
      .replace(
        '<user>',
        Environment.getDatabaseUser(),
      )
      .replace(
        '<password>',
        Environment.getDatabasePassword(),
      );
    await connect(authorizedUrl);

    Monitor.log(
      MongoDatabase,
      MESSAGE_DATABASE_CONNECTION_SUCCESS,
      Monitor.Layer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return connection.readyState === 1;
  }
}
