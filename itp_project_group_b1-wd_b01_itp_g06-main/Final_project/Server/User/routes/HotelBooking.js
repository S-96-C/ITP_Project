const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Hotels = require("../models/Hotel");

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
    HotelName: req.body.HotelName,
    TotalMembers: req.body.TotalMembers,
    NoOfChild: req.body.NoOfChild,
    NoOfBed: req.body.NoOfBed,
    AC: req.body.AC,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Contactnumber: req.body.Contactnumber,
    Price: req.body.Price,
    Status: "Processing",
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
          HotelName: req.body.HotelName,
          TotalMembers: req.body.TotalMembers,
          NoOfChild: req.body.NoOfChild,
          NoOfBed: req.body.NoOfBed,
          AC: req.body.AC,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          Contactnumber: req.body.Contactnumber,
          Price: req.body.Price,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedHotels);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
