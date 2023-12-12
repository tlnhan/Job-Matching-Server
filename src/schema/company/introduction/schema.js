const mongoose = require("mongoose");

const introductionSchema = new mongoose.Schema({
    CEO: String,
    Foundation: String,
    Industry: String,
    Employee: String,
    Address: String,
    Website: String,
    Information: String,
    History: String,
});

const Introduction = mongoose.model("introductions", introductionSchema);

module.exports = Introduction;
