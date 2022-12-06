const express = require("express");
const Foods = require("../models/Foods");
const router = express.Router();

//Get all Data
router.get("/", async (req, res) => {
  try {
    const foods = await Foods.find();
    res.json(foods);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const foods = new Foods({
    Name: req.body.Name,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    Price: req.body.Price,
    FoodImage: req.body.FoodImage,
  });

  try {
    const savedFoods = await foods.save();
    res.json(savedFoods);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:foodsId", async (req, res) => {
  try {
    const foods = await Foods.findById(req.params.foodsId);
    res.json(foods);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:foodsId", async (req, res) => {
  try {
    const removedFoods = await Foods.remove({ _id: req.params.foodsId });
    res.json(removedFoods);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:foodsId", async (req, res) => {
  try {
    const updatedFoods = await Foods.updateOne(
      { _id: req.params.foodsId },
      {
        $set: {
          Name: req.body.Name,
          Description: req.body.Description,
          Quantity: req.body.Quantity,
          Price: req.body.Price,
          FoodImage: req.body.FoodImage,
        },
      }
    );
    res.json(updatedFoods);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
