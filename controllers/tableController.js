const db = require("../models");

// Defining methods for the POSController
module.exports = {
  updateAtIndex: function (req, res) {
    console.log("Hit updateBill");
    console.log(req.params.id);
    console.log(req.params.tableIndex);
    db.Restaurant.findById(req.params.id).then((restaurant) => {
      console.log(restaurant);
      restaurant.Tables[req.params.tableIndex].set(req.body.data);
      restaurant.save((err, result) => {
        if (err) res.status(422).json(err);
        res.json(result);
      });
    });
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Tables.push(req.body);
        restaurant.save((err, restaurant) => {
          if (err) res.status(422).json(err);
          res.json(restaurant.Tables);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        const tables = restaurant.Tables;
        table.set(req.body);
        return restaurant.save((err, restaurant) => {
          if (err) res.status(422).json(err);
          res.json(restaurant.Tables);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  updateOne: function (req, res) {
    db.Restaurants.findById(req.params.id).then((restaurant) => {
      const table = restaurant.Tables.id(req.params.tableId);
      table.set(req.body);
      restaurant.save((err) => {
        if (err) res.status(422).json(err);
        res.json(restaurant.Tables);
      });
    });
  },
  removeAtIndex: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Tables.id(req.params.tableId).remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  billPaid: function (req, res) {
    db.Restaurant.findById(req.params.id).then((restaurant) => {
      restaurant.Tables[req.params.tableIndex].set({ Bill: null });
      restaurant.Receipts.push(req.body);
      restaurant.save((err, result) => {
        if (err) res.status(422).json(err);
        res.json(result);
      });
    });
  }
};
