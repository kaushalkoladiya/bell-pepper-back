const express = require("express");
const AdminMiddleware = require("./admin.middleware");
const AdminController = require("./admin.controller");

const router = express.Router();

router.get("/", AdminMiddleware, AdminController.getAdminData);
router.patch("/", AdminMiddleware, AdminController.updateAdminData);

module.exports = router;
