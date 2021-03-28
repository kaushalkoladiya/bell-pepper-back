require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");

const app = require("./app/app");

app.get("/*", function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "build", "index.html"));
});

app.use((err, req, res, next) => {
  const message = err.message || "Server Error",
    status = err.status || 500;

  // console.log(req);
  console.log(`Status: ${status} \nMessage: ${message}`);
  console.log(`URL: ${req.url} METHOD: ${req.method}`);
  return res.status(err.status || 500).json({
    message,
    errors: err.errors,
    status,
  });
});

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vrnuc.mongodb.net/${process.env.DB_NAME}?authSource=admin&replicaSet=atlas-11imru-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
const PORT = process.env.PORT || 5000;

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
