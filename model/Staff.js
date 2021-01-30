const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    vendorId: {
      ref: "Vendor",
      type: Schema.Types.ObjectId,
    },
    name: { type: String, default: null },
    about: { type: String, default: null },
    email: { type: String, default: null },
    mobile: { type: String, default: null },
    image: { type: String, default: null },
    isAvailable: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);
