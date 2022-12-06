const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  FoodImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Foods", PostSchema);
