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
];

const assignValidation = [
  body("staffId").isAlphanumeric().withMessage("Invalid field Staff ID"),
  body("bookingId").isAlphanumeric().withMessage("Invalid field Booking ID"),
];

router.get("/", BookingController.index);
router.get("/vendor/:vendorId", BookingController.indexByVendor);
router.get("/service/:serviceId", BookingController.indexByService);
router.get("/user/:userId", BookingController.indexByUser);
router.post("/", storeValidation, BookingController.store);
router.put("/assignStaff", assignValidation, BookingController.assignStaff);
router.put("/removeStaff", BookingController.removeStaff);
router.get("/faker", BookingController.faker);
module.exports = router;
