// import mongo db
const mongoose = require("mongoose");

// for communitcation with database
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

// export model
module.exports = mongoose.model("Driver", driverSchema);
