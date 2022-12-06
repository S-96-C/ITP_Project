const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  streetnumber: {
    type: String,
    required: true,
  },
  streetname: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AddressDetail", PostSchema);
