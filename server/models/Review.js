const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hostId: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
    responseTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
