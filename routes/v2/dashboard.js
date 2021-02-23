const express = require("express");
const { v2DashboardController } = require("../../controller/v2");

const router = express.Router();

router.get("/dashboard", v2DashboardController.dashboard);

module.exports = router;
