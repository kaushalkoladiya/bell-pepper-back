const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    vendorId: {
      ref: "Vendor",
      type: Schema.Types.ObjectId,
    },
    vehicleNo: String,
    name: String,
    mobile: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverSchema);
