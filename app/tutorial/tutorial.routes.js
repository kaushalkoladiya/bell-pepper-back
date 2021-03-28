const express = require("express");
const TutorialController = require("./tutorial.controller");
const multer = require("../../helper/multer");

const router = express.Router();

router.get("/", TutorialController.index);
router.post("/", multer.single("image"), TutorialController.store);
// router.patch(
//   "/:tutorialId",
//   multer.single("image"),
//   TutorialController.update
// );
router.delete("/:tutorialId", TutorialController.destroy);

module.exports = router;
