const mongoose = require("mongoose");

const formJobPostingSchema = new mongoose.Schema({
  Title: String,
  Summary: String,
  Country: String,
  Language: String,
});

const Form_Job_Posting = mongoose.model(
  "form_job_postings",
  formJobPostingSchema
);

module.exports = Form_Job_Posting;
