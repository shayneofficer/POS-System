const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * More will be added later. This is just basic to work with menus.
 */
const EmployeeSchema = new Schema({
  // Paid or not
  name: {
    type: String,
  },
  // Hours are array of strings,
  // Ex. ['Sat 6-9', 'Mon 5-9']
  scheduledHours: [String],
  wage: {
    type: Number,
    default: 0
  },
  hoursWorked: {
    type: Number,
    default: 0
  },
  dateUpdated: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = EmployeeSchema;
