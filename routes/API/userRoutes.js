const router = require("express").Router();
const userController = require("../../controllers/usersController");


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/users/login"
router.route("/login")
  .post(userController.login);
  
module.exports = router;
