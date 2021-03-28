const express = require("express");
const { body } = require("express-validator");
const AdminMiddleware = require("../admin/admin.middleware");
const DashboardController = require("./dashboard.controller");

const router = express.Router();

router.get("/", AdminMiddleware, DashboardController.counts);

module.exports = router;
