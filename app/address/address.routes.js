const express = require("express");
const AddressController = require("./address.controller");

const router = express.Router();

router.get("/user/:userId", AddressController.indexByUser);
router.post("/", AddressController.store);
router.patch("/:addressId", AddressController.update);
router.get("/faker", AddressController.faker);
router.delete("/:reviewId", AddressController.destroy);

module.exports = router;
