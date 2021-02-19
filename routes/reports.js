const express = require("express");
const { body } = require("express-validator");
const { AdminMiddleware } = require("../middleware");
const { ReportsController } = require("../controller");

const router = express.Router();

router.get("/dailyBooking", ReportsController.dailyBooking);
router.post("/customer", ReportsController.customer);

module.exports = router;
