const express = require("express");
const { StaffController } = require("../../controller");

const router = express.Router();

router.get("/staff/category/:categoryId", StaffController.indexByCategory);

module.exports = router;
