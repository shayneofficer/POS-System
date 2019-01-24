const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Created User", req.body);
    db.User
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => {
        console.log("err", err);
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(results => results.remove())
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },

  login: function (req, res) {
    if(req.body.username == null || req.body.password == null) {
      res.json({error: "Fill in Username/Password"})
    }
    db.User
      .findOne({ username: req.body.username })
      .then(results => {
        console.log("results", results);
        console.log("req.body", req.body);
        if(results === null) {
          res.json({error: "User not found!", login: false})
        } else if(req.body.password == results.password) {
          res.json({login: true, _id: results._id, restaurantID: results.restaurantID});
        } else {
          res.json({error: "Incorrect password!", login: false})
        }
      })
  }
};
