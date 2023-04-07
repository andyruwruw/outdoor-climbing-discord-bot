// Packages
import mongoose from 'mongoose';

/**
 * Climbing areas.
 */
const schema = new mongoose.Schema({
  /**
   * Crag this route belongs to.
   */
  crag: {
    type: String,
    required: true,
  },

  /**
   * Subcrag this route belongs to.
   */
  subCrag: {
    type: String,
    required: true,
  },

  /**
   * Boulder / wall this route belongs to.
   */
  rock: {
    type: String,
    required: true,
  },

  /**
   * Name of the climbing area.
   */
  name: {
    type: String,
    required: true,
  },

  /**
   * Name of the climbing area.
   */
  alt: {
    type: Array,
    of: {
      type: String,
    },
    default: [],
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
   * Grade of the route.
   */
  grade: {
    type: Number,
    default: 0,
  },

  /**
   * Subgrade of the route.
   */
  subGrade: {
    type: Number,
    default: 0,
  },

  /**
   * Rating of danger of the route.
   */
  danger: {
    type: Number,
    default: 0,
  },

  /**
   * Link to item.
   */
  href: {
    type: String,
    default: '#',
  },

  /**
   * Whether this is a gym route.
   */
  isGym: {
    type: Boolean,
    default: false,
  },

  /**
   * Color of holds.
   */
  color: {
    type: String,
    default: 'Red',
  },

  /**
   * Date the route was set.
   */
  set: {
    type: Number,
    default: -1,
  },
});

export const Route = mongoose.model('Route', schema);
