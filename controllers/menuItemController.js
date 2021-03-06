const db = require("../models");

module.exports = {
  find: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) =>
        res.json(
          restaurant.Menus.id(req.params.menuId).Categories.id(req.params.catId)
            .Items
        )
      )
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) =>
        res.json(
          restaurant.Menus
            .id(req.params.menuId)
            .Categories.id(req.params.catId)
            .Items.id(req.params.itemId)
        )
      )
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        Restaraunt.Menus
          .id(req.params.menuId)
          .Categories.id(req.params.catId)
          .Items.push(req.body);
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
        const rest = restaurant;
        const items = rest.Menus
          .id(req.params.menuId)
          .Categories.id(req.params.catId).Items;
        items.set(req.body);
        return rest.save();
      })
      .then((menu) => res.send(menu))
      .catch((err) => res.status(422).json(err));
  },
  updateOne: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        const rest = restaurant;
        const item = rest.Menus
          .id(req.params.menuId)
          .Categories.id(req.params.catId)
          .Items.id(req.params.itemId);
        item.set(req.body);
        return rest.save();
      })
      .then((menu) => res.send(menu))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        Restaraunt.Menus
          .id(req.params.menuId)
          .Categories.id(req.params.catId)
          .Items.id(req.params.itemId)
          .remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  }
};
