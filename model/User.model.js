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
      type: String,
      required: true,
      default: null,
      unique: true,
    },
    image: {
      type: String,
      required: false,
      default: null,
    },
    email: {
      type: String,
      required: true,
      default: null,
      unique: true,
    },
    gender: {
      type: String,
      required: false,
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
    addresses: [
      {
        type: Schema.ObjectId,
        require: false,
        ref: "Address",
      },
    ],
    activeAddress: {
      type: Schema.ObjectId,
      ref: "Address",
      require: false,
      default: null,
    },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
