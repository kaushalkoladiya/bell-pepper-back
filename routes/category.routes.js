const express = require("express");
const { body } = require("express-validator");
const { CategoryController } = require("../controller");

const multer = require("../helper/multer");
const router = express.Router();

router.get("/", CategoryController.index);

router.post(
  "/",
  multer.single("image"),
  [body("name").not().trim().notEmpty().bail()],
  CategoryController.store
);

router.patch(
  "/:categoryId",
  multer.single("image"),
  [body("name").not().trim().notEmpty().bail()],
  CategoryController.update
);

router.delete("/:categoryId", CategoryController.destroy);
router.put("/toggleShow/:categoryId", CategoryController.toggleShow);

module.exports = router;
