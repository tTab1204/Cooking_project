const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    kitchen_experience: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Host = mongoose.model("Host", hostSchema);

module.exports = { Host };
