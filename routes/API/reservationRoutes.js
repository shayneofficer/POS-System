const router = require("express").Router();
const controller = require("../../controllers/reservationController");

router
  .route("/")
  .get(controller.find)
  .post(controller.create)

router
  .route("/=:rsvId")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router;