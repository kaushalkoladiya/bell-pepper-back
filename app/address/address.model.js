const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    vendorId: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
      required: false,
      default: null,
    },
    city: String,
    street: String,
    houseNumber: String,
    zipCode: String,
    state: String,
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", AddressSchema);
