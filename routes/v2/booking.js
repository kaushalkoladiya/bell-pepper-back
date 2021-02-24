const express = require("express");
const { body } = require("express-validator");
const { BookingController } = require("../../controller");

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
  body("date").notEmpty().withMessage("Invalid field Date"),
  body("time").notEmpty().withMessage("Invalid field Time"),
];

router.post("/booking", storeValidation, BookingController.store);
router.get("/booking/user/:userId", BookingController.indexByUser);

module.exports = router;
