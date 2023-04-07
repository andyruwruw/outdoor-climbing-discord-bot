// Packages
import mongoose from 'mongoose';

/**
 * Climbing areas.
 */
const schema = new mongoose.Schema({
  /**
   * Id of the climbing area.
   */
  crag: {
    type: String,
    required: true,
  },

  /**
   * Date of the weather report.
   */
  date: {
    type: Number,
    required: true,
  },

  /**
   * Temperature of crag.
   */
  temp: {
    type: Number,
    required: true,
  },

  /**
   * Dew point of crag.
   */
  dewPoint: {
    type: Number,
    required: true,
  },

  /**
   * Humidity of crag.
   */
  humidity: {
    type: Number,
    required: true,
  },

  /**
   * Clouds of crag.
   */
  clouds: {
    type: Number,
    required: true,
  },

  /**
   * Weather type of crag.
   * 
   * https://openweathermap.org/weather-conditions
   */
  type: {
    type: Number,
    required: true,
  },
});

export const Weather = mongoose.model('Weather', schema);
