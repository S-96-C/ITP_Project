const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Agent = require("../models/Agent");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const agents = new Agent({
    AgentFirstName: req.body.AgentFirstName,
    AgentLastName: req.body.AgentLastName,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    ContactNumber: req.body.ContactNumber,
    EMail: req.body.EMail,
    Status: "Processing",
  });
  try {
    const savedAgent = await agents.save();
    res.json(savedAgent);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post
router.get("/:agentsID", async (req, res) => {
  try {
    const agents = await Agent.findById(req.params.agentsID);
    res.json(agents);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:agentsID", async (req, res) => {
  try {
    const removedAgents = await Agent.remove({ _id: req.params.agentsID });
    res.json(removedAgents);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:agentsID", async (req, res) => {
  try {
    const updatedAgents = await Agent.updateOne(
      { _id: req.params.agentsID },
      {
        $set: {
          AgentFirstName: req.body.AgentFirstName,
          AgentLastName: req.body.AgentLastName,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          ContactNumber: req.body.ContactNumber,
          EMail: req.body.EMail,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedAgents);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
