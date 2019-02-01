const db = require("../models");

module.exports = {
  find: function (req, res) {
    console.log(req.params.id)
    db.Restaurant
      .findById(req.params.id)
      .then((result) => {
        const restaurant = result
        const menus = restaurant.Menus;
        console.log(menus);
        res.json(menus);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => res.json(restaurant.Menus.id(req.params.menuId)))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Menus.push(req.body);
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
      .then((result) => {
        const restaurant = result.data[0]
        const menu = restaurant.Menus.id(req.params.menuId);
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
        restaurant.Menus.id(req.params.menuId).remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  addCategory: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Menus[0].Categories.push(req.body);
        restaurant.save();
        res.json(restaurant.Menus[0].Categories);
      })
      .catch((err) => res.status(422).json(err));
  },
  addItem: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Menus[0].Categories[req.params.catIndex].Items.push(req.body);
        restaurant.save();
        res.json(restaurant.Menus[0].Categories);

      })
      .catch((err) => res.status(422).json(err));
  }
};
