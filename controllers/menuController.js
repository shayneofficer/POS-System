const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.Menu
      .find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Menu
      .findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Menu
      .create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Menu
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Menu
      .findByIdAndDelete({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  }
};
