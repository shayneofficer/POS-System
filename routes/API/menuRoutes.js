const router = require("express").Router();
const menuController = require("../../controllers/menuController");
const categoryController = require("../../controllers/menuCategoryController");
const itemController = require("../../controllers/menuItemController");

router.route("/").get(menuController.find).post(menuController.create);

router
  .route("=:menuId")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

router
  .route("=:menuId/&cat")
  .get(categoryController.find)
  .post(categoryController.create);

router
  .route("=:menuId/&cat=:catId")
  .get(categoryController.findById)
  .put(categoryController.update)
  .delete(categoryController.remove);

router
  .route("=:menuId/&cat=:catId/&items")
  .get(itemController.find)
  .post(itemController.create);

router
  .route("=:menuId/&cat=:catId/&items=:itemId")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);

module.exports = router;
