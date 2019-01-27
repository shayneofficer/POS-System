const mongoose = require("mongoose");
const db = require("../models");
const RestaurantSeed = require("./Seeds");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pos-system");

db.Restaurant
  .deleteMany({})
  .then(() => {
    RestaurantSeed.save((err, result) => {
      console.log("---------------------------------------------------");
      console.log('DB seeded: "Shine" Restaurant added.');
      console.log("---------------------------------------------------");
      if (err) console.error(err);
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(-1);
  });
 