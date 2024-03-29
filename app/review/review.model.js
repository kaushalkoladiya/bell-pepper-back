const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    bookingId: {
      ref: "Booking",
      type: Schema.Types.ObjectId,
      default: null,
      required: true,
    },
    serviceId: {
      ref: "Service",
      type: Schema.Types.ObjectId,
      default: null,
      required: true,
    },
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
      default: null,
      required: true,
    },
    staffId: {
      ref: "Staff",
      type: Schema.Types.ObjectId,
      default: null,
      required: true,
    },
    star: { type: Number, default: 0 },
    description: { type: String, default: null, require: false },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
