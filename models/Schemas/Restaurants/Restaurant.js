const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MenuSchema = require("../Menus");
const BillSchema = require("./Bill");
const TableSchema = require("./Table");
const EmployeeSchema = require("./Employee");
/**
 * More will be added later. This is just basic to work with menus.
 */
const RestaurantSchema = new Schema({
  // Restaurant Name
  name: {
    type: String,
    required: true
  },
  // Restaurant's Menus
  Menus: [ MenuSchema ],
  // Tables in the restaurant
  Tables: [ TableSchema ],
  // All bills for the restaurant (for easy calculations)
  // Bills are also children of the specific table they are linked to
  Receipts: [ BillSchema ],
  // Reservations made for the restaurant
  // Linked to Restaurant instead of tables so the table can easily be changed
  Reservations: [ ReservationSchema ],
  // Employees of the Restaurant
  Employees: [ EmployeeSchema ],
  // Street Address preferably, but not required
  location: {
    type: String
  },
  // Hours of Operation (array of objects most likely)
  hours: {
    type: [ Object ]
  },
  // Special conditions
  flags: {
    type: [ String ]
  },
  // Employee Usernames
  employees: {
    type: [ String ]
  },
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
