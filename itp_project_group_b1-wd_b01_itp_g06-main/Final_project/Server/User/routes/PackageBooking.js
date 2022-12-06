const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Package = require("../models/Package");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const package = new Package({
    PackageName: req.body.PackageName,
    PackagePrice: req.body.PackagePrice,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Contactnumber: req.body.Contactnumber,
    Status: "Processing",
  });
  try {
    const savedPackage = await package.save();
    res.json(savedPackage);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post
router.get("/:packageID", async (req, res) => {
  try {
    const package = await Package.findById(req.params.packageID);
    res.json(package);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:packageID", async (req, res) => {
  try {
    const removedPackage = await Package.remove({ _id: req.params.packageID });
    res.json(removedPackage);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:packageID", async (req, res) => {
  try {
    const updatedPackage = await Package.updateOne(
      { _id: req.params.packageID },
      {
        $set: {
          PackageName: req.body.PackageName,
          PackagePrice: req.body.PackagePrice,
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          EMail: req.body.EMail,
          Contactnumber: req.body.Contactnumber,
          Status: req.body.Status,
        },
      }
    );
    res.json(updatedPackage);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
