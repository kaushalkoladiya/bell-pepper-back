require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");

const app = require("./app");

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
