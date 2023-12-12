const mongoose = require("mongoose");

const jobPostingSchema = new mongoose.Schema({
  Title: String,
  Save: Number,
  Apply: Number,
  Interview: Number,
  Hired: Number,
  Status: Boolean,
});

const Job_Posting = mongoose.model("job_postings", jobPostingSchema);

module.exports = Job_Posting;
