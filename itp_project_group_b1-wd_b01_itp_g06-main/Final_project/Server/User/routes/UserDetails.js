const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Users = require("../models/Users");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const users = new Users({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    UserName: req.body.UserName,
    Email: req.body.Email,
    ContactNumber: req.body.ContactNumber,
    Address: req.body.Address,
    Country: req.body.Country,
  });

  try {
    const savedUsers = await users.save();
    res.json(savedUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:usersId", async (req, res) => {
  try {
    const users = await Users.findById(req.params.usersId);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:usersId", async (req, res) => {
  try {
    const removedUsers = await Users.remove({ _id: req.params.usersId });
    res.json(removedUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:usersId", async (req, res) => {
  try {
    const updatedUsers = await Users.updateOne(
      { _id: req.params.usersId },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          UserName: req.body.UserName,
          Email: req.body.Email,
          ContactNumber: req.body.ContactNumber,
          Address: req.body.Address,
          Country: req.body.Country,
        },
      }
    );
    res.json(updatedUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
