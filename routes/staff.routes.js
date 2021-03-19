const express = require("express");
const { body, query } = require("express-validator");
const { StaffController } = require("../controller");
const { AdminMiddleware } = require("../middleware");
const { multer } = require("../helper");

const router = express.Router();

const storeValidation = [
  body("name").notEmpty().withMessage("Invalid field Name"),
  body("email").isEmail().withMessage("Invalid field Email"),
  body("mobile").notEmpty().withMessage("Invalid field Phone No."),
  body("gender").notEmpty().withMessage("Invalid field Gender"),
];

router.get("/", AdminMiddleware, StaffController.index);

router.get(
  "/vendor/:vendorId",
  [query("vendorId").notEmpty().withMessage("Invalid vendorId")],
  StaffController.indexByVendor
);

router.post(
  "/",
  AdminMiddleware,
  multer.single("image"),
  storeValidation,
  StaffController.store
);

router.patch(
  "/:staffId",
  AdminMiddleware,
  multer.single("image"),
  storeValidation,
  StaffController.update
);

router.patch(
  "/proof/:staffId",
  multer.single("image"),
  StaffController.uploadProof
);

router.delete("/:id", StaffController.destroy);
router.get("/faker", StaffController.faker);

module.exports = router;
