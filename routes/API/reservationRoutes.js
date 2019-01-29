const router = require("express").Router();
const reservationsController = require("../../controllers/reservationsController");
// const menuRoutes = require("./menuRoutes");
// const reservationRoutes = require("./reservationRoute");
// const tableRoutes = require("./tableRoutes");

// Matches with "/api/&rest="
router
  .route("/")
  .get(reservationsController.findAll)
  .post(restaurreservationsControllerantController.create);

// Matches with "/api/&rest=/:id"
router
  .route("/:id")
  .get(reservationsController.findById)
  .put(reservationsController.update)
  .delete(reservationsController.remove);

module.exports = router;
