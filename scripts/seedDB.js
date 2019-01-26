const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pos-system");

const categorySeed = [
  {
    name: "Cold Apps",
    items: require("./Items/ColdApps")
  },
  {
    name: "Hot Apps",
    items: require("./Items/HotApps")
  },
  {
    name: "Soups",
    items: require("./Items/Soups")
  },
  {
    name: "House Specials",
    items: require("./Items/HouseSpecials")
  },
  {
    name: "Sushi",
    items: require("./Items/Sushi")
  },
  {
    name: "Noodles & Rice",
    items: require("./Items/NoodlesAndRice")
  },
  {
    name: "OTHER",
    items: require("./Items/Other"),
    flags: [ "Price Varies" ]
  }
];

// Menu documents have menuItems as sub-documents.
const menuSeed = new db.Menu({
  name: "Shine Main Menu",
  date: new Date(Date.now()),
  categories: categorySeed
});

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
