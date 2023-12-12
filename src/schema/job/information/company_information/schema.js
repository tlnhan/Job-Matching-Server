const mongoose = require("mongoose");

const companyInformationJobPostingSchema = new mongoose.Schema({
  Position: String,
  Number: Number,
  Skill_and_Abilities: String,
  Specific_Duties: String,
  Duty: String,
});

const Company_Information_Job_Posting = mongoose.model(
  "detail_informations_job_companies",
  companyInformationJobPostingSchema
);

module.exports = Company_Information_Job_Posting;
