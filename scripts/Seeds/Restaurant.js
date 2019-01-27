const TablesSeed = require('./Tables');
const EmployeesSeed = require('./Employees');
const ReservationsSeed = require('./Reservations');
const ReceiptsSeed = require('./Receipts');
const MenusSeed = require('./Menus');


const RestaurantSeed = {
  name: "Shine",
  location: "Chicago, IL",
  Menus: MenusSeed,
  Tables: TablesSeed,
  Employees: EmployeesSeed,
  Receipts: ReceiptsSeed,
  Reservations: ReservationsSeed
}

module.exports = RestaurantSeed;