const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pos-system');

/**************************************************************************
 * Uncomment and run these functions in order.
 * Mongoose absolutely refuses to work with any promises or
 * callbacks, so until a TA fixes this, just run this script
 * 3 times, each time commenting out the function you just ran,
 * and uncommenting the next one.
 *************************************************************************/
seedRestaurant(() => {process.exit(1)});
// seedMenu(() => {process.exit(2)});
// seedMenuItems(() => {process.exit(3)});



function seedRestaurant (resolve) {
  let testaurant = new db.Restaurant({
    name: 'Testaurant',
    date: new Date(Date.now())
  });

  testaurant.save((err, result) => {
    if (err) {
      console.error(err);
      process.exit(-1);
    } else {
      resolve(true);
    }
  });
}

function seedMenu (resolve) {
  db.Restaurant.findOne({}, (err, restaurant) => {
    if (err) {
      console.error(err);
      process.exit(-2);
    } else {
      var parentId = restaurant._id;
      const testMenu = new db.Menu({
        name: 'test menu',
        parentMenu: parentId,
        date: new Date(Date.now())
      });
      testMenu.save((err) => {
        if (err) {
          console.error(err);
          process.exit(-3);
        }
        resolve(true);
      });
    }
  });
}

function seedMenuItems (resolve) {
  db.Menu
    .findOne({})
    .then((menu) => {
      const parentId = menu._id;
      const itemOne = new db.MenuItem({
        name: 'testOne',
        price: 3.0,
        category: 'App',
        inventory: 34,
        parentMenu: parentId
      });
      const itemTwo = new db.MenuItem({
        name: 'testTwo',
        price: 5.0,
        category: 'Desert',
        inventory: 23,
        parentMenu: parentId
      });
      const itemThree = new db.MenuItem({
        name: 'testThree',
        price: 12.0,
        category: 'Entree',
        inventory: 4,
        parentMenu: parentId
      });
      itemOne
        .save()
        .then(() => {
          itemTwo
            .save()
            .then(() => {
              itemThree
                .save()
                .then(() => {
                  resolve(true);
                })
                .catch((err) => {
                  console.error(err);
                  process.exit(-7);
                });
            })
            .catch((err) => {
              console.error(err);
              process.exit(-6);
            });
        })
        .catch((err) => {
          console.error(err);
          process.exit(-5);
        });
    })
    .catch((err) => {
      console.error(err);
      process.exit(-4);
    });
}
