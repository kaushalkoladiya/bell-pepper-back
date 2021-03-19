const express = require("express");
const { body } = require("express-validator");
const { BookingController } = require("../../controller");
const { StaffMiddleware } = require("../../middleware");

const router = express.Router();

const storeValidation = [
  body("serviceId").isAlphanumeric().withMessage("Invalid field Service ID"),
  body("userId").isAlphanumeric().withMessage("Invalid field Service ID"),
];

router.post("/booking", storeValidation, BookingController.store);
router.get("/booking/user/:userId", BookingController.indexByUser);

module.exports = router;
