const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  // Name of the menu, in case a restaurant has multiple (ex. 'Lunch')
  available: {
    type: Boolean,
    required: false
  },
  // Section of the restaurant (Bar, Dining, Patio, etc)
  section: [
    {
      type: String,
      required: true,
      default: 'Dining'
    }
  ],
  canReserve: [
    {
      type: Boolean,
      required: false,
      default: true
    }
  ],
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'reservations'
    }
  ],
  bill: [
    {
      type: Schema.Types.ObjectId,
      ref: 'bill'
    }
  ],
  // 'not served before 11am', etc.
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
