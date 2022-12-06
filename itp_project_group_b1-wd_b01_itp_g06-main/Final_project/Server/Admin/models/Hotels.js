const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Street: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Province: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hotels", PostSchema);
