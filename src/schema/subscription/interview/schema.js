const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  Company: String,
  Date: Date,
  Time: Date,
  Title: String,
  Interview: String,
});

const Interview = mongoose.model("interviews", interviewSchema);

module.exports = Interview;
