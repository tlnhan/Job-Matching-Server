const mongoose = require("mongoose");

const controlCompanySchema = new mongoose.Schema({
    User: String,
    Status: String,
    Level: String,
    Position: String,
    Status: String,
});

const Control_Company = mongoose.model("control_companies", controlCompanySchema);

module.exports = Control_Company;
