// Packages
import mongoose from 'mongoose';

/**
 * Areas within a crag.
 */
const schema = new mongoose.Schema({
  /**
   * Id of the trip.
   */
  trip: {
    type: String,
    required: true,
  },

  /**
   * User attending
   */
  user: {
    type: String,
    required: true,
  },

  /**
   * Whether the user will be bringing pads.
   */
  pads: {
    type: Number,
    default: 0,
  },

  /**
   * Whether the user will be bringing roped gear.
   */
  ropes: {
    type: Number,
    default: 0,
  },

  /**
   * Whether the user will be bringing their own harness.
   */
  harness: {
    type: Boolean,
    default: false,
  },

  /**
   * Whether the user needs a ride.
   * 
   * -1 Needs Ride
   * 0 Prefers carpool
   * 1 Driving alone
   * 2 Willing to drive
   */
  car: {
    type: Number,
    default: false,
  },
});

export const TripAttendee = mongoose.model('TripAttendee', schema);
