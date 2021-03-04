const express = require("express");
const { FeedbackController } = require("../controller");

const router = express.Router();

// router.get("/:reviewId", ReviewController.index);

router.delete("/:feedbackId", FeedbackController.destroy);

module.exports = router;
