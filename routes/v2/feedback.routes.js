const express = require("express");
const { body } = require("express-validator");
const { FeedbackController } = require("../../controller");
const {
  BookingMiddleware,
  ServiceMiddleware,
  UserMiddleware,
} = require("../../middleware");

const router = express.Router();

// router.get("/:reviewId", FeedbackController.index);

router.post(
  "/feedback",
  BookingMiddleware,
  ServiceMiddleware,
  UserMiddleware,
  [
    body("star")
      .isNumeric()
      .notEmpty()
      .bail()
      .withMessage("Invalid feedback description!"),
    body("description")
      .notEmpty()
      .bail()
      .withMessage("Invalid feedback description!"),
  ],
  FeedbackController.store
);

module.exports = router;
