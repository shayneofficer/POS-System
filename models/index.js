
module.exports = {
  // Restaurant: require("./restaurant"),
  resList: require('./Schemas/reservations'),
  Restaurant: require('./Schemas/Restaurants/Restaurant'),
  Table: require('./Schemas/Restaurants/table'),
  Bill: require('./Schemas/Restaurants/bill'),
  Menu: require('./Schemas/Menus/menu.js'),
  MenuItem: require('./Schemas/Menus/menuItem'),
  User: require("./user")
};
