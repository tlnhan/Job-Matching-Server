const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  Job_Title: String,
  Company: String,
  Salary: Number,
  Job_Type: String,
  Position: String,
  Address: String,
  Country: String,
});

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;
