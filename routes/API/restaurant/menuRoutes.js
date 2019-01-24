const router = require('express').Router();
const menuController = require('../../../controllers/menuController');
const menuItemController = require('../../../controllers/menuItemController');
// Get input from request

// router.route('/menus').get(menuController.findAll).post(menuController.create);
router
  .route('/')
  .get(menuController.findAll)
  .put(menuController.create);
// Matches with "/api/restaurant/:restId/menu/:d"
router
  .route('/&menuId=:id')
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

// Matches with "/api/restaurant/:restId/menu/:menuId/items"
router
  .route('/&menuId=:id/items')
  .get(menuItemController.findAll)
  .put(menuItemController.create);

// Matches with "/api/restaurant/:id/menu/:id/items/&id=:id"
router
  .route('/&menuId=:menuId/items/&itemId=:itemId')
  .get(menuItemController.findById)
  .put(menuItemController.update)
  .delete(menuItemController.remove);

// Matches with "/api/restaurant/:id/menu:/id/items/&cat=:cat"
router
  .route('/&menuId=:menuId/items/&cat=:cat')
  .get(menuItemController.findByCategory);

module.exports = router;
