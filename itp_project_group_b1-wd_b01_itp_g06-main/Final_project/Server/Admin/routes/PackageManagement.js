const express = require("express");
const Packages = require("../models/Packages");

const router = express.Router();
const Post = require("../models/Packages");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const packages = await Packages.find();
    res.json(packages);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const packages = new Packages({
    name: req.body.name,
    price: req.body.price,
    includes: req.body.includes,
    description: req.body.description,
    MasterChefFoodsPrice: req.body.MasterChefFoodsPrice,
    HighLuxaryVechilePrice: req.body.HighLuxaryVechilePrice,
    PerExtraOneDayPrice: req.body.PerExtraOneDayPrice,
    RentCameraPrice: req.body.RentCameraPrice,
    PerExtraBedPrice: req.body.PerExtraBedPrice,
    Image: req.body.Image,
  });

  try {
    const savedPackages = await packages.save();
    res.json(savedPackages);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:packagesId", async (req, res) => {
  try {
    const packages = await Packages.findById(req.params.packagesId);
    res.json(packages);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:packagesId", async (req, res) => {
  try {
    const removedPackages = await Packages.remove({
      _id: req.params.packagesId,
    });
    res.json(removedPackages);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:packagesId", async (req, res) => {
  try {
    const updatedPackages = await Packages.updateOne(
      { _id: req.params.packagesId },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          includes: req.body.includes,
          description: req.body.description,
          MasterChefFoodsPrice: req.body.MasterChefFoodsPrice,
          HighLuxaryVechilePrice: req.body.HighLuxaryVechilePrice,
          PerExtraOneDayPrice: req.body.PerExtraOneDayPrice,
          RentCameraPrice: req.body.RentCameraPrice,
          PerExtraBedPrice: req.body.PerExtraBedPrice,
          Image: req.body.Image,
        },
      }
    );
    res.json(updatedPackages);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
