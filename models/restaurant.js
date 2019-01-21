const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  date: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
