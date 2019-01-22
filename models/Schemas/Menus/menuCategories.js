const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuCategorySchema = new Schema({
  // Name of the item as it appears on the menu
  name: {
    type: String,
    required: true
  },
  // Ref to items in the menu category
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'menuItem'
    }
  ],
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

const menuCategory = mongoose.model('menuCategory', menuCategorySchema);

module.exports = menuCategory;
