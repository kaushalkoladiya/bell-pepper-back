const express = require("express");
const ServiceController = require("./service.controller");

const router = express.Router();

router.get("/", ServiceController.index);
router.get("/category/:categoryId", ServiceController.indexByCategoryId);
router.get("/:serviceId", ServiceController.show);

module.exports = router;
