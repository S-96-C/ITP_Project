const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  PackageName: {
    type: String,
    required: true,
  },
  PackagePrice: {
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
  Status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PackageBooking", PostSchema);
