const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  CarNumber: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  Driver: {
    type: String,
    required: true,
  },
  Seat: {
    type: String,
    required: true,
  },
  ChildSeat: {
    type: String,
    required: true,
  },
  Gps: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", PostSchema);
