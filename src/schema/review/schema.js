const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    Email: String,
    Content: String,
});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
