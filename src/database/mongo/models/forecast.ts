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
   * 24 hour forecasts for crag.
   */
  hourly: {
    type: Array,
    of: {
      /**
       * Date of forecast.
       */
      date: {
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

      /**
       * Clouds of crag.
       */
      clouds: {
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
       * Temperature of crag.
       */
      temp: {
        type: Number,
        required: true,
      },
    },
  },

  /**
   * 7 day forecasts for crag.
   */
  daily: {
    type: Array,
    of: {
      /**
       * Date of forecast.
       */
      date: {
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

      /**
       * Clouds of crag.
       */
      clouds: {
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
       * Minimum temperature of crag.
       */
      minTemp: {
        type: Number,
        required: true,
      },

      /**
       * Maximum temperature of crag.
       */
      maxTemp: {
        type: Number,
        required: true,
      },

      /**
       * Sunrise time of crag.
       */
      sunrise: {
        type: Number,
        required: true,
      },

      /**
       * Sunset time of crag.
       */
      sunset: {
        type: Number,
        required: true,
      },
    },
  },
});

export const Forecast = mongoose.model('Forecast', schema);
