const mongoose = require("mongoose");


const foodSchema = new mongoose.Schema({
  id: String,
  category: String,
  name: String,
  price: Number,
  tags: [String],
  favorite: Boolean,
  stars: Number,
  imageUrl: String,
  origins: [String],
  cookTime: String,
  desc: String,
});

const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
