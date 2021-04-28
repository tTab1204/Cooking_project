const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // follow: {
    //   type: Number,
    //   default: 0,
    // },
    name: {
      type: String,
      // 문자열 사이에 공백을 제거하는 mongoDB의 기능
      trim: true,
    },
    email: {
      type: String,
    },
    kitchen_experience: {
      type: String,
    },

    // 음식 종류(ex: 한식, 양식, 일식 등)
    food_nation: {
      type: String,
    },

    // 대표 이미지
    image: {
      type: Array,
      default: [],
    },

    // 간단한 설명
    description: {
      type: String,
    },

    // 계좌번호
    deposit: {
      type: String,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

const Host = mongoose.model("Host", hostSchema);

module.exports = { Host };
