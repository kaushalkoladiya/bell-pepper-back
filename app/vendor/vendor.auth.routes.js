const express = require("express");
const { body } = require("express-validator");
const VendorAuthController = require("./vendor.auth.controller");

const router = express.Router();

const signupValidation = [
  body("categoryId").isAlphanumeric().withMessage("Category Id is required"),
  body("companyName").notEmpty().withMessage("Company name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("mobile").isNumeric().withMessage("Mobile no. is invalid"),
  body("city").notEmpty().withMessage("City is invalid"),
  body("street").notEmpty().withMessage("City is invalid"),
  body("houseNumber").isNumeric().withMessage("City is invalid"),
];

router.post("/signup", signupValidation, VendorAuthController.signup);
router.post("/login", signupValidation, VendorAuthController.login);
module.exports = router;
