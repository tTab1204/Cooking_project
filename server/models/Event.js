const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    state: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

// 나는 키워드 검색 시 name이 검색되도록 하겠다.
eventSchema.index({
  name: "text",
  //description: "text",
});

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
