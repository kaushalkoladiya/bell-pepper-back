const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorialSchema = new Schema(
  {
    title: { type: String, default: null },
    image: { type: String, default: null },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tutorial", tutorialSchema);
