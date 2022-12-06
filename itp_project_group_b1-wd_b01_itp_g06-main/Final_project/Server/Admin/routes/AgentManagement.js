const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Agents = require("../models/Agents");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const agents = await Agents.find();
    res.json(agents);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data
router.post("/", async (req, res) => {
  const agents = new Agents({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    ContactNumber: req.body.ContactNumber,
    Language: req.body.Language,
    Description: req.body.Description,
    ProfileImage: req.body.ProfileImage,
  });

  try {
    const savedAgents = await agents.save();
    res.json(savedAgents);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:agentsId", async (req, res) => {
  try {
    const agents = await Agents.findById(req.params.agentsId);
    res.json(agents);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:agentsId", async (req, res) => {
  try {
    const removedAgents = await Agents.remove({ _id: req.params.agentsId });
    res.json(removedAgents);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:agentsId", async (req, res) => {
  try {
    const updatedAgents = await Agents.updateOne(
      { _id: req.params.agentsId },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          ContactNumber: req.body.ContactNumber,
          Language: req.body.Language,
          Description: req.body.Description,
          ProfileImage: req.body.ProfileImage,
        },
      }
    );
    res.json(updatedAgents);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
