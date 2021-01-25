const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverSchema = new Schema({
  vendorId: {
    ref: "Vendor",
    type: Schema.Types.ObjectId,
  },
  vehicle_no: String,
  name: String,
  mobile: String,
  image: String,
});

module.exports = mongoose.model("Driver", driverSchema);
