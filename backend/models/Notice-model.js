const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Notice = new Schema({
  notice_id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  description: { type: String },
  imgUrl: {
    type: String,
    data: Buffer
  },
  createdAt: {
    default: Date.now(),
    type: Date,
    auto: true,
  },
});

module.exports = mongoose.model("notices", Notice);
