const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * More will be added later. This is just basic to work with menus.
 */
const BillSchema = new Schema({
  // Paid or not
  paid: {
    type: Boolean,
    required: true,
    default: false
  },
  // Total $ amount the bill is for (after tax)
  total: {
    type: Number,
    required: true,
    default: 0.00
  },
  // $ Amount that has been paid already
  paid: {
    type: Number,
    required: true,
    default: 0.00
  },
  // Table the bill is associated with
  table: {
    type: Schema.Types.ObjectId,
    ref: 'table'
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

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;
