const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * More will be added later. This is just basic to work with menus.
 */
const tableSchema = new Schema({
  // Number corresponding to the table for the hostess
  number: {
    type: Number,
    required: false
  },
  // List of bills assigned to the table
  bills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'bill'
    }
  ],
  // Street Address preferably, but not required
  status: {
    type: String,
    required: true,
    default: 'open'
  },
  // # of occupants at the table
  occupants: {
    type: Number,
    required: false,
    default: 0
  },
  // Special conditions
  flags: {
    type: [ String ],
    required: false
  },
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

const table = mongoose.model('table', tableSchema);

module.exports = table;
