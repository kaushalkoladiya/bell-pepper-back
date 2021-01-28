const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vendorSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      city: String,
      street: String,
      houseNumber: String,
    },
    staff: {
      type: Number,
      required: true,
    },
    drivers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Driver",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);
