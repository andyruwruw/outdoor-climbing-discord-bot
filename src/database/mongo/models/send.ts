// Packages
import mongoose from 'mongoose';

/**
 * Climbing areas.
 */
const schema = new mongoose.Schema({
  /**
   * Climber who sent.
   */
  climber: {
    type: String,
    required: true,
  },

  /**
   * Route sent.
   */
  route: {
    type: String,
    required: true,
  },

  /**
   * Date sent.
   */
  date: {
    type: Number,
    required: true,
  },

  /**
   * Whether it was a flash
   */
  flash: {
    type: Boolean,
    required: true,
  },
});

export const Send = mongoose.model('Send', schema);
