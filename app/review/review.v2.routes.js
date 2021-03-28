const express = require("express");
const { body } = require("express-validator");
const ReviewController = require("./review.controller");
// middleware
const BookingMiddleware = require("../booking/booking.middleware");
const ServiceMiddleware = require("../service/service.middleware");
const UserMiddleware = require("../user/user.middleware");

const router = express.Router();

// router.get("/:reviewId", ReviewController.index);

router.post(
  "/",
  ServiceMiddleware,
  UserMiddleware,
  BookingMiddleware,
  [body("star").isNumeric().notEmpty().bail().withMessage("Invalid stars!")],
  ReviewController.store
);

module.exports = router;
