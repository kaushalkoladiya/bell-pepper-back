// import mongo db
const mongoose = require("mongoose");

// for communitcation with database
const Schema = mongoose.Schema;

// create model
const driverSchema = new Schema({
  // foreign key
  vendorId: {
    ref: "Vendor",
    type: Schema.Types.ObjectId,
  },

  vehicleNo: String,
  name: String,
  mobile: String,
  image: String,
});

// export model
module.exports = mongoose.model("Driver", driverSchema);
