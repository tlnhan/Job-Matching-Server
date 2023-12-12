const mongoose = require("mongoose");

const jobInformationSchema = new mongoose.Schema({
    Company: String,
    Job_Title: String,
    Summary: String,
    Address: String,
    Description: String,
    Salary: String,
    Job_Type: String,
    Position: String,
    Period: String,
    Start_Date: Date
});

const Job = mongoose.model("job_informations", jobInformationSchema);

module.exports = Job;
