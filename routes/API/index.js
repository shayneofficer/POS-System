const router = require("express").Router();
const restaurants = require('./restaurantRoutes');
const menuRoutes = require('./restaurant/index');
const users = require('./userRoutes');
const reservations = require('./reservationsRoutes')

// API routes
router.use('/restaurants', restaurants);
router.use('/restaurants', menuRoutes);
router.use('/users', users);
router.use('/reservations', reservations);
module.exports = router;
