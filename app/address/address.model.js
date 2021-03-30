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
    city: { type: String, required: false, default: null },
    street: { type: String, required: false, default: null },
    houseNumber: { type: String, required: false, default: null },
    zipCode: { type: String, required: false, default: null },
    state: { type: String, required: false, default: null },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", AddressSchema);
