const router = require("express").Router();
const controller = require("../../controllers/receiptController");

router
  .route("/")
  .get(controller.find)
  .post(controller.create)

router
  .route("/=:receiptId")
  .get(controller.findById)
  .post(controller.delete)
  .delete(controller.delete)

module.exports = router;