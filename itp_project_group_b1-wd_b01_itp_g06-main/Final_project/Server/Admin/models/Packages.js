const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  includes: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  MasterChefFoodsPrice: {
    type: Number,
    required: true,
  },
  HighLuxaryVechilePrice: {
    type: Number,
    required: true,
  },
  PerExtraOneDayPrice: {
    type: Number,
    required: true,
  },
  RentCameraPrice: {
    type: Number,
    required: true,
  },
  PerExtraBedPrice: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("packages", PostSchema);
