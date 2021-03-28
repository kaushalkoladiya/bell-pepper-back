const express = require("express");
const ReportsController = require("./reports.controller");

const router = express.Router();

router.get("/dailyBooking", ReportsController.dailyBooking);
router.post("/customer", ReportsController.customer);
router.post("/booking", ReportsController.booking);

module.exports = router;
