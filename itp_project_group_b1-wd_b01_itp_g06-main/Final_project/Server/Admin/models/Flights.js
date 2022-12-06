const mongoose = require("mongoose");

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
  DepartureTime: {
    type: String,
    required: true,
  },
  ArrivalTime: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  TotalSeats: {
    type: Number,
    required: true,
  },
  SeatsPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Flights", PostSchema);
