// Packages
import mongoose from 'mongoose';

/**
 * Areas within a crag.
 */
const schema = new mongoose.Schema({
  /**
   * User Discord Id.
   */
  discord: {
    type: String,
    required: true,
  },

  /**
   * Discord username.
   */
  username: {
    type: String,
    default: '',
  },

  /**
   * Full name of user.
   */
  name: {
    type: String,
    default: '',
  },

  /**
   * Climber location.
   */
  origin: {
    type: String,
    default: 'Corvallis',
  },
});

export const User = mongoose.model('User', schema);
