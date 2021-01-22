const express = require("express");
const bodyParser = require("body-parser");

// routes
const authRoute = require("./routes/authRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v2", authRoute);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "404 not found!",
  });
});

app.listen(5000);
