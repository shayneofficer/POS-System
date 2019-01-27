const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MenuItemSchema = require("./MenuItem");

const MenuCategorySchema = new Schema({
  // Name of the menu, in case a restaurant has multiple (ex. 'Lunch')
  name: {
    type: String,
    required: true,
  },
  // 'not served before 11am', etc.
  flags: {
    type: [ String ],
  },
  // Items in the category
  Items: {
    type: [ MenuItemSchema ],
    required: true
  },
  // Date that the document was created or last updated
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = MenuCategorySchema;
