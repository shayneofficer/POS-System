const router = require("express").Router();
const restaurants = require('./restaurantRoutes');
const menuRoutes = require('./restaurant/index');
const users = require('./userRoutes');

// API routes
router.use('/restaurants', restaurants);
router.use('/restaurants', menuRoutes);
router.use('/users', users);
module.exports = router;
