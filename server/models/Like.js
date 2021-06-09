const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviewId: {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
    hostId: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };
