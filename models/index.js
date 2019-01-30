
module.exports = {
  Reservation: require('./Schemas/reservations'),
  Restaurant: require('./Schemas/Restaurants/Restaurant'),
  Table: require('./Schemas/Restaurants/Table'),
  Bill: require('./Schemas/Restaurants/Bill'),
  Menu: require('./Schemas/Menus/Menu'),
  MenuCategory: require('./Schemas/Menus/MenuCategory'),
  MenuItem: require('./Schemas/Menus/MenuItem'),
  Employee: require('./Schemas/Restaurants/Employee'),
  User: require("./user")
};
