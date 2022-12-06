const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Event = require("../models/Event");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const event = await Event.find();
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const event = new Event({
    EventName: req.body.EventName,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Contactnumber: req.body.Contactnumber,
    Status: "Processing",
  });

  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:eventId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:eventId", async (req, res) => {
  try {
    const removedEvent = await Event.remove({ _id: req.params.eventId });
    res.json(removedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:eventId", async (req, res) => {
  try {
    const updatedEvent = await Event.updateOne(
      { _id: req.params.eventId },
      {
        $set: {
          EventName: req.body.EventName,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          Contactnumber: req.body.Contactnumber,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
