const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Payments = require("../models/Payment");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const payments = await Payments.find();
    res.json(payments);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const payments = new Payments({
    Name: req.body.Name,
    ExpDate: req.body.ExpDate,
    CardNumber: req.body.CardNumber,
    CVV: req.body.CVV,
  });

  try {
    const savedPayments = await payments.save();
    res.json(savedPayments);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:paymentsId", async (req, res) => {
  try {
    const payments = await Payments.findById(req.params.paymentsId);
    res.json(payments);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:paymentsId", async (req, res) => {
  try {
    const removedPayments = await Payments.remove({
      _id: req.params.paymentsId,
    });
    res.json(removedPayments);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:paymentsId", async (req, res) => {
  try {
    const updatedPayments = await Payments.updateOne(
      { _id: req.params.paymentsId },
      {
        $set: {
          Name: req.body.Name,
          ExpDate: req.body.ExpDate,
          CardNumber: req.body.CardNumber,
          CVV: req.body.CVV,
        },
      }
    );
    res.json(updatedPayments);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
