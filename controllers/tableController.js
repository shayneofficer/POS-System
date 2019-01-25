const db = require('../models');

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.Table
      .find(req.query)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Table
      .findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Table
      .create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Table
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Table
      .findById({ _id: req.params.id })
      .then((result) => result.remove())
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  }
};
