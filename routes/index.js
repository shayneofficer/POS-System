const path = require("path");
const router = require("express").Router();
const apiRoutes = require('./api/index');
const menuController = require("../controllers/menuController");
// const restaurantRoutes = require('./restaurants');
// API Routes
// router.use("/api", apiRoutes);
// router.use('/api/restaurants', restaurantRoutes);
router.use('/api', apiRoutes)
router.route("/api/&rest=:id/&menus/").get(menuController.find).post(menuController.create);

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
