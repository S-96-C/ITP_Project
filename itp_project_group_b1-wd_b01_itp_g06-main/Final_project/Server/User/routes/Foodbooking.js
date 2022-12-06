const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Food = require("../models/Food");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const foods = new Food({
    FoodName: req.body.FoodName,
    Quantity: req.body.Quantity,
    Price: req.body.Price,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    ContactNumber: req.body.ContactNumber,
    EMail: req.body.EMail,
    Status: "Processing",
  });
  try {
    const savedFoods = await foods.save();
    res.json(savedFoods);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post
router.get("/:foodID", async (req, res) => {
  try {
    const foods = await Food.findById(req.params.foodID);
    res.json(foods);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:foodID", async (req, res) => {
  try {
    const removedFoods = await Food.remove({ _id: req.params.foodID });
    res.json(removedFoods);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:foodID", async (req, res) => {
  try {
    const updatedFoods = await Food.updateOne(
      { _id: req.params.foodID },
      {
        $set: {
          FoodName: req.body.FoodName,
          Quantity: req.body.Quantity,
          Price: req.body.Price,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          ContactNumber: req.body.ContactNumber,
          EMail: req.body.EMail,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedFoods);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
