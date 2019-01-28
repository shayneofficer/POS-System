const router = require("express").Router();
const restaurants = require('./restaurantRoutes');
const users = require('./userRoutes');

// API routes
router.use('/&rest=', restaurants);
router.use('/users', users);
module.exports = router;
