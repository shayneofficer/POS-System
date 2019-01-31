const db = require("../models");

module.exports = {
  find: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) =>
        res.json(restaurant.Menus.id(req.params.menuId).Categories)
      )
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) =>
        res.json(
          restaurant.Menus.id(req.params.menuId).Categories.id(req.params.catId)
        )
      )
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Menus.id(req.params.menuId).Categories.push(req.body);
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
        restaurant.Menus[0].Categories.set(req.body);
        return restaurant.save();
      })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  updateOne: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        const res = restaurant;
        const category = res.Menus
          .id(req.params.menuId)
          .Categories.id(req.params.catId);
        category.set(req.body);
        return res.save();
      })
      .then((menu) => res.send(menu))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Menus
          .id(req.params.menuId)
          .Categories.id(req.params.catId)
          .remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  }
};
