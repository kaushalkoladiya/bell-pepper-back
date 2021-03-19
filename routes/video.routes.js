const express = require("express");
const { VideoController } = require("../controller");

const multer = require("../helper/multer");
const router = express.Router();

router.get("/", VideoController.index);
router.post("/", multer.single("video"), VideoController.store);
// router.patch("/:videoId", multer.single("video"), VideoController.update);
router.delete("/:videoId", VideoController.destroy);

module.exports = router;
