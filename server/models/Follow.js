const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    hostId: {
      type: String,
    },
    hostName: {
      type: String,
    },
  },
  { timestamps: true },
);

const Follow = mongoose.model('Follow', followSchema);

module.exports = { Follow };
