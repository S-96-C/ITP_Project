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
  MobileNumber: {
    type: Number,
    required: true,
  },
  Qualifications: {
    type: String,
    required: true,
  },
  Language: {
    type: String,
    required: true,
  },
  ProfileImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Manager", PostSchema);
