const { Router } = require("express");

const UserController = require("./app/controllers/UserController");

const router = Router();

router.get("/users", UserController.index);
router.post("/users", UserController.store);
router.get("/users/routes", UserController.routes);
router.delete("/users/:id", UserController.delete);

module.exports = router;
