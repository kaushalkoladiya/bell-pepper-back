const express = require("express");
const { StaffController } = require("../../controller");

const router = express.Router();

router.post("/staff/availability/:staffId", StaffController.availability);
router.get("/staff/category/:categoryId", StaffController.indexByCategory);
router.get("/staff/:staffId", StaffController.show);
router.put(
  "/staff/change/availability/:staffId",
  StaffController.toggleAvailability
);
router.patch(
  "/staff/change/availability/time/:staffId",
  StaffController.changeAvailabilityTime
);

module.exports = router;
