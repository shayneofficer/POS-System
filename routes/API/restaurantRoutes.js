const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");
const menuRoutes = require("./menuRoutes");
const menuController = require("../../controllers/menuController")
// const reservationRoutes = require("./reservationRoutes");
// const tableRoutes = require("./tableRoutes");
// const receiptRoutes = require("./receiptRoutes");
// const employeeRoutes = require("./employeeRoutes");

// Matches with "/api/&rest"
router
  .route("/")
  .get(restaurantController.find)
  .post(restaurantController.create);

// Matches with "/api/&rest/=:id"
router
  .route("/=:id")
  .get(restaurantController.findById)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

// Matches with "/api/&rest/name"
router
  .route("/name")
  .post(restaurantController.findByName);

router.use("/=:id/&menus", menuRoutes);


// router.use("/=:id/&tables", tableRoutes);
// router.use("/=:id/&reservations", reservationRoutes);
// router.use("/=:id/&employees", employeeRoutes);
// router.use("/=:id/&receipts", receiptRoutes);

module.exports = router;
