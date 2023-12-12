const mongoose = require("mongoose");

const informationCompanySchema = new mongoose.Schema({
  Logo: String,
  Company: String,
  Country: String,
  Address: String,
  Industry: String,
  Employee: String,
  Foundation: String,
  Webpage: String,
  Information: String,
  History: String,
});

const Information_Company = mongoose.model(
  "information_companies",
  informationCompanySchema
);

module.exports = Information_Company;
