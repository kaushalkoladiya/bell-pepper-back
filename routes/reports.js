const express = require("express");
const { body } = require("express-validator");
const { AdminMiddleware } = require("../middleware");
const { ReportsController } = require("../controller");

const router = express.Router();

router.get("/daily-booking", ReportsController.dailyBooking);

module.exports = router;
