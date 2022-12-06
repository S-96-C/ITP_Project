const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Flights = require("../models/Flight");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const flights = await Flights.find();
    res.json(flights);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const flights = new Flights({
    AirlineName: req.body.AirlineName,
    FromLocation: req.body.FromLocation,
    ToLocation: req.body.ToLocation,
    NoOfSeats: req.body.NoOfSeats,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Contactnumber: req.body.Contactnumber,
    PassportNumber: req.body.PassportNumber,
    NicNumber: req.body.NicNumber,
    Address: req.body.Address,
    Price: req.body.Price,
    Status: "Processing",
  });

  try {
    const savedFlights = await flights.save();
    res.json(savedFlights);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:flightsId", async (req, res) => {
  try {
    const flights = await Flights.findById(req.params.flightsId);
    res.json(flights);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:flightsId", async (req, res) => {
  try {
    const removedFlights = await Flights.remove({ _id: req.params.flightsId });
    res.json(removedFlights);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:flightsId", async (req, res) => {
  try {
    const updatedFlights = await Flights.updateOne(
      { _id: req.params.flightsId },
      {
        $set: {
          AirlineName: req.body.AirlineName,
          FromLocation: req.body.FromLocation,
          ToLocation: req.body.ToLocation,
          NoOfSeats: req.body.NoOfSeats,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          Contactnumber: req.body.Contactnumber,
          PassportNumber: req.body.PassportNumber,
          NicNumber: req.body.NicNumber,
          Address: req.body.Address,
          Price: req.body.Price,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedFlights);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
