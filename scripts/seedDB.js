const mongoose = require("mongoose");
const db = require("../models");
const RestaurantSeed = require("./Seeds");
const User = require("../models/user");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pos-system");

function seedUsers (restId) {
  const manager = new User({
    username: "manager",
    restaurantID: restId,
    email: "manager@shine.com",
    password: "password",
    manager: true,
    waiter: false,
    host: false,
    date: new Date(Date.now())
  });

  const host = new User({
    username: "host",
    restaurantID: restId,
    email: "host@shine.com",
    password: "password",
    manager: false,
    waiter: false,
    host: true,
    date: new Date(Date.now())
  });

  const server = new User({
    username: "server",
    restaurantID: restId,
    email: "server@shine.com",
    password: "password",
    manager: false,
    waiter: true,
    host: false,
    date: new Date(Date.now())
  });

  
  const admin = new User ({
    username: "admin",
    restaurantID: restId,
    email: "admin@shine.com",
    password: "password",
    manager: true,
    waiter: true,
    host: true,
    date: new Date(Date.now()),
  });
  
  // const UserSeed = [ manager, host, server, admin ]

  db.User.deleteMany({}).then(() => {
    admin.save((err, res) => {
      if (err) console.log(err);
    })
    manager.save((err, res) => {
      if (err) console.log(err);
    })
    server.save((err, res) => {
      if (err) console.log(err);
    })
    host.save((err, res) => {
      if (err) console.log(err);
    })
    setTimeout( () => {
      console.log("Users Seeded");
      process.exit(0);
    }, 3000)
  });
}

db.Restaurant
  .deleteMany({})
  .then(() => {
    RestaurantSeed.save((err, result) => {
      console.log("---------------------------------------------------");
      console.log('"Shine" Restaurant added.');
      console.log("Shine ID: ", result._id);
      console.log("---------------------------------------------------");
      if (err) {
        console.error(err);
        process.exit(-2);
      }
      seedUsers(result._id);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(-1);
  });
