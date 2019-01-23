const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  // Name of the item as it appears on the menu
  name: {
    type: String,
    required: true
  },
  // Menu Category (Appetizer, Entree, Sushi, Beverage, etc.)
  category: {
    type: String,
    required: false
  },
  // Link to parent menu in case item doesn't have a category
  parentMenu: {
    type: Schema.Types.ObjectId,
    ref: 'menu'
  },
  // Price of the item
  price: {
    type: Number,
    required: true
  },
  // Amount of the item in inventory, or the amount that can be
  // served with the current inventory of ingrediants.
  inventory: {
    type: Number,
    required: false
  },
  // Special conditions, such as 'Dinner only', 'happy hour pricing',
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

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;
