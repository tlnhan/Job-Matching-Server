const mongoose = require("mongoose");

const otherJobPostingSchema = new mongoose.Schema({
  Job_Title: String,
  Summary: String,
  Salary: String,
  Job_Type: String,
  Period: String,
  Position: String,
  Start_Date: Date,
});

const Other_Job_Postings = mongoose.model(
  "other_job_postings",
  otherJobPostingSchema
);

module.exports = Other_Job_Postings;
