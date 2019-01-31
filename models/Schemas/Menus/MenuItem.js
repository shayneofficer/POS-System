const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  // Name of the item as it appears on the menu
  name: {
    type: String,
    required: true
  },
  // Price of the item
  price: {
    type: Number,
  },
  // Amount of the item in inventory, or the amount that can be
  // served with the current inventory of ingrediants.
  inventory: {
    type: Number,
  },
  // Special conditions, such as 'Dinner only', 'happy hour pricing',
  // 'not served before 11am', etc.
  flags: {
    type: [ String ],
  },
  // Date that the document was created or last updated
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = MenuItemSchema;
