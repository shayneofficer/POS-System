const router = require("express").Router();
const menuRoutes = require('./menuRoutes');

// Book routes
router.use('/', menuRoutes);

module.exports = router;
