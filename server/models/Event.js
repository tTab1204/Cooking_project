const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },

    date: {
      type: String,
    },
    day: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
