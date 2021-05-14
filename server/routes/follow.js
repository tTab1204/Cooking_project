const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Follow } = require("../models/Follow");

router.post("/followNumber", auth, (req, res) => {
  Follow.find({ hostId: req.body.hostId }).exec((err, hostInfo) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, followNumber: hostInfo.length });
  });
});

router.post("/followed", auth, (req, res) => {
  Follow.find({
    hostId: req.body.hostId,
    userFrom: req.body.userFrom,
  }).exec((err, hostInfo) => {
    if (err) return res.status(400).send(err);

    let result = false;

    if (hostInfo.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, followed: result });
  });
});

router.post("/show-host-followers", auth, (req, res) => {
  Follow.find({
    hostId: req.body.hostId,
  })
    .populate("userFrom")
    .exec((err, followers) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, followers });
    });
});

router.post("/removeFollow", auth, (req, res) => {
  Follow.findOneAndDelete({
    hostId: req.body.hostId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, doc });
  });
});

router.post("/addFollow", auth, (req, res) => {
  const follow = new Follow(req.body);

  follow.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, doc });
  });
});
module.exports = router;
