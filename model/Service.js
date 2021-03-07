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
    discount: { type: String, default: null },
    packageInclude: { type: String, default: null },
    brandUsed: { type: String, default: null },
    suitable: { type: String, default: null },
    certification: { type: String, default: null },
    coverImage: [{ type: String, default: null }],
    show: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
