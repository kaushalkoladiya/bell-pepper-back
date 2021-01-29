const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    vendorId: {
      ref: "Vendor",
      type: Schema.Types.ObjectId,
    },
    vehicleNo: { type: String, default: null },
    name: { type: String, default: null },
    mobile: { type: String, default: null },
    image: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverSchema);
