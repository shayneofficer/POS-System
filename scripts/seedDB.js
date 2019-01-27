const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pos-system");

const RestaurantSeed = {
  name: "Shine",
  location: "Chicago, IL",
  Menus: MenusSeed,
  Tables: TablesSeed,
  Bills: BillsSeed,
  Employees: EmployeesSeed
}
db.Menu
  .deleteMany({})
  .then(() => {
    menuSeed.save((err, result) => {
      console.log("---------------------------------------------------");
      console.log('DB seeded: collection "menus" with 1 menu');
      console.log("Menu Items are subdocuments of Menu documents.");
      console.log("---------------------------------------------------");
      if (err) console.error(err);
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(-1);
  });
