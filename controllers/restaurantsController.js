const db = require('../models');

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.Restaurant
      .find()
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    //add validation for creation
    console.log("restaurant create: ",req.body)
    db.Restaurant
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Restaurant
      .findById({ _id: req.params.id })
      .then(results => results.remove())
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  }
};
