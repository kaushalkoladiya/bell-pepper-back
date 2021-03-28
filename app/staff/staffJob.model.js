const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StaffJobSchema = new Schema(
  {
    staffId: {
      type: mongoose.Schema.ObjectId,
      ref: "Staff",
      required: true,
      default: null,
    },
    bookingId: {
      type: mongoose.Schema.ObjectId,
      ref: "Booking",
      required: true,
      default: null,
    },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    isCompleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StaffJob", StaffJobSchema);
