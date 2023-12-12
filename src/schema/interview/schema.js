const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  Date_Time: Date,
  Time_Zone: Date,
  Room_ID: String,
  Title: String,
  Job_Title: String,
  Interviewer: String,
  Join: String,
});

const Interview = mongoose.model("interviews", interviewSchema);

module.exports = Interview;
