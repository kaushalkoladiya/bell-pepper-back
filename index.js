const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
// routes
const { vendorAuthRoutes, userAuthRoutes } = require("./routes/auth");
const { serviceRoutes } = require("./routes");

require("dotenv").config();

const app = express();
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vrnuc.mongodb.net/${process.env.DB_NAME}?authSource=admin&replicaSet=atlas-11imru-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/storage", express.static(path.join(__dirname, "storage")));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userAuthRoutes);
app.use("/api/vendor", vendorAuthRoutes);
app.use("/api/service", serviceRoutes);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "404 not found!",
  });
});

app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ message: err.message || "Server Error", errors: err.errors });
});

mongoose.connect(
  CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      app.listen(PORT);
      console.log(`Server is running on ${PORT} and database is connected!`);
    }
  }
);
