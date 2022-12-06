const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  FoodName: {
    type: String,
    required: true,
  },
  Quantity: {
    type: String,
    required: true,
  },
  Price: {
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

module.exports = mongoose.model("FoodBooking", PostSchema);
