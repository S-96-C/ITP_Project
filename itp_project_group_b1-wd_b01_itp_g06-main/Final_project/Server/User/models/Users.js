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
  UserName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", PostSchema);
