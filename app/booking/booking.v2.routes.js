const express = require("express");
const { body } = require("express-validator");
const BookingController = require("./booking.controller");

const router = express.Router();

const storeValidation = [
  body("serviceId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("userId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("addressId").isAlphanumeric().withMessage("Invalid field Address ID"),
];

const addressChangeValidation = [
  body("bookingId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("userId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("addressId").isAlphanumeric().withMessage("Invalid field Address ID"),
];

router.post("/", storeValidation, BookingController.store);
router.get("/user/:userId", BookingController.indexByUser);
router.post(
  "/changeAddress",
  addressChangeValidation,
  BookingController.changeAddress
);

module.exports = router;
