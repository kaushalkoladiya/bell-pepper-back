const express = require("express");
const VendorController = require("./vendor.controller");
const VendorMiddleware = require("./vendor.middleware");

const router = express.Router();

router.get("/", VendorController.index);
router.delete("/:id", VendorController.destroy);
router.get("/faker", VendorController.faker);
router.get("/data", VendorMiddleware, VendorController.getVendorData);

module.exports = router;
