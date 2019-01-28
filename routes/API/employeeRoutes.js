const router = require("express").Router();
const controller = require("../../controllers/employeeController");

router
  .route("/")
  .get(controller.find)
  .post(controller.create)

router
  .route("/=:employeeId")
  .get(controller.findById)
  .post(controller.delete)
  .delete(controller.delete)

module.exports = router;