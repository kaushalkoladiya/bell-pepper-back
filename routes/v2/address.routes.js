const express = require("express");
const { AddressController } = require("../../controller");
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

router.get("/address/user/:userId", AddressController.indexByUser);
router.get("/address/vendor/:vendorId", AddressController.indexByVendor);
router.post("/address", storeValidation, AddressController.store);
router.patch("/address/:addressId", storeValidation, AddressController.update);
router.put(
  "/address/markAsActive/:addressId",
  addressIdValidation,
  AddressController.markAsActive
);
router.delete(
  "/address/:addressId",
  addressIdValidation,
  AddressController.destroy
);

module.exports = router;