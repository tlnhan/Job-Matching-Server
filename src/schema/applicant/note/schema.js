const mongoose = require("mongoose");

const noteApplicantSchema = new mongoose.Schema({
  Status: String,
  Date: Date,
  Content: String,
});

const Note_Applicant = mongoose.model("note_applicants", noteApplicantSchema);

module.exports = Note_Applicant;
