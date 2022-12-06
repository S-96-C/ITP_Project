const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  VegicleCategory: {
    type: String,
    required: true,
  },
  VehicleModel: {
    type: String,
    required: true,
  },
  NoOfDays: {
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

module.exports = mongoose.model("UserVehicles", PostSchema);
