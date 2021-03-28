const express = require("express");
const ReviewController = require("./review.controller");

const router = express.Router();

router.delete("/:reviewId", ReviewController.destroy);
router.get("/faker", ReviewController.faker);

module.exports = router;
