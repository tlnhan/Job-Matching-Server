const mongoose = require("mongoose");

const languageEmployeeSchema = new mongoose.Schema({
  Office_Test: String,
  Score: Number,
});

const Language_Employee = mongoose.model(
  "language_employees",
  languageEmployeeSchema
);

module.exports = Language_Employee;
