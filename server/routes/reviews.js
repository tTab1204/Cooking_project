const express = require('express');
const router = express.Router();

const { Review } = require('../models/Review');

router.post('/save-review', (req, res) => {
  const review = new Review(req.body);
  review.save((err, review) => {
    if (err) return res.status(400).json({ success: false, err });

    Review.find({ _id: review._id })
      .populate('writer')
      .exec((err, review) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, review });
      });
  });
});

router.post('/show-reviews', (req, res) => {
  Review.find({ hostId: req.body.hostId })
    .populate('writer')
    .exec((err, reviews) => {
      if (err) res.status(400).send(err);
      res.status(200).json({ success: true, reviews });
    });
});

router.post('/correct-review', (req, res) => {
  Review.findOneAndUpdate(
    { _id: req.body.reviewId },
    { $set: { content: req.body.content } },
    { new: true },
    (err, review) => {
      if (err) return res.json({ success: false, err });

      Review.find({ hostId: req.body.hostId })
        .populate('writer')
        .exec((err, reviews) => {
          if (err) res.status(400).send(err);
          res.status(200).json({ success: true, reviews });
        });
    },
  );
});

router.post('/delete-review', (req, res) => {
  // 먼저 내가 지우려고 하는 댓글 지워주기

  Review.findOneAndDelete({
    _id: req.body.reviewId,
  })
    .populate('writer')
    .exec((err, deletedId) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, deletedId });
    });
});

module.exports = router;
