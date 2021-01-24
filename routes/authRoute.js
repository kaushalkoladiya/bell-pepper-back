const express = require("express");
const { body, query } = require("express-validator");
const { AuthController } = require("../controller");

const router = express.Router();

const signupValidation = [
  body("mobile").isNumeric().withMessage("Wrong mobile number"),
  body("name").isString().withMessage("Name is invalid"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("city").isString().withMessage("City is invalid"),
];

router.post("/signup", signupValidation, AuthController.signup);
router.post("/login", [], AuthController.login);
router.get(
  "/isRegistered",
  [query("mobile").isNumeric()],
  AuthController.isRegistered
);

module.exports = router;
