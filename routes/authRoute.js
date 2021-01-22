const express = require("express");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).json({
      status: 200,
      messages: "User registered successfully!",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
