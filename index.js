const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
// routes
const {
  vendorAuthRoutes,
  userAuthRoutes,
  adminAuthRoutes,
} = require("./routes/auth");

const {
  v2DashboardRoutes,
  v2ServiceRoutes,
  v2BookingRoutes,
  v2CategoryRoutes,
  v2ReviewRoutes,
  v2FeedbackRoutes,
  v2StaffRoutes,
  v2AddressRoutes,
} = require("./routes/v2");
const {
  serviceRoutes,
  userRoutes,
  vendorRoutes,
  bookingRoutes,
  staffRoutes,
  adminRoutes,
  dashboardRoutes,
  categoryRoutes,
  reportsRoutes,
  bannerRoutes,
  videoRoutes,
  tutorialRoutes,
  reviewRoutes,
  feedbackRoutes,
  addressRoutes,
} = require("./routes");
require("dotenv").config();

const app = express();
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vrnuc.mongodb.net/${process.env.DB_NAME}?authSource=admin&replicaSet=atlas-11imru-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
const PORT = process.env.PORT || 5000;

// set headers
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// allow folders access
app.use(express.static(path.join(__dirname, "public", "build")));
app.use("/storage", express.static(path.join(__dirname, "storage")));

// body parsing
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// v2 (for End-User)
app.use(
  "/api/v2",
  userAuthRoutes,
  v2DashboardRoutes,
  v2ServiceRoutes,
  v2BookingRoutes,
  v2CategoryRoutes,
  v2ReviewRoutes,
  v2FeedbackRoutes,
  v2StaffRoutes,
  v2AddressRoutes
);
app.use("/api/v2/vendor", vendorAuthRoutes);

// v1 (for Admin)
app.use("/api/admin", adminAuthRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", dashboardRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/tutorial", tutorialRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/address", addressRoutes);

app.use("/api/*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "404 not found!",
  });
});
app.get("/*", function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "build", "index.html"));
});
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(err.status || 500).json({
    message: err.message || "Server Error",
    errors: err.errors,
    status: err.status || 500,
  });
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
    } else {
      console.log(err);
    }
  }
);
