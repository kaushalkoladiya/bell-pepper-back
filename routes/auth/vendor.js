const express = require("express");
const { body, query } = require("express-validator");
const { VendorAuthController } = require("../../controller/Auth");

const router = express.Router();

const signupValidation = [
  body("companyName").notEmpty().withMessage("Company name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("mobile").isNumeric().withMessage("Mobile no. is invalid"),
  body("city").notEmpty().withMessage("City is invalid"),
  body("street").notEmpty().withMessage("City is invalid"),
  body("houseNumber").isNumeric().withMessage("City is invalid"),
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
router.get("/faker", VendorAuthController.faker);
// router.get(
//   "/isMobileNoExists",
//   isMobileNoExistsValidation,
//   VendorAuthController.isMobileNoExists
// );

module.exports = router;
