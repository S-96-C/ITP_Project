const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  EventName: {
    type: String,
    required: true,
  },
  PerformanceName: {
    type: String,
    required: true,
  },
  StartingTime: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  EventBookingPrice: {
    type: Number,
    required: true,
  },
  Imge: {
    type: String,
  },
  ConverPhoto: {
    type: String,
  },
});

module.exports = mongoose.model("Events", PostSchema);
