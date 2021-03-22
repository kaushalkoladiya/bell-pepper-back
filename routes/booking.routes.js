const express = require("express");
const { body } = require("express-validator");
const { BookingController } = require("../controller");
const {
  AdminMiddleware,
  ServiceMiddleware,
  UserMiddleware,
} = require("../middleware");

const router = express.Router();

const storeValidation = [
  body("serviceId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("userId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("description").notEmpty().withMessage("Invalid field Description"),
  body("isMaterialRequired").isBoolean().withMessage("Invalid field Material"),
  body("frequency").notEmpty().withMessage("Invalid field Frequency"),
  body("howManyHours").isNumeric().withMessage("Invalid field HowManyHours"),
  body("howManyProfessions")
    .isNumeric()
    .withMessage("Invalid field HowManyProfessions"),
  body("year").notEmpty().withMessage("Invalid year"),
  body("month").notEmpty().withMessage("Invalid month"),
  body("date").notEmpty().withMessage("Invalid date"),
  body("hour").notEmpty().withMessage("Invalid hour"),
  body("minute").notEmpty().withMessage("Invalid minute"),
];

const assignStaffValidation = [
  body("staffId").isAlphanumeric().withMessage("Invalid field Staff ID"),
  body("bookingId").isAlphanumeric().withMessage("Invalid field Booking ID"),
];

const assignVendorValidation = [
  body("bookingId").isAlphanumeric().withMessage("Invalid field Staff ID"),
  body("vendorId").isAlphanumeric().withMessage("Invalid field Booking ID"),
];

router.get("/", AdminMiddleware, BookingController.index);
router.get("/vendor/:vendorId", BookingController.indexByVendor);
router.get("/service/:serviceId", BookingController.indexByService);
router.get("/user/:userId", BookingController.indexByUser);
router.post(
  "/",
  ServiceMiddleware,
  UserMiddleware,
  storeValidation,
  BookingController.store
);
router.put(
  "/assignStaff",
  assignStaffValidation,
  BookingController.assignStaff
);
router.put(
  "/assignVendor",
  assignVendorValidation,
  BookingController.assignVendor
);
router.put("/removeStaff", BookingController.removeStaff);
router.get("/faker", BookingController.faker);
router.delete("/:id", BookingController.destroy);

module.exports = router;
