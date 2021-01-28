const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: Boolean,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    lat: {
      type: String,
      required: false,
    },
    lon: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
