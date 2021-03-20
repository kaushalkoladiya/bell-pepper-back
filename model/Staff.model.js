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
    isBlocked: { type: Boolean, default: false },
    blockedByWhom: { type: String, default: null },
    availabilityTime: {
      start: {
        hour: { type: String, default: 8 },
        min: { type: String, default: 30 },
      },
      end: {
        hour: { type: String, default: 16 },
        min: { type: String, default: 30 },
      },
    },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);
