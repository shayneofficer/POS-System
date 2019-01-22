const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  // Name of the menu, in case a restaurant has multiple (ex. 'Lunch')
  name: {
    type: String,
    required: false
  },
  // Menu Category (Appetizer, Entree, Sushi, Beverage, etc.)
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'menuCategory'
    }
  ],
  // Ref to parent restaurant for convenience.
  parentRestaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant'
  },
  // 'not served before 11am', etc.
  flags: {
    type: [String],
    required: false
  },
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

const menu = mongoose.model('menu', menuSchema);

module.exports = menu;
