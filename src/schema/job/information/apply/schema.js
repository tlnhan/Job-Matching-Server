const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
  Period: String,
  Date_of_Recruitment: Date,
  Documents: String,
  Process: String,
  HR_Office: String,
  Other: String,
});

const Apply = mongoose.model("applies", applySchema);

module.exports = Apply;
