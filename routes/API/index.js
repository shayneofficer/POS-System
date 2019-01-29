const router = require("express").Router();
const restaurants = require('./restaurantRoutes');
const users = require('./userRoutes');
const reservations = require('./reservationRoutes');

// API routes
router.use('/reservations', reservations);
router.use('/&rest', restaurants);
router.use('/users', users);
module.exports = router;
