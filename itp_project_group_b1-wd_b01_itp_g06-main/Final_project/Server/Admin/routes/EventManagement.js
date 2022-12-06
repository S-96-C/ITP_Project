const express = require("express");
const req = require("express/lib/request");
const Events = require("../models/Events");
const router = express.Router();

//Get all Data
router.get("/", async (req, res) => {
  try {
    const events = await Events.find();
    res.json(events);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data
router.post("/", async (req, res) => {
  const events = new Events({
    EventName: req.body.EventName,
    PerformanceName: req.body.PerformanceName,
    StartingTime: req.body.StartingTime,
    Description: req.body.Description,
    Destination: req.body.Destination,
    EventBookingPrice: req.body.EventBookingPrice,
    Imge: req.body.Imge,
    ConverPhoto: req.body.ConverPhoto,
  });

  try {
    const savedEvents = await events.save();
    res.json(savedEvents);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:eventsId", async (req, res) => {
  try {
    const events = await Events.findById(req.params.eventsId);
    res.json(events);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:eventsId", async (req, res) => {
  try {
    const removedEvents = await Events.remove({ _id: req.params.eventsId });
    res.json(removedEvents);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:eventsId", async (req, res) => {
  try {
    const updatedEvents = await Events.updateOne(
      { _id: req.params.eventsId },
      {
        $set: {
          EventName: req.body.EventName,
          PerformanceName: req.body.PerformanceName,
          StartingTime: req.body.StartingTime,
          Description: req.body.Description,
          Destination: req.body.Destination,
          EventBookingPrice: req.body.EventBookingPrice,
          Imge: req.body.Imge,
          ConverPhoto: req.body.ConverPhoto,
        },
      }
    );
    res.json(updatedEvents);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
