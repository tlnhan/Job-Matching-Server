const mongoose = require("mongoose");

const detailInformationJobPostingSchema = new mongoose.Schema({
  Position: String,
  Number: Number,
  Skill_and_Abilities: String,
  Specific_Duties: String,
  Duty: String,
});

const Detail_Information_Job_Posting = mongoose.model(
  "detail_informations_job_posting",
  detailInformationJobPostingSchema
);

module.exports = Detail_Information_Job_Posting;
