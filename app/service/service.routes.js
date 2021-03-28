const express = require("express");
const { body } = require("express-validator");
const ServiceController = require("./service.controller");
// middleware
const AdminMiddleware = require("../admin/admin.middleware");
const multer = require("../../helper/multer");

const router = express.Router();

const storeValidation = [
  body("categoryId").isAlphanumeric().withMessage("Invalid category id"),
  body("title").notEmpty().withMessage("Invalid title"),
  body("price").isNumeric().withMessage("Price must be a number"),
];

router.get("/faker", ServiceController.faker);
router.get("/", AdminMiddleware, ServiceController.index);
router.get("/:vendorId", ServiceController.indexByVendorId);
router.post(
  "/",
  AdminMiddleware,
  multer.single("image"),
  storeValidation,
  ServiceController.store
);
router.patch(
  "/:id",
  AdminMiddleware,
  multer.single("image"),
  storeValidation,
  ServiceController.update
);
router.post(
  "/coverImage/:serverId",
  AdminMiddleware,
  multer.array("image"),
  ServiceController.storeCoverImages
);
router.put(
  "/coverImage/:serverId/index/:index",
  AdminMiddleware,
  ServiceController.deleteCoverImage
);
router.delete("/:serviceId", AdminMiddleware, ServiceController.destroy);
router.put("/toggleShow/:serviceId", ServiceController.toggleShow);

module.exports = router;
