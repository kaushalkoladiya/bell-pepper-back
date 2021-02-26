const express = require("express");
const { CategoryController } = require("../../controller");

const router = express.Router();

router.get("/category", CategoryController.index);

module.exports = router;
