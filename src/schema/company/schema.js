const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    CEO: String,
    Foundation: String,
    Industry: String,
    Employee: String,
    Address: String,
    Website: String,
    Information: String,
    History: String,
});

const Company = mongoose.model("companies", companySchema);

module.exports = Company;
