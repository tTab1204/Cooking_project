const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Event } = require("../models/Event");

router.post("/followNumber", auth, (req, res) => {
    Follow.find({ hostId: req.body.hostId }).exec((err, hostInfo) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, followNumber: hostInfo.length });
    });




module.exports = router;