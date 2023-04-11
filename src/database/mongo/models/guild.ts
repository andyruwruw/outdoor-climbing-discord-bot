// Packages
import mongoose from 'mongoose';

/**
 * Climbing areas.
 */
const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  joined: {
    type: Date,
    default: new Date(),
  },
});

export const Guild = mongoose.model('Guild', schema);
