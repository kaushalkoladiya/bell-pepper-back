const express = require("express");
const UserController = require("./user.controller");

const router = express.Router();

router.get("/", UserController.index);
router.delete("/:id", UserController.destroy);
router.get("/faker", UserController.faker);

module.exports = router;
