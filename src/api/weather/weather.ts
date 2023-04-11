
export interface WeatherHourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  precipitation_probability: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  snow_depth: string;
  weathercode: string;
  cloudcover: string;
}

export interface WeatherHourly {
  time: number[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  precipitation_probability: number[];
  precipitation: number[];
  rain: number[];
  showers: number[];
  snowfall: number[];
  snow_depth: number[];
  weathercode: number[];
  cloudcover: number[];
}

export interface WeatherDailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  uv_index_max: string;
  uv_index_clear_sky_max: string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  snowfall_sum: string;
  precipitation_hours: string;
  precipitation_probability_max: string;
}

export interface WeatherDaily {
  time: number[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: number[];
  sunset: number[];
  uv_index_max: number[];
  uv_index_clear_sky_max: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  showers_sum: number[];
  snowfall_sum: number[];
  precipitation_hours: number[];
  precipitation_probability_max: (number | null)[];
}

export interface WeatherResponseData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: WeatherHourlyUnits;
}

/**
 * Holds weather related data.
 */
export class Weather {
  /**
   * Data provided by API.
   */
  _data: WeatherResponseData;

  constructor(data: WeatherResponseData) {
    this._data = data;
  }
}
