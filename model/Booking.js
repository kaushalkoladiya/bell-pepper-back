const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    vendorId: {
      ref: "Vendor",
      type: Schema.Types.ObjectId,
      default: null,
    },
    serviceId: {
      ref: "Service",
      type: Schema.Types.ObjectId,
      default: null,
    },
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
      default: null,
    },
    description: {
      type: String,
      required: true,
      default: null,
    },
    isMaterialRequired: {
      type: Boolean,
      required: true,
      default: false,
    },
    frequency: {
      type: String,
      required: true,
      default: "one day",
    },
    howManyHours: {
      type: Number,
      default: null,
      required: true,
    },
    howManyProfessions: {
      type: Number,
      default: null,
      required: true,
    },
    date: {
      type: String,
      default: null,
      required: true,
    },
    time: {
      type: String,
      default: null,
      required: true,
    },
    profession: {
      type: Schema.Types.Object,
      default: null,
      ref: "Staff",
    },
    paymentId: {
      // type: Schema.Types.ObjectId,
      type: String,
      default: null,
      // ref: "Payment",
    },
    isCancelled: {
      type: Boolean,
      required: true,
      default: false,
    },
    cancelledByWhom: {
      type: String,
      require: true,
      default: null,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
    doneOn: {
      type: String,
      default: null,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
