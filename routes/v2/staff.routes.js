const express = require("express");
const { StaffController } = require("../../controller");

const router = express.Router();

router.get("/staff/category/:categoryId", StaffController.indexByCategory);
router.get("/staff/:staffId", StaffController.show);

module.exports = router;
