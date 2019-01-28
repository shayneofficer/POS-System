const db = require("../models");

// Defining methods for the POSController
module.exports = {
  find: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        res.json(restaurant.Reservations.sort({ date: -1 }));
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) =>
        res.json(restaurant.Reservations.id(req.params.rsvId))
      )
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Reservations.push(req.body);
        restaurant.save((err, restaurant) => {
          if (err) res.status(422).json(err);
          res.json(restaurant.Reservations);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        const reservations = restaurant.Reservations;
        reservations.set(req.body);
        return restaurant.save((err, restaurant) => {
          if (err) res.status(422).json(err);
          res.json(restaurant.Reservations);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  updateOne: function (req, res) {
    db.Restaurants.findById(req.params.id).then((restaurant) => {
      const reservation = restaurant.Reservations.id(req.params.tableId)
      reservation.set(req.body);
      restaurant.save((err) => {
        if (err) res.status(422).json(err);
        res.json(restaurant.Reservations);
      })
    })
  },
  remove: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Reservations
          .id(req.params.rsvId)
          .remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  }
};
