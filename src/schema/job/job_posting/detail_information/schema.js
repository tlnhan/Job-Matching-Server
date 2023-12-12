const mongoose = require("mongoose");

const detailInformationJobPostingSchema = new mongoose.Schema({
  No_Posting: String,
  Position: String,
  Number: Number,
  Skill_and_Abilities: String,
  Specific_Duties: String,
  Duty: String,
});

const Detail_Information_Job_Posting = mongoose.model(
  "detail_information_job_postings",
  detailInformationJobPostingSchema
);

module.exports = Detail_Information_Job_Posting;
