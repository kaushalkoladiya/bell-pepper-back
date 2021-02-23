const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    categoryId: {
      ref: "Category",
      type: Schema.Types.ObjectId,
      default: null,
    },
    price: { type: String, default: null },
    title: { type: String, default: null },
    description: { type: String, default: null },
    image: { type: String, default: null },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
