const mongoose = require("mongoose");

const accountCompanySchema = new mongoose.Schema({
  Email: String,
  Control: String,
  Name: String,
  Phone: String,
  Status: Boolean,
});

const Account_Company = mongoose.model(
  "account_companies",
  accountCompanySchema
);

module.exports = Account_Company;
