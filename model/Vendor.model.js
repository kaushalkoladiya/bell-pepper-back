const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vendorSchema = new Schema(
  {
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
      default: null,
    },
    companyName: {
      type: String,
      required: true,
      default: null,
    },
    image: {
      type: String,
      required: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
      default: null,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      default: null,
    },
    address: {
      city: String,
      street: String,
      houseNumber: String,
    },
    staff: [
      {
        type: Schema.Types.ObjectId,
        ref: "Staff",
        required: false,
      },
    ],
    password: {
      type: String,
      default: null,
    },
    hasPermission: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);
