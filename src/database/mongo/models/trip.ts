// Packages
import mongoose from 'mongoose';

/**
 * Climbing areas.
 */
const schema = new mongoose.Schema({
  /**
   * Crag to go to.
   */
  crag: {
    type: String,
    required: true,
  },

  /**
   * Date going.
   */
  date: {
    type: Number,
    required: true,
  },

  /**
   * Photos link.
   */
  photos: {
    type: String,
    default: '#',
  },
});

export const Trip = mongoose.model('Trip', schema);
