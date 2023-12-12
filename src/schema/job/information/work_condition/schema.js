const mongoose = require("mongoose");

const workConditionSchema = new mongoose.Schema({
    Job_Type: String,
    Starting_Date: Date,
    Salary: String,
    Insuance: String,
    Hours: String,
    Accommodation: String,
    Visa: String,
    Vacation: String,
    Benefit: String,
});

const Work_Condition = mongoose.model("work_conditions", workConditionSchema);

module.exports = Work_Condition;
