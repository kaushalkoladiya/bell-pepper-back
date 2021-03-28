const express = require("express");
const VideoController = require("./video.controller");

const { multer } = require("../../helper");
const router = express.Router();

router.get("/", VideoController.index);
router.post("/", multer.single("video"), VideoController.store);
// router.patch("/:videoId", multer.single("video"), VideoController.update);
router.delete("/:videoId", VideoController.destroy);

module.exports = router;
