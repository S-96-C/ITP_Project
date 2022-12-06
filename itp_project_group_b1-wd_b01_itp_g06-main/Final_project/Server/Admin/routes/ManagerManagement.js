const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Managers = require("../models/Manager");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const managers = await Managers.find();
    res.json(managers);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const managers = new Managers({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    MobileNumber: req.body.MobileNumber,
    Qualifications: req.body.Qualifications,
    Language: req.body.Language,
    ProfileImage: req.body.ProfileImage,
  });

  try {
    const savedManagers = await managers.save();
    res.json(savedManagers);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:managersId", async (req, res) => {
  try {
    const managers = await Managers.findById(req.params.managersId);
    res.json(managers);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:managersId", async (req, res) => {
  try {
    const removedManagers = await Managers.remove({
      _id: req.params.managersId,
    });
    res.json(removedManagers);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:managersId", async (req, res) => {
  try {
    const updatedManagers = await Managers.updateOne(
      { _id: req.params.managersId },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          MobileNumber: req.body.MobileNumber,
          Qualifications: req.body.Qualifications,
          Language: req.body.Language,
          ProfileImage: req.body.ProfileImage,
        },
      }
    );
    res.json(updatedManagers);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
