const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kitchenSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
    },
    email: {
      type: String,
    },

    shareOrRent: {
      type: String,
    },

    // 대표 이미지
    image: {
      type: Array,
      default: [],
    },

    // 주소
    address: {
      type: String,
    },

    // 간단한 설명
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Kitchen = mongoose.model("Kitchen", kitchenSchema);

module.exports = { Kitchen };
