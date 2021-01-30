const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    vendorId: {
      ref: "Vendor",
      type: Schema.Types.ObjectId,
    },
    price: { type: String, default: null },
    title: { type: String, default: null },
    description: { type: String, default: null },
    image: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);