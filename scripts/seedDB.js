const mongoose = require('mongoose');
const db = require('../models/Schemas/Menus/menuItem');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pos-system');
/* 1 */
const seeds = [
  {
    flags: [],
    name: 'CHEFS SPICY MAKI',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 2 */
  {
    flags: [],
    name: 'CRAZY MAKI',
    price: '$10.00',
    category: "Chef's Special Rolls",
  },

  /* 3 */
  {
    flags: [],
    name: 'DRAGON MAKI',
    price: '$11.00',
    category: "Chef's Special Rolls",
  },

  /* 4 */
  {
    flags: [],
    name: 'FATTY ROLL/',
    price: '$Varies',
    category: "Chef's Special Rolls",
  },

  /* 5 */
  {
    flags: [],
    name: 'FLAMING MAKI',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 6 */
  {
    flags: [],
    name: 'GINZA MAKI',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 7 */
  {
    flags: [],
    name: 'HAWAII MAKI',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 8 */
  {
    flags: [],
    name: 'ICHIBAN ROLL',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 9 */
  {
    flags: [],
    name: 'MANGOKU MAKI',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 10 */
  {
    flags: [],
    name: 'HONEY ROLL',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 11 */
  {
    flags: [],
    name: 'MEXICAN MAKI',
    price: '$11.00',
    category: "Chef's Special Rolls",
  },

  /* 12 */
  {
    flags: [],
    name: 'OYSHI MAKI',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 13 */
  {
    flags: [],
    name: 'PINK SPIDER ROLL',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 14 */
  {
    flags: [],
    name: 'RAINBOW MAKI',
    price: '$16.00',
    category: "Chef's Special Rolls",
  },

  /* 15 */
  {
    flags: [],
    name: 'RED DRAGON MAKI',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 16 */
  {
    flags: [],
    name: 'SAPPORO MAKI',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 17 */
  {
    flags: [],
    name: 'NEW YORK MAKI',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 18 */
  {
    flags: [],
    name: 'SATSUMA MAKI',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 19 */
  {
    flags: [],
    name: 'SCALLOP TEMPURA MAKI',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 20 */
  {
    flags: [],
    name: 'ROCK N ROLL MAKI',
    price: '$14.00',
    category: "Chef's Special Rolls",
  },

  /* 21 */
  {
    flags: [],
    name: 'SHINE MAKI',
    price: '$13.00',
    category: "Chef's Special Rolls",
  },

  /* 22 */
  {
    flags: [],
    name: 'COUNTRY STYLE TOFU',
    price: '$15.00',
    category: 'House Specials',
  },

  /* 23 */
  {
    flags: [],
    name: 'VOLCANO ROLL',
    price: '$12.00',
    category: "Chef's Special Rolls",
  },

  /* 24 */
  {
    flags: [],
    name: 'CRISPY ASPARAGUS/',
    price: '$Varies',
    category: 'House Specials',
  },

  /* 25 */
  {
    flags: [],
    name: 'FIVE SPICE DUCK',
    price: '$18.00',
    category: 'House Specials',
  },

  /* 26 */
  {
    flags: [],
    name: 'FRIED GARLIC PRAWNS',
    price: '$20.00',
    category: 'House Specials',
  },

  /* 27 */
  {
    flags: [],
    name: 'GLAZED MISO SALMON',
    price: '$23.00',
    category: 'House Specials',
  },

  /* 28 */
  {
    flags: [],
    name: 'HONG KONG STEAK/',
    price: '$26.00',
    category: 'House Specials',
  },

  /* 29 */
  {
    flags: [],
    name: 'LEMONGRASS/',
    price: '$Varies',
    category: 'House Specials',
  },

  /* 30 */
  {
    flags: [],
    name: 'NEPTUNES DELIGHT',
    price: '$20.00',
    category: 'House Specials',
  },

  /* 31 */
  {
    flags: [],
    name: 'ORANGE FLAVOR/',
    price: '$Varies',
    category: 'House Specials',
  },

  /* 32 */
  {
    flags: [],
    name: 'SHINE CRISPY CHICKEN',
    price: '$17.00',
    category: 'House Specials',
  },

  /* 33 */
  {
    flags: [],
    name: 'TERIYAKI GRILL/',
    price: '$Varies',
    category: 'House Specials',
  },

  /* 34 */
  {
    flags: [],
    name: 'YAKI NIKU (KALBI)/',
    price: '$24.00',
    category: 'House Specials',
  },

  /* 35 */
  {
    flags: [],
    name: 'VEGETABLE TRIPLE DELIGHT',
    price: '$15.00',
    category: 'House Specials',
  },

  /* 36 */
  {
    flags: [],
    name: 'FRIED RICE/',
    price: '$12.00',
    category: 'Noodles & Rice',
  },

  /* 37 */
  {
    flags: [],
    name: 'PAD THAI/',
    price: '$Varies',
    category: 'Noodles & Rice',
  },

  /* 38 */
  {
    flags: [],
    name: 'RICE NOODLES/',
    price: '$Varies',
    category: 'Noodles & Rice',
  },

  /* 39 */
  {
    flags: [],
    name: 'SINGAPORE NOODLES/',
    price: '$Varies',
    category: 'Noodles & Rice',
  },

  /* 40 */
  {
    flags: [],
    name: 'SOFT NOODLES/',
    price: '$Varies',
    category: 'Noodles & Rice',
  },

  /* 41 */
  {
    flags: [],
    name: 'UNDON NOODLES',
    price: '$Varies',
    category: 'Noodles & Rice',
  },

  /* 42 */
  {
    flags: [],
    name: 'YAKISOBA/',
    price: '$Varies',
    category: 'Noodles & Rice',
  },

  /* 43 */
  {
    flags: [],
    name: 'CHILEAN SEA BASS APP',
    price: '$13.00',
    category: 'Hot Appetizers',
  },

  /* 44 */
  {
    flags: [],
    name: 'CRISPY SHRIMP',
    price: '$12.00',
    category: 'Hot Appetizers',
  },

  /* 45 */
  {
    flags: [],
    name: 'CRAB RANGOON (4)',
    price: '$6.00',
    category: 'Hot Appetizers',
  },

  /* 46 */
  {
    flags: [],
    name: 'FRESH DUCK WRAPS',
    price: '$12.00',
    category: 'Hot Appetizers',
  },

  /* 47 */
  {
    flags: [],
    name: 'LETTUCE WRAPS (4)',
    price: '$12.00',
    category: 'Hot Appetizers',
  },

  /* 48 */
  {
    flags: [],
    name: 'POTSTICKERS/',
    price: '$8.00',
    category: 'Hot Appetizers',
  },

  /* 49 */
  {
    flags: [],
    name: 'SATAY (4)/',
    price: '$Varies',
    category: 'Hot Appetizers',
  },

  /* 50 */
  {
    flags: [],
    name: 'SESAME CALAMARI',
    price: '$11.00',
    category: 'Hot Appetizers',
  }
];

db
  .remove({})
  .then(() => db.collection.insertMany(seeds))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
