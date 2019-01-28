const router = require("express").Router();
const menuController = require("../../controllers/menuController");
const categoryController = require("../../controllers/categoryController");
const itemController = require("../../controllers/itemController");

router.route("/").get(menuController.find).post(menuController.create);

router
  .route("/&menu=:menuId")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.delete);

router
  .route("/&menu=:menuId/&cat")
  .get(categoryController.find)
  .post(categoryController.create);

router
  .route("/&menu=:menuId/&cat=:catId")
  .get(categoryController.findById)
  .put(categoryController.update)
  .delete(categoryController.delete);

router
  .route("/&menu=:menuId/&cat=:catId/&item")
  .get(itemController.find)
  .post(itemController.create);

router
  .route("/&menu=:menuId/&cat=:catId/&item=:itemId")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.delete);

module.exports = router;
