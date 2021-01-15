const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      required: true,
    },
    procedure: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: NaN,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

exports.default = Recipe;
