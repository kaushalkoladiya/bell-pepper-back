const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      default: null,
    },
    mobile: {
      type: Number,
      required: true,
      default: null,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      default: null,
      unique: true,
    },
    gender: {
      type: Boolean,
      required: false,
      default: null,
    },
    dob: {
      type: String,
      required: false,
      default: null,
    },
    location: {
      type: String,
      required: false,
      default: null,
    },
    lat: {
      type: String,
      required: false,
      default: null,
    },
    lon: {
      type: String,
      required: false,
      default: null,
    },
    city: {
      type: String,
      required: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
