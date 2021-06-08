const express = require("express");
const router = express.Router();

const { Like } = require("../models/Like");
const { Dislike } = require("../models/Dislike");
const { auth } = require("../middleware/auth");

router.post("/number-of-likes", (req, res) => {
  const hostId = req.body.hostId;
  const userId = req.body.userId;

  Like.find({ hostId: hostId, userId: userId }).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, likes });
  });
});

router.post("/liked", auth, (req, res) => {
  Like.find({
    hostId: req.body.hostId,
    userId: req.body.userId,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);

    let result = false;

    if (doc.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, liked: result });
  });
});

router.post("/number-of-dislikes", (req, res) => {
  let variable = { hostId: req.body.hostId, userId: req.body.userId };
  Dislike.find({ variable }).exec((err, dislikes) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, dislikes });
  });
});

router.post("/disliked", auth, (req, res) => {
  Like.find({
    hostId: req.body.hostId,
    userId: req.body.userId,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);

    let result = false;

    if (doc.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, disliked: result });
  });
});

router.post("/up-like", (req, res) => {
  let variable = { hostId: req.body.hostId, userId: req.body.userId };
  const like = new Like(variable);

  like.save((err, likeResult) => {
    if (err) return res.json({ success: false, err });
    else {
      Dislike.findOneAndDelete(variable).exec((err, disLikeResult) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, disLikeResult });
      });
    }
  });
});

router.post("/up-dislike", (req, res) => {
  let variable = { hostId: req.body.hostId, userId: req.body.userId };
  const dislike = new Dislike(variable);

  dislike.save((err, disLikeResult) => {
    if (err) return res.json({ success: false, err });

    Like.findOneAndDelete(variable).exec((err, likeResult) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true, likeResult });
    });
  });
});

router.post("/un-like", (req, res) => {
  Like.findOneAndDelete({
    hostId: req.body.hostId,
    userId: req.body.userId,
  }).exec((err, result) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, result });
  });
});

router.post("/un-dislike", (req, res) => {
  let variable = { hostId: req.body.hostId, userId: req.body.userId };
  Dislike.findOneAndDelete(variable).exec((err, result) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, result });
  });
});

module.exports = router;
