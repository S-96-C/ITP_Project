const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Specification: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Rooms", PostSchema);
