const express = require("express");
const { ServiceController } = require("../../controller");

const router = express.Router();

router.get("/service", ServiceController.index);
router.get(
  "/service/category/:categoryId",
  ServiceController.indexByCategoryId
);

module.exports = router;
