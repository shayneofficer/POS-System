const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.resList
      .find({})
      .sort({ date: -1 })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.resList
      .findById(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Created resList", req.body);
    db.resList
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => {
        console.log("err", err);
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.resList
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.resList
      .findById({ _id: req.params.id })
      .then(results => results.remove())
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },

};
