const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.Restaurant
      .find(req.query)
      .sort({ date: -1 })
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
    console.log("Create Restaurant");
    //add validation for creation
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
