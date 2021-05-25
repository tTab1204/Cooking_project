const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rateSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    hostId: {
      type: String,
    },
    ratings: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Rate = mongoose.model("Rate", rateSchema);

module.exports = { Rate };
