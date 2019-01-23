const MenuItem = require('../../models');
const router = require('express').Router();
const menuController = require('../../controllers/menuController');
const menuItemController = require('../../controllers/menuItemController');
// Get input from request

// router.route('/menus').get(menuController.findAll).post(menuController.create);

// Matches with "/api/restaurant/:restId/menu/:d"
router
  .route('/menus/&menuId=:id')
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.delete);

// Matches with "/api/restaurant/:restId/menu/:menuId/items"
router
  .route('/menus/&menuId=:id/items')
  .get(menuItemController.findAll)
  .put(menuItemController.create);

// Matches with "/api/restaurant/:id/menu/:id/items/&id=:id"
router
  .route('/menus/&menuId=:menuId/items/&itemId=:itemId')
  .get(menuItemController.findById)
  .update(menuItemController.update)
  .delete(menuItemController.delete);

// Matches with "/api/restaurant/:id/menu:/id/items/&cat=:cat"
router
  .route('/menus/&menuId=:menuId/items/&itemCat=:itemCat')
  .get(MenuItemController.findByCategory);

module.exports = router;
