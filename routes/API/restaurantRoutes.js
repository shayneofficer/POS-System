const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantsController");
const menuRoutes = require("./menuRoutes");
const reservationRoutes = require("./reservationRoute");
const tableRoutes = require("./tableRoutes");
const receiptRoutes = require("./receiptRoutes");
const employeeRoutes = require("./employeeRoutes");
const receiptRoutes = require("./receiptRoutes");

// Matches with "/api/&rest="
router
  .route("/")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

// Matches with "/api/&rest=/:id"
router
  .route("/=:id")
  .get(restaurantController.findById)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

router.use("/=:id/menus", menuRoutes);
router.use("/=:id/tables", tableRoutes);
router.use("/=:id/reservations", reservationRoutes);
router.use("/=:id/employees", employeeRoutes);
router.use("/=:id/receipts", receiptRoutes);

module.exports = router;
