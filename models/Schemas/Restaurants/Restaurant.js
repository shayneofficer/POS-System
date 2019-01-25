const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * More will be added later. This is just basic to work with menus.
 */
const RestaurantSchema = new Schema({
  // Restaurant Name
  name: {
    type: String,
    required: true
  },
  // Restaurant's Menus
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: 'menu'
    }
  ],
  // Street Address preferably, but not required
  location: {
    type: String,
    required: false
  },
  // Hours of Operation (array of objects most likely)
  hours: {
    type: [ Object ],
    required: false
  },
  // Special conditions
  flags: {
    type: [ String ],
    required: false
  },
  // Employee Usernames
  employees: {
    type: [ String ],
    required: false
  },
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
