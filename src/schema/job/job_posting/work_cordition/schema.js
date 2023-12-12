const mongoose = require("mongoose");

const workCoditionJobPostingSchema = new mongoose.Schema({
  Job_Type: String,
  Starting_Date: Date,
  Salary: String,
  Insurance: String,
  Hours: String,
  Accommodation: String,
  Visa: String,
  Vacation: String,
  Benefit: String,
});

const Work_Cordition_Job_Posting = mongoose.model(
  "work_condition_job_postings",
  workCoditionJobPostingSchema
);

module.exports = Work_Cordition_Job_Posting;
