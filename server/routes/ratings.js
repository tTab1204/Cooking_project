const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Rate } = require("../models/Rate");

router.post("/show-ratings", auth, (req, res) => {
  Rate.find({
    hostId: req.body.hostId,
  })
    .populate("userFrom")
    .exec((err, rateInfo) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, rateInfo });
    });
});

router.post("/add-ratings", auth, (req, res) => {
  const rate = new Rate(req.body);

  rate.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, doc });
  });
});

// 여기에서 한번 평점을 준 사람에게는 더 이상 주지 않는 로직을 짜야한다.

module.exports = router;
