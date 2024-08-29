const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    title: String,
    thumbnail: String,
    deleted: Boolean
});
const Img = mongoose.model("Image", imageSchema, "images");
module.exports = Img;