const mongoose = require("mongoose");
const db = require("../models/Schemas");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pos-system");

const itemSeed = [
  /* 1 */
  {
    name: "CHEFS SPICY MAKI",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 2 */
  {
    name: "CRAZY MAKI",
    price: "$10.00",
    category: "Chef's Special Rolls"
  },

  /* 3 */
  {
    name: "DRAGON MAKI",
    price: "$11.00",
    category: "Chef's Special Rolls"
  },

  /* 4 */
  {
    name: "FATTY ROLL/",
    price: "$Varies",
    category: "Chef's Special Rolls"
  },

  /* 5 */
  {
    name: "FLAMING MAKI",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 6 */
  {
    name: "GINZA MAKI",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 7 */
  {
    name: "HAWAII MAKI",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 8 */
  {
    name: "ICHIBAN ROLL",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 9 */
  {
    name: "MANGOKU MAKI",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 10 */
  {
    name: "HONEY ROLL",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 11 */
  {
    name: "MEXICAN MAKI",
    price: "$11.00",
    category: "Chef's Special Rolls"
  },

  /* 12 */
  {
    name: "OYSHI MAKI",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 13 */
  {
    name: "PINK SPIDER ROLL",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 14 */
  {
    name: "RAINBOW MAKI",
    price: "$16.00",
    category: "Chef's Special Rolls"
  },

  /* 15 */
  {
    name: "RED DRAGON MAKI",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 16 */
  {
    name: "SAPPORO MAKI",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 17 */
  {
    name: "NEW YORK MAKI",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 18 */
  {
    name: "SATSUMA MAKI",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 19 */
  {
    name: "SCALLOP TEMPURA MAKI",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 20 */
  {
    name: "ROCK N ROLL MAKI",
    price: "$14.00",
    category: "Chef's Special Rolls"
  },

  /* 21 */
  {
    name: "SHINE MAKI",
    price: "$13.00",
    category: "Chef's Special Rolls"
  },

  /* 22 */
  {
    name: "COUNTRY STYLE TOFU",
    price: "$15.00",
    category: "House Specials"
  },

  /* 23 */
  {
    name: "VOLCANO ROLL",
    price: "$12.00",
    category: "Chef's Special Rolls"
  },

  /* 24 */
  {
    name: "CRISPY ASPARAGUS/",
    price: "$Varies",
    category: "House Specials"
  },

  /* 25 */
  {
    name: "FIVE SPICE DUCK",
    price: "$18.00",
    category: "House Specials"
  },

  /* 26 */
  {
    name: "FRIED GARLIC PRAWNS",
    price: "$20.00",
    category: "House Specials"
  },

  /* 27 */
  {
    name: "GLAZED MISO SALMON",
    price: "$23.00",
    category: "House Specials"
  },

  /* 28 */
  {
    name: "HONG KONG STEAK/",
    price: "$26.00",
    category: "House Specials"
  },

  /* 29 */
  {
    name: "LEMONGRASS/",
    price: "$Varies",
    category: "House Specials"
  },

  /* 30 */
  {
    name: "NEPTUNES DELIGHT",
    price: "$20.00",
    category: "House Specials"
  },

  /* 31 */
  {
    name: "ORANGE FLAVOR/",
    price: "$Varies",
    category: "House Specials"
  },

  /* 32 */
  {
    name: "SHINE CRISPY CHICKEN",
    price: "$17.00",
    category: "House Specials"
  },

  /* 33 */
  {
    name: "TERIYAKI GRILL/",
    price: "$Varies",
    category: "House Specials"
  },

  /* 34 */
  {
    name: "YAKI NIKU (KALBI)/",
    price: "$24.00",
    category: "House Specials"
  },

  /* 35 */
  {
    name: "VEGETABLE TRIPLE DELIGHT",
    price: "$15.00",
    category: "House Specials"
  },

  /* 36 */
  {
    name: "FRIED RICE/",
    price: "$12.00",
    category: "Noodles & Rice"
  },

  /* 37 */
  {
    name: "PAD THAI/",
    price: "$Varies",
    category: "Noodles & Rice"
  },

  /* 38 */
  {
    name: "RICE NOODLES/",
    price: "$Varies",
    category: "Noodles & Rice"
  },

  /* 39 */
  {
    name: "SINGAPORE NOODLES/",
    price: "$Varies",
    category: "Noodles & Rice"
  },

  /* 40 */
  {
    name: "SOFT NOODLES/",
    price: "$Varies",
    category: "Noodles & Rice"
  },

  /* 41 */
  {
    name: "UNDON NOODLES",
    price: "$Varies",
    category: "Noodles & Rice"
  },

  /* 42 */
  {
    name: "YAKISOBA/",
    price: "$Varies",
    category: "Noodles & Rice"
  },

  /* 43 */
  {
    name: "CHILEAN SEA BASS APP",
    price: "$13.00",
    category: "Hot Appetizers"
  },

  /* 44 */
  {
    name: "CRISPY SHRIMP",
    price: "$12.00",
    category: "Hot Appetizers"
  },

  /* 45 */
  {
    name: "CRAB RANGOON (4)",
    price: "$6.00",
    category: "Hot Appetizers"
  },

  /* 46 */
  {
    name: "FRESH DUCK WRAPS",
    price: "$12.00",
    category: "Hot Appetizers"
  },

  /* 47 */
  {
    name: "LETTUCE WRAPS (4)",
    price: "$12.00",
    category: "Hot Appetizers"
  },

  /* 48 */
  {
    name: "POTSTICKERS/",
    price: "$8.00",
    category: "Hot Appetizers"
  },

  /* 49 */
  {
    name: "SATAY (4)/",
    price: "$Varies",
    category: "Hot Appetizers"
  },

  /* 50 */
  {
    name: "SESAME CALAMARI",
    price: "$11.00",
    category: "Hot Appetizers"
  }
];

const tableSeead = [
  {

  }
]

const billSeed = [
  {
    
  }
]
// Menu documents have menuItems as sub-documents.
const menuSeed = new db.Menu({
  name: "Shine Main Menu",
  date: new Date(Date.now()),
  items: itemSeed
});

db.Menu
  .deleteMany({})
  .then(() => {
    menuSeed.save((result) => {
      console.log("---------------------------------------------------");
      console.log('DB seeded: collection "menus" with 1 menu');
      console.log("Menu Items are subdocuments of Menu documents.");
      console.log("---------------------------------------------------");
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(-1);
  });
