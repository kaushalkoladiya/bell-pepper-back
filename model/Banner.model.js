const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bannerSchema = new Schema(
  {
    image: {
      type: String,
      required: false,
      default: null,
    },
    isLive: {
      type: Boolean,
      default: false,
      required: true,
    },
    show: {
      type: Boolean,
      default: true,
      required: true,
    },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Banner", bannerSchema);
