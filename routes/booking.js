const express = require("express");
const { body } = require("express-validator");
const { BookingController } = require("../controller");

const router = express.Router();

const storeValidation = [
  body("vendorId").isAlphanumeric().withMessage("Invalid field Vendor ID"),
  body("serviceId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("userId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("description").notEmpty().withMessage("Invalid field Description"),
  body("isMaterialRequired").isBoolean().withMessage("Invalid field Material"),
  body("frequency").notEmpty().withMessage("Invalid field Frequency"),
  body("howManyHours").isNumeric().withMessage("Invalid field HowManyHours"),
  body("howManyProfessions")
    .isNumeric()
    .withMessage("Invalid field HowManyProfessions"),
  body("date").notEmpty().withMessage("Invalid field Date"),
  body("time").notEmpty().withMessage("Invalid field Time"),
  body("profession").notEmpty().withMessage("Invalid field Profession"),
];

router.get("/", storeValidation, BookingController.index);
router.get(
  "/vendor/:vendorId",
  storeValidation,
  BookingController.indexByVendor
);
router.get(
  "/service/:serviceId",
  storeValidation,
  BookingController.indexByService
);
router.get("/user/:userId", storeValidation, BookingController.indexByUser);
router.post("/", storeValidation, BookingController.store);

module.exports = router;
