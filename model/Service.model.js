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
    description: { type: String, default: null },
    price: { type: String, default: null },
    discount: { type: String, default: null },
    coverImage: [{ type: String, default: null }],
    show: {
      type: Boolean,
      default: true,
      required: true,
    },
    stars: { type: Number, default: 0 },
    details: [
      {
        name: String,
        description: String,
        price: { type: Number, default: null },
      },
    ],
    frequencies: [
      {
        name: String,
        price: { type: Number, default: null },
      },
    ],
    hours: [
      {
        number: String,
        price: { type: Number, default: null },
      },
    ],
    staffs: [
      {
        number: String,
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
