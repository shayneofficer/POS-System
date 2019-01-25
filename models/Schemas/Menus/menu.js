const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MenuItemSchema = require('./menuItem');

const MenuSchema = new Schema({
  // Name of the menu, in case a restaurant has multiple (ex. 'Lunch')
  name: {
    type: String,
    required: false
  },
  // 'not served before 11am', etc.
  flags: {
    type: [ String ],
    required: false
  },
  items: [MenuItemSchema],
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
