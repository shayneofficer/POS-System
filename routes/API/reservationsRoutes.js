const router = require("express").Router();
const reservationsController = require("../../controllers/reservationsController");


// Matches with "/api/reservations"
router.route("/")
  .get(reservationsController.findAll)
  .post(reservationsController.create);

// Matches with "/api/reservations/:id"
router.route("/:id")
  .get(reservationsController.findById)
  .put(reservationsController.update)
  .delete(reservationsController.remove);

module.exports = router;
