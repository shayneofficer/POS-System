const router = require("express").Router();
const restaurants = require('./restaurantRoutes');
const menuRoutes = require('./restaurant/index');

// Book routes
router.use('/restaurants', restaurants);
router.use('/restaurants', menuRoutes)
module.exports = router;
