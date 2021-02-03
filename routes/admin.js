const express = require("express");
const { body } = require("express-validator");
const { AdminMiddleware } = require("../middleware");
const { AdminController } = require("../controller");

const router = express.Router();

router.get("/", AdminMiddleware, AdminController.getAdminData);
router.patch("/", AdminMiddleware, AdminController.updateAdminData);

module.exports = router;
