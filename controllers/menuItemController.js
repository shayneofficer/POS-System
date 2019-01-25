const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.Menu
      .findById(req.params.menuId)
      .then((result) => {
        res.json(result.items);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Menu
      .findById(req.params.menuId)
      .then((result) => {
        res.json(result.items.id(req.params.itemId));
      })
      .catch((err) => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    db.Menu
      .findById(req.params.menuId)
      .then((result) => {
        res.json(result.items.category(req.params.cat));
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Menu
      .findById(req.params.menuId)
      .then((result) => {
        result.items.push(req.body);
        result
          .save()
          .then((result) => res.json(result))
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Menu.findById(req.params.menuId)
    .then((result) => {
      let newItem = req.body;
      newItem.id = req.params.itemId;
      result.items.id(req.param.id).remove();
      result.items.push(newItem);
      result.save()
      .then((result) => res.json(result))
      .catch((err) => res.status(err).json(err));
    })
  },
  remove: function (req, res) {
    db.Menu.find({ id: menuId }).then((result) => {
      result.items.id(itemId).remove();
      result
        .save()
        .then((result) => res.json(result))
        .catch((err) => res.status(422).json(err));
    });
  }
};
