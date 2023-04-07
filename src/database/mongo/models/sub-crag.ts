// Packages
import mongoose from 'mongoose';

/**
 * Areas within a crag.
 */
const schema = new mongoose.Schema({
  /**
   * Crag this belongs to.
   */
  crag: {
    type: String,
    required: true,
  },

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
    required: false,
  },

  /**
   * Latitude of the crag.
   */
  latitude: {
    type: Number,
    required: false,
  },

  /**
   * Name of the climbing area.
   */
  name: {
    type: String,
    required: true,
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
});

export const SubCrag = mongoose.model('SubCrag', schema);
