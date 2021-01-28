const express = require("express");
const { UserController } = require("../controller");

const router = express.Router();

router.get("/", UserController.index);

module.exports = router;
