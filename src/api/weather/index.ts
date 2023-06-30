// Packages
import axios from 'axios';

// Local Imports
import { WeatherData } from './weather';

/**
 * Base URL for weather API.
 */
const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * Base API request parameters for relevant data.
 */
const BASE_PARAMS = [
  [ 'hourly', 'temperature_2m' ],
  [ 'hourly', 'relativehumidity_2m' ],
  [ 'hourly', 'precipitation_probability' ],
  [ 'hourly', 'precipitation' ],
  [ 'hourly', 'rain' ],
  [ 'hourly', 'showers' ],
  [ 'hourly', 'snowfall' ],
  [ 'hourly', 'snow_depth' ],
  [ 'hourly', 'weathercode' ],
  [ 'hourly', 'cloudcover' ],
  [ 'daily', 'weathercode' ],
  [ 'daily', 'temperature_2m_max' ],
  [ 'daily', 'temperature_2m_min' ],
  [ 'daily', 'sunrise' ],
  [ 'daily', 'sunset' ],
  [ 'daily', 'uv_index_max' ],
  [ 'daily', 'uv_index_clear_sky_max' ],
  [ 'daily', 'precipitation_sum' ],
  [ 'daily', 'rain_sum' ],
  [ 'daily', 'showers_sum' ],
  [ 'daily', 'snowfall_sum' ],
  [ 'daily', 'precipitation_hours' ],
  [ 'daily', 'precipitation_probability_max' ],
  [ 'temperature_unit', 'fahrenheit' ],
  [ 'windspeed_unit', 'mph' ],
  [ 'precipitation_unit', 'inch' ],
  [ 'timeformat', 'unixtime' ],
  [ 'past_days', '5' ],
  [ 'forecast_days', '14' ],
  [ 'timezone', 'GMT' ],
];

/**
 * Retrieves the weather for a location.
 *
 * @param {number} longitude Longitude of location.
 * @param {number} latitude Latitude of location.
 * @returns {Promise<any>} Weather response.
 */
const getWeather = async (
  longitude: number,
  latitude: number,
): Promise<WeatherData | null> => {
  try {
    const params = new URLSearchParams();

    params.append('latitude', `${latitude}`);
    params.append('longitude', `${longitude}`);

    for (let i = 0; i < BASE_PARAMS.length; i += 1) {
      params.append(BASE_PARAMS[i][0], BASE_PARAMS[i][1]);
    }

    const response = await axios.get(`${BASE_URL}?${params.toString()}`);

    if (response.status === 200) {
      return new WeatherData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default {
  getWeather,
};
