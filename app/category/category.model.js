const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: null,
    },
    image: {
      type: String,
      required: false,
      default: null,
    },
    hasImage: {
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

module.exports = mongoose.model("Category", categorySchema);
