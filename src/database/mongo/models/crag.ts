// Packages
import mongoose from 'mongoose';

/**
 * Climbing areas.
 */
const schema = new mongoose.Schema({
  /**
   * Elevation in feet.
   */
  elevation: {
    type: Number,
    required: false,
  },

  /**
   * Longitude of crag.
   */
  longitude: {
    type: Number,
    required: true,
  },

  /**
   * Latitude of the crag.
   */
  latitude: {
    type: Number,
    required: true,
  },

  /**
   * Address of the crag.
   */
  address: {
    type: String,
    default: '',
  },

  /**
   * Name of the climbing area.
   */
  name: {
    type: String,
    required: true,
  },

  /**
   * ISO Alpha-2 code of country of crag.
   * 
   * @type {string}
   */
  country: {
    type: String,
    default: 'US',
  },

  /**
   * USPS State Abbreviations of state of crag or alternate two letter coding.
   * 
   * @type {string}
   */
  state: {
    type: String,
    default: 'OR',
  },

  /**
   * Local area of crag.
   * 
   * @type {string}
   */
  locale: {
    type: String,
    default: 'Willamette Valley',
  },

  /**
   * Type of climbing.
   * 
   * @type {CragType[]}
   */
  type: {
    type: Array,
    of: {
      type: String,
    },
    default: [],
  },

  /**
   * Link to item.
   */
  href: {
    type: String,
    default: '#',
  },

  /**
   * Whether this is just a gym.
   */
  isGym: {
    type: Boolean,
    default: false,
  },
});

export const Crag = mongoose.model('Crag', schema);
