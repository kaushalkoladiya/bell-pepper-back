const express = require("express");
const v2DashboardController = require("./dashboard.v2.controller");

const router = express.Router();

router.get("/", v2DashboardController.dashboard);

module.exports = router;
