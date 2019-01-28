const router = require("express").Router();
const controller = require("../../controllers/tableController");

router
  .route("/")
  .get(controller.find)
  .post(controller.create)

router
  .route("/=:tableId")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router;