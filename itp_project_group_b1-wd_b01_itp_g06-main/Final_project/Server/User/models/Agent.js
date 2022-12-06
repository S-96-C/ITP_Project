const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  AgentFirstName: {
    type: String,
    required: true,
  },
  AgentLastName: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  EMail: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AgentBooking", PostSchema);
