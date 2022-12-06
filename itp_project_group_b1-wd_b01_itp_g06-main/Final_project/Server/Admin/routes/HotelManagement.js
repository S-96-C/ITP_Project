const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Hotels = require("../models/Hotels");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotels.find();
    res.json(hotels);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data
router.post("/", async (req, res) => {
  const hotels = new Hotels({
    Name: req.body.Name,
    MobileNumber: req.body.MobileNumber,
    Address: req.body.Address,
    Street: req.body.Street,
    State: req.body.State,
    Province: req.body.Province,
    Country: req.body.Country,
    Price: req.body.Price,
    Image: req.body.Image,
  });

  try {
    const savedHotels = await hotels.save();
    res.json(savedHotels);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post
router.get("/:hotelsId", async (req, res) => {
  try {
    const hotels = await Hotels.findById(req.params.hotelsId);
    res.json(hotels);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:hotelsId", async (req, res) => {
  try {
    const removedHotels = await Hotels.remove({ _id: req.params.hotelsId });
    res.json(removedHotels);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post
router.patch("/:hotelsId", async (req, res) => {
  try {
    const updatedHotels = await Hotels.updateOne(
      { _id: req.params.hotelsId },
      {
        $set: {
          Name: req.body.Name,
          MobileNumber: req.body.MobileNumber,
          Address: req.body.Address,
          Street: req.body.Street,
          State: req.body.State,
          Province: req.body.Province,
          Country: req.body.Country,
          Price: req.body.Price,
          Image: req.body.Image,
        },
      }
    );
    res.json(updatedHotels);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
