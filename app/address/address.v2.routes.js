const express = require("express");
const AddressController = require("./address.controller");
const { body, param } = require("express-validator");

const router = express.Router();

const storeValidation = [
  body("city").notEmpty().withMessage("Invalid city!"),
  body("street").notEmpty().withMessage("Invalid street!"),
  body("houseNumber").notEmpty().withMessage("Invalid houseNumber!"),
  body("zipCode").notEmpty().withMessage("Invalid zipCode!"),
  body("state").notEmpty().withMessage("Invalid state!"),
];

const addressIdValidation = [
  param("addressId").isAlphanumeric().withMessage("Invalid addressId!"),
];

router.get("/user/:userId", AddressController.indexByUser);
router.get("/vendor/:vendorId", AddressController.indexByVendor);
router.post("", storeValidation, AddressController.store);
router.patch("/:addressId", storeValidation, AddressController.update);
router.put(
  "/markAsActive/:addressId",
  addressIdValidation,
  AddressController.markAsActive
);
router.delete("/:addressId", addressIdValidation, AddressController.destroy);

module.exports = router;
