const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  Job_Title: String,
  Company: String,
  Salary: String,
  Job_Type: String,
  Position: String,
  Address: String,
  Detail: String,
});

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;
