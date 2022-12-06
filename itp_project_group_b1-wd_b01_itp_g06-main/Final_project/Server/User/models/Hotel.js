const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const PostSchema = mongoose.Schema({
  HotelName: {
    type: String,
    required: true,
  },
  TotalMembers: {
    type: String,
    required: true,
  },
  NoOfChild: {
    type: String,
    required: true,
  },
  NoOfBed: {
    type: String,
    required: true,
  },
  AC: {
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
  Email: {
    type: String,
    required: true,
  },
  Contactnumber: {
    type: Number,
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

module.exports = mongoose.model("UserHotel", PostSchema);
