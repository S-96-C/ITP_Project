const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: Number,
    required: true,
  },
  Language: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  ProfileImage: {
    type: String,
  },
});

module.exports = mongoose.model("Agents", PostSchema);
