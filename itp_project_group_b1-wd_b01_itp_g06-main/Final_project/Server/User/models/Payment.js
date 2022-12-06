const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ExpDate: {
    type: Number,
    required: true,
  },
  CardNumber: {
    type: Number,
    required: true,
  },
  CVV: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Payment", PostSchema);
