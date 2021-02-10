const express = require("express");
const { body, query } = require("express-validator");
const { StaffController } = require("../controller");
const { AdminMiddleware } = require("../middleware");

const router = express.Router();

const storeValidation = [
  body("vendorId").isAlphanumeric().withMessage("Invalid field Vendor ID"),
  body("name").notEmpty().withMessage("Invalid field Name"),
  body("about").notEmpty().withMessage("Invalid field About"),
  body("email").isEmail().withMessage("Invalid field Email"),
  body("mobile").isNumeric().withMessage("Invalid field Phone No."),
];

router.get("/", AdminMiddleware, StaffController.index);
router.get(
  "/vendor/:vendorId",
  [query("vendorId").notEmpty().withMessage("Invalid vendorId")],
  StaffController.indexByVendor
);
router.post("/", storeValidation, StaffController.store);
router.delete("/:id", StaffController.destroy);
router.get("/faker", StaffController.faker);

module.exports = router;
