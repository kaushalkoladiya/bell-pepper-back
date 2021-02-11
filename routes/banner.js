const express = require("express");
const { BannerController } = require("../controller");

const multer = require("../helper/multer");
const router = express.Router();

router.get("/", BannerController.index);
router.post("/", multer.single("image"), BannerController.store);
router.put("/toggleShow/:bannerId", BannerController.toggleShow);
router.put("/toggleIsLive/:bannerId", BannerController.toggleIsLive);
router.delete("/:bannerId", BannerController.destroy);

module.exports = router;
