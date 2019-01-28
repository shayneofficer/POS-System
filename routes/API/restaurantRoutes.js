const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantsController");
// const menuRoutes = require("./menuRoutes");
// const reservationRoutes = require("./reservationRoute");
// const tableRoutes = require("./tableRoutes");

// Matches with "/api/&rest="
router
  .route("/")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

// Matches with "/api/&rest=/:id"
router
  .route("/:id")
  .get(restaurantController.findById)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

module.exports = router;
