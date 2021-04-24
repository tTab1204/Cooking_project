const express = require("express");
const router = express.Router();
const { Host } = require("../models/Host");

// ------------------- Become a Host ---------------------- //
router.post("/become-a-host", (req, res) => {
  const host = new Host(req.body);

  host.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

module.exports = router;
