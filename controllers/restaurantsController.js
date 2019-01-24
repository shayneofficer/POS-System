const db = require('../models');

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    console.log('restaurantsController findAll');
    db.Restaurant
      .find(req.query)
      .sort({ date: -1 })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log('restaurantsController findById');
    db.Restaurant
      .findById(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Create Restaurant");
    db.Restaurant
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log('restaurantsController update');
    db.Restaurant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    console.log('restaurantsController remove');
    db.Restaurant
      .findById({ _id: req.params.id })
      .then(results => results.remove())
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  }
};
