const express = require("express");
const { VendorController } = require("../controller");

const router = express.Router();

router.get("/", VendorController.index);

module.exports = router;
