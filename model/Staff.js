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
    gender: { type: String, default: "male" },
    age: { type: Number, default: null },
    nationality: { type: String, default: null },
    idProof: { type: String, default: null },
    isAvailable: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null },
    isBlocked: { type: Boolean, default: false },
    blockedByWhom: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);
