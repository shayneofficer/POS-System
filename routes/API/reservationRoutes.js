const router = require("express").Router();
const reservationsController = require("../../controllers/reservationController");

// Matches with "/api/reservations"
router
  .route("/")
  .get(reservationsController.findAll)
  .post(reservationsController.create);

// Matches with "/api/reservations/:rsvId"
router
  .route("/=:rsvId")
  .get(reservationsController.findById)
  .put(reservationsController.update)
  .delete(reservationsController.remove);

module.exports = router;
