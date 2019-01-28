const db = require("../models");

module.exports = {
  find: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        res.json(restaurant.menus);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => res.json(restaurant.menus.id(req.params.menuId)))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.menus.push(req.body);
        restaurant.save(function (err, restaurant) {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        const menu = restaurant.menus.id(req.params.menuId);
        menu.set(req.body);
        return menu.save();
      })
      .then((menu) => res.send(menu))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.menus.id(req.params.menuId).remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  }
};
