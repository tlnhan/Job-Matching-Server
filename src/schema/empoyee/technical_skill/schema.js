const mongoose = require("mongoose");

const technicalAndSkillSchema = new mongoose.Schema({
  Text: String,
});

const technicalAndSkill = mongoose.model(
  "technical_and_skills",
  technicalAndSkillSchema
);

module.exports = technicalAndSkill;
