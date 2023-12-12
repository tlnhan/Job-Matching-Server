const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  Date: Date,
  Name: String,
  Phone: String,
  Title: String,
  Status: String,
  Chat: String,
  Interview: String,
  Note: String,
});

const Applicant = mongoose.model("applicants", applicantSchema);

module.exports = Applicant;
