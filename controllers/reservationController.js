const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.Reservation
      .find()
      .sort({ date: -1 })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Reservation
      .findById(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findByRestId: function (req, res) {
    db.Reservation
      .find(req.params)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Created Reservation", req.body);
    db.Reservation
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => {
        console.log("err", err);
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Reservation
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Reservation
      .findById({ _id: req.params.id })
      .then(results => results.remove())
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },

};