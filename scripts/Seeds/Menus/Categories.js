
module.exports = [
  {
    name: "Cold Apps",
    items: require("./Items/ColdApps")
  },
  {
    name: "Hot Apps",
    items: require("./Items/HotApps")
  },
  {
    name: "Soups",
    items: require("./Items/Soups")
  },
  {
    name: "House Specials",
    items: require("./Items/HouseSpecials")
  },
  {
    name: "Sushi",
    items: require("./Items/Sushi")
  },
  {
    name: "Noodles & Rice",
    items: require("./Items/NoodlesAndRice")
  },
  {
    name: "OTHER",
    items: require("./Items/Other"),
    flags: [ "Price Varies" ]
  }
];