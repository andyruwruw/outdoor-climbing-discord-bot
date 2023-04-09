// Packages
import axios from 'axios';

// Local Imports
import { Environment } from '../helpers/environment';

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

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
) => {
  try {
    const params = new URLSearchParams();

    params.append('lat', `${latitude}`);
    params.append('lon', `${longitude}`);
    params.append('exclude', 'minutely,alerts');
    params.append('appid', Environment.getWeatherApiKey());

    const response = await axios.get(`${BASE_URL}?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

/**
 * Retrieves historical weather for a location.
 *
 * @param {number} longitude Longitude of location.
 * @param {number} latitude Latitude of location.
 * @param {number} date When to retrieve weather from.
 * @returns {Promise<any>} Weather response.
 */
const getOldWeather = async (
  longitude: number,
  latitude: number,
  date: number,
) => {
  try {
    const params = new URLSearchParams();

    params.append('lat', `${latitude}`);
    params.append('lon', `${longitude}`);
    params.append('dt', `${date}`);
    params.append('appid', Environment.getWeatherApiKey());

    const response = await axios.get(`${BASE_URL}/timemachine?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default {
  getWeather,
  getOldWeather,
};
