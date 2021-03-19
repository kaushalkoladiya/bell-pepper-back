const express = require("express");
const { ReviewController } = require("../controller");

const router = express.Router();

// router.get("/:reviewId", ReviewController.index);

router.delete("/:reviewId", ReviewController.destroy);

module.exports = router;
