const express = require("express");
const { body } = require("express-validator");
const { ServiceController } = require("../controller");
const multer = require("../helper/multer");

const router = express.Router();

const storeValidation = [
  body("vendorId").isAlphanumeric().withMessage("Vendor ID must be a string"),
  body("title").notEmpty().withMessage("Invalid title"),
  body("description").notEmpty().withMessage("Invalid description"),
  body("price").isNumeric().withMessage("Price must be a number"),
];
router.get("/faker", ServiceController.faker);

router.get("/", ServiceController.index);

router.get("/:vendorId", ServiceController.indexByVendorId);

router.post(
  "/",
  multer.single("image"),
  storeValidation,
  ServiceController.store
);

module.exports = router;
