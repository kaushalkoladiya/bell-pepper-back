const express = require("express");
const StaffController = require("./staff.controller");

const router = express.Router();

router.post("/availability/:staffId", StaffController.availability);
router.get("/category/:categoryId", StaffController.indexByCategory);
router.get("/:staffId", StaffController.show);
router.put("/change/availability/:staffId", StaffController.toggleAvailability);
router.patch(
  "/change/availability/time/:staffId",
  StaffController.changeAvailabilityTime
);

module.exports = router;
