const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Feedbacks = require("../models/FeedBack");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedbacks.find();
    res.json(feedbacks);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const feedbacks = new Feedbacks({
    Name: req.body.Name,
    Email: req.body.Email,
    Message: req.body.Message,
  });

  try {
    const savedFeedbacks = await feedbacks.save();
    res.json(savedFeedbacks);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
