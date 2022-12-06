const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const PostSchema = mongoose.Schema({
  AirlineName: {
    type: String,
    required: true,
  },
  FromLocation: {
    type: String,
    required: true,
  },
  ToLocation: {
    type: String,
    required: true,
  },
  NoOfSeats: {
    type: Number,
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
  Email: {
    type: String,
    required: true,
  },
  Contactnumber: {
    type: Number,
    required: true,
  },
  PassportNumber: {
    type: String,
    required: true,
  },
  NicNumber: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserFlights", PostSchema);
