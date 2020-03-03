const router = require("express").Router();
const bookController = require("../../controllerw/bookController");
router.route("/")
  .get(bookController.findAll)
  .post(booController.create);
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;