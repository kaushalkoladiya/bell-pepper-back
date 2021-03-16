const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    categoryId: {
      ref: "Category",
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: { type: String, default: null },
    image: { type: String, default: null },
    descriptions: {
      detail: { type: String, default: null },
      packageInclude: { type: String, default: null },
      brandUsed: { type: String, default: null },
      suitable: { type: String, default: null },
      certification: { type: String, default: null },
    },
    price: { type: String, default: null },
    discount: { type: String, default: null },
    coverImage: [{ type: String, default: null }],
    show: {
      type: Boolean,
      default: true,
      required: true,
    },
    details: [
      {
        name: String,
        description: String,
        price: { type: Number, default: null },
      },
    ],
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
