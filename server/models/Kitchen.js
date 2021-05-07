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
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    // 대표 이미지
    images: {
      type: Array,
      default: [],
    },

    // 주소
    address: {
      type: String,
      required: true,
      trim: true,
    },

    // 수용인원
    capacity: {
      type: Number,
      required: true,
    },
    // 대여 가격
    rent_price: {
      type: Number,
      required: true,
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
