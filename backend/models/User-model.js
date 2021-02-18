const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  fname: { type: String, required: true },
  lname: { type: String },
  dob: { type: Date },
  NIC: { type: String },
  gender: {type: String, enum: ["Male", "Female"]},
  address: { type: String },
  email: { type: String },
  occupation: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("user", User);
