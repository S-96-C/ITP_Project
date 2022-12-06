const express = require("express");
const router = express.Router();
const Vehicles = require("../models/Vehicles");
const req = require("express/lib/request");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicles.find();
    res.json(vehicles);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const vehicles = new Vehicles({
    category: req.body.category,
    Model: req.body.Model,
    CarNumber: req.body.CarNumber,
    colour: req.body.colour,
    Driver: req.body.Driver,
    Seat: req.body.Seat,
    ChildSeat: req.body.ChildSeat,
    Gps: req.body.Gps,
    Price: req.body.Price,
    Description: req.body.Description,
    Image: req.body.Image,
  });

  try {
    const savedVehicles = await vehicles.save();
    res.json(savedVehicles);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:vehiclesId", async (req, res) => {
  try {
    const vehicles = await Vehicles.findById(req.params.vehiclesId);
    res.json(vehicles);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:vehiclesId", async (req, res) => {
  try {
    const removedVehicles = await Vehicles.remove({
      _id: req.params.vehiclesId,
    });
    res.json(removedVehicles);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:vehiclesId", async (req, res) => {
  try {
    const updatedVehicles = await Vehicles.updateOne(
      { _id: req.params.vehiclesId },
      {
        $set: {
          category: req.body.category,
          Model: req.body.Model,
          CarNumber: req.body.CarNumber,
          colour: req.body.colour,
          Driver: req.body.Driver,
          Seat: req.body.Seat,
          ChildSeat: req.body.ChildSeat,
          Gps: req.body.Gps,
          Price: req.body.Price,
          Description: req.body.Description,
          Image: req.body.Image,
        },
      }
    );
    res.json(updatedVehicles);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
