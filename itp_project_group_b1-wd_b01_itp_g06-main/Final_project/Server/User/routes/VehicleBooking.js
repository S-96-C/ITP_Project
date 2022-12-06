const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Vehicles = require("../models/Vehicle");

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
    VegicleCategory: req.body.VegicleCategory,
    VehicleModel: req.body.VehicleModel,
    NoOfDays: req.body.NoOfDays,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Contactnumber: req.body.Contactnumber,
    Price: req.body.Price,
    Status: "Processing",
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
          VegicleCategory: req.body.VegicleCategory,
          VehicleModel: req.body.VehicleModel,
          NoOfDays: req.body.NoOfDays,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          Contactnumber: req.body.Contactnumber,
          Price: req.body.Price,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedVehicles);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
