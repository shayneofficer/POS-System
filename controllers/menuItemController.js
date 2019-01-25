const db = require('../models');

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.MenuItem
      .find(req.query)
      .sort({ category: 1 })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.MenuItem
      .findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    db.MenuItem
      .find({ category: req.params.cat })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.MenuItem
      .create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.MenuItem
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.MenuItem
      .findByIdAndRemove({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  }
};
