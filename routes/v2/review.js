const express = require("express");
const { body } = require("express-validator");
const { ReviewController } = require("../../controller");
const {
  BookingMiddleware,
  ServiceMiddleware,
  UserMiddleware,
} = require("../../middleware");

const router = express.Router();

// router.get("/:reviewId", ReviewController.index);

router.post(
  "/review",
  ServiceMiddleware,
  UserMiddleware,
  BookingMiddleware,
  [body("star").isNumeric().notEmpty().bail().withMessage("Invalid stars!")],
  ReviewController.store
);

module.exports = router;
