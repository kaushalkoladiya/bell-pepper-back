const express = require("express");
const { body } = require("express-validator");
const { AdminMiddleware } = require("../middleware");
const { DashboardController } = require("../controller");

const router = express.Router();

router.get("/dashboard", AdminMiddleware, DashboardController.counts);

module.exports = router;
