const router = require("express").Router();
const menus = require('./menuRoutes');
const restaurants = require('./restaurants');

// Book routes
router.use('/restaurants', restaurants);

module.exports = router;
