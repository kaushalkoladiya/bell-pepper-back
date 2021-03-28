const express = require("express");
const { body } = require("express-validator");
const AdminAuthController = require("./admin.auth.controller");

const router = express.Router();

const loginValidation = [
  body("email").isEmail().withMessage("Invalid Email!"),
  body("password").notEmpty().withMessage("Password cannot be empty!"),
];

router.post("/login", loginValidation, AdminAuthController.login);

module.exports = router;
