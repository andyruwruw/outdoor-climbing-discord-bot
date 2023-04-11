/**
 * Types of data in the database.
 */
export type DatabaseColumnTypes = string | number | boolean | Date | string[] | number[];

/**
 * Filter object used to limit queries.
 */
export interface QueryFilter {
  [key: string]: DatabaseColumnTypes
  | DatabaseColumnTypes[]
  | Record<string, DatabaseColumnTypes
  | DatabaseColumnTypes[]>;
}

/**
 * Projection on queries to limit columns.
 */
export type QueryProjection = Record<string, number> | string | string[];

/**
 * Update object used to update data in the database.
 */
export interface UpdateQuery {
  [key: string]: DatabaseColumnTypes | Record<string, DatabaseColumnTypes>;
}

export interface DataAccessObject<T> {
  _create: (item: T) => Promise<T>;
  create: (...args: any[]) => Promise<T>;

  findOne: (
    filter?: QueryFilter,
    projection?: QueryProjection,
  ) => Promise<T | null>;

  find: (
    filter?: QueryFilter,
    projection?: QueryProjection,
    offset?: number,
    limit?: number,
  ) => Promise<T[]>;

  findById: (id: string) => Promise<T | null>;

  delete: (filter?: QueryFilter) => Promise<number>;

  deleteById: (id: string) => Promise<boolean>;

  updateOne: (
    filter?: QueryFilter,
    update?: UpdateQuery,
    insertNew?: boolean,
  ) => Promise<boolean>;

  updateMany: (
    filter?: QueryFilter,
    update?: UpdateQuery,
    insertNew?: boolean,
  ) => Promise<number>;

  clear: () => Promise<void>;
}

export type NullableDataAccessObject<T> = DataAccessObject<T> | null;

export type CragType = 'boulder' | 'sport' | 'trad';

export interface DatabaseItem {
  /**
   * Item unique identifier.
   */
  _id?: string;
}


export interface Location extends DatabaseItem {
  /**
   * Elevation in feet.
   */
  elevation: number;

  /**
   * Longitude of item.
   */
  longitude: number;

  /**
   * Latitude of the item.
   */
  latitude: number;

  /**
   * Name of the location.
   */
  name: string;

  /**
   * Type of climbing.
   */
  type: CragType[];

  /**
   * Whether this is just a gym.
   */
  isGym: boolean;
}

export interface Crag extends Location {
  /**
   * Address of the crag.
   */
  address: string;

  /**
   * ISO Alpha-2 code of country of crag.
   */
  country: string;

  /**
   * USPS State Abbreviations of state of crag or alternate two letter coding.
   */
  state: string;

  /**
   * Local area of crag.
   */
  locale: string;

  /**
   * Link to item.
   */
  href: string;
}

export interface SubCrag extends Location {
  /**
   * Crag this belongs to.
   */
  crag: string;

  /**
   * Link to item.
   */
  href: string;
}

export interface Rock extends Location {
  /**
   * Crag this belongs to.
   */
  crag: string;

  /**
   * Subcrag this rock belongs to.
   */
  subCrag?: string;

  /**
   * Link to item.
   */
  href: string;
}

export interface Route {
  /**
   * Crag this route belongs to.
   */
  crag: string;

  /**
   * Subcrag this route belongs to.
   */
  subCrag: string;

  /**
   * Boulder / wall this route belongs to.
   */
  rock: string;

  /**
   * Name of the climbing area.
   */
  name: string;

  /**
   * Name of the climbing area.
   */
  alt: string[];

  /**
   * Type of climbing.
   */
  type: CragType[];

  /**
   * Grade of the route.
   */
  grade: number;

  /**
   * Subgrade of the route.
   */
  subGrade: number;

  /**
   * Rating of danger of the route.
   */
  danger: number;

  /**
   * Link to item.
   */
  href: string;

  /**
   * Whether this is a gym route.
   */
  isGym: boolean;

  /**
   * Color of holds.
   */
  color: string;

  /**
   * Date the route was set.
   */
  set: number;
}

export interface Send {
  /**
   * Climber who sent.
   */
  climber: string;

  /**
   * Route sent.
   */
  route: string;

  /**
   * Date sent.
   */
  date: number;

  /**
   * Whether it was a flash
   */
  flash: boolean;
}

export interface TripAttendee {
  /**
   * Id of the trip.
   */
  trip: string;

  /**
   * User attending
   */
  user: string;

  /**
   * Whether the user will be bringing pads.
   */
  pads: number;

  /**
   * Whether the user will be bringing roped gear.
   */
  ropes: number;

  /**
   * Whether the user will be bringing their own harness.
   */
  harness: boolean;

  /**
   * Whether the user needs a ride.
   * 
   * -1 Needs Ride
   * 0 Prefers carpool
   * 1 Driving alone
   * 2 Willing to drive
   */
  car: number;
}

export interface Trip {
  /**
   * Crag to go to.
   */
  crag: string;

  /**
   * Date going.
   */
  date: number;

  /**
   * Photos link.
   */
  photos: string;
}

export interface User {
  /**
   * User Discord Id.
   */
  discord: string;

  /**
   * Discord username.
   */
  username: string;

  /**
   * Full name of user.
   */
  name: string;

  /**
   * Climber location.
   */
  origin: string;
}

export interface Weather {
  /**
   * Id of the climbing area.
   */
  crag: string;

  /**
   * Date of the weather report.
   */
  date: number;

  /**
   * Temperature of crag.
   */
  temp: number;

  /**
   * Dew point of crag.
   */
  dewPoint: number;

  /**
   * Humidity of crag.
   */
  humidity: number;

  /**
   * Clouds of crag.
   */
  clouds: number;

  /**
   * Weather type of crag.
   * 
   * https://openweathermap.org/weather-conditions
   */
  type: number;
}

export interface ForecastSegment {
  /**
   * Date of forecast.
   */
  date: number;

  /**
   * Weather type of crag.
   * 
   * https://openweathermap.org/weather-conditions
   */
  type: number;

  /**
   * Clouds of crag.
   */
  clouds: number;

  /**
   * Humidity of crag.
   */
  humidity: number;
}

export interface HourlyForecast extends Forecast {
  /**
   * Temperature of crag.
   */
  temp: number;
}

export interface DailyForecast extends Forecast {
  /**
   * Minimum temperature of crag.
   */
  minTemp: number;

  /**
   * Maximum temperature of crag.
   */
  maxTemp: number;

  /**
   * Sunrise time of crag.
   */
  sunrise: number;

  /**
   * Sunset time of crag.
   */
  sunset: number;
}

export interface Forecast extends DatabaseItem {
  /**
   * Id of the climbing area.
   */
  crag: string;

  /**
   * Date of the weather report.
   */
  date: number;

  /**
   * 24 hour forecasts for crag.
   */
  hourly: HourlyForecast[];

  /**
   * 7 day forecasts for crag.
   */
  daily: DailyForecast[];
}

export interface Coordinates {
  long: number;
  lat: number;
}

export interface MountainProjectItem {
  elevation: number | null;
  pageViews: number | null;
  fa: string | null;
  type: string | null;
  name: string | null;
  grade: string | null;
  rating: number | null;
  coords: Coordinates | null;
  url: string | null;
  isRoute: boolean;
  isArea: boolean;
}