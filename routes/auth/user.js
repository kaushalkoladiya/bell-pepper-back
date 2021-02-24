const express = require("express");
const { body, query } = require("express-validator");
const { UserAuthController } = require("../../controller/Auth");

const router = express.Router();

const signupValidation = [
  body("mobile").isNumeric().withMessage("Wrong mobile number"),
  body("name").isString().withMessage("Name is invalid"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("city").isString().withMessage("City is invalid"),
];

const loginValidation = [
  body("mobile").isNumeric().withMessage("Wrong mobile number"),
];

const isMobileNoExistsValidation = [
  query("mobile")
    .isNumeric()
    .withMessage("Mobile number is required in query parameter."),
];

router.post("/signup", signupValidation, UserAuthController.signup);
router.post("/login", loginValidation, UserAuthController.login);
router.get(
  "/isMobileNoExists",
  isMobileNoExistsValidation,
  UserAuthController.isMobileNoExists
);

module.exports = router;
