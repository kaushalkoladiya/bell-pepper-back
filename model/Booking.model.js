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
    staffId: {
      type: Schema.Types.Object,
      default: null,
      ref: "Staff",
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
    isMaterialRequired: {
      type: Boolean,
      required: true,
      default: false,
    },
    frequency: {
      type: String,
      required: false,
      default: null,
    },
    howManyHours: {
      type: Number,
      default: null,
      required: false,
    },
    howManyProfessions: {
      type: Number,
      default: null,
      required: false,
    },
    date: {
      type: String,
      default: null,
      required: false,
    },
    time: {
      type: String,
      default: null,
      required: false,
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
      required: false,
      default: null,
    },
    cancelledByWhom: {
      type: String,
      require: false,
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
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
