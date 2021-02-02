const express = require("express");
const { VendorController } = require("../controller");

const router = express.Router();

router.get("/", VendorController.index);
router.delete("/:id", VendorController.destroy);
router.get("/faker", VendorController.faker);

module.exports = router;
