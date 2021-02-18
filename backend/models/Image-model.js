const mongoose = require("mongoose");
const Image = mongoose.Schema({
  imageName: [{ url: String }],
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
