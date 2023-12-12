const mongoose = require("mongoose");

const workPreferenceSchema = new mongoose.Schema({
  Country: String,
  Position: String,
  Job_Type: String,
  Min_Salary: String,
  Immigrate: Boolean,
  Content: String,
});

const Work_Preference = mongoose.model(
  "work_preferences",
  workPreferenceSchema
);

module.exports = Work_Preference;
