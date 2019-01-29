const router = require("express").Router();
const reservationController = require("../../controllers/reservationController");

// Matches with "/api/reservations"
router
  .route("/")
  .get(reservationController.find)
  .post(reservationController.create);

// Matches with "/api/reservations/:rsvId"
router
  .route("/=:rsvId")
  .get(reservationController.findById)
  .put(reservationController.update)
  .delete(reservationController.remove);

module.exports = router;
