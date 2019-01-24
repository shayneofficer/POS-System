const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  restaurantID: { type: String, default: "" },
  email: { type: String },
  password: { type: String },
  manager: { type: Boolean, default: false },
  waiter: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
