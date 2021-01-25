const express = require("express");
const { body, query } = require("express-validator");
const { VendorAuthController } = require("../../controller/Auth");

const router = express.Router();

const signupValidation = [
  body("company_name").isString().withMessage("Company name is required"),
  body("mobile").isNumeric().withMessage("Mobile no. is invalid"),
  body("address").isString().withMessage("Address is invalid"),
  body("staff").isNumeric().withMessage("Staff is invalid"),
];

const loginValidation = [
  body("mobile").isNumeric().withMessage("Wrong mobile number"),
];

const isMobileNoExistsValidation = [
  query("mobile")
    .isNumeric()
    .withMessage("Mobile number is required in query parameter."),
];

router.post("/signup", signupValidation, VendorAuthController.signup);
router.post("/login", loginValidation, VendorAuthController.login);
// router.get(
//   "/isMobileNoExists",
//   isMobileNoExistsValidation,
//   VendorAuthController.isMobileNoExists
// );

module.exports = router;
