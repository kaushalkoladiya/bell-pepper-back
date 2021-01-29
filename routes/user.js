const express = require("express");
const { UserController } = require("../controller");

const router = express.Router();

router.get("/", UserController.index);
router.get("/faker", UserController.faker);

module.exports = router;
