const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  Summary: String,
  Salary: String,
  Job_Type: String,
  Period: String,
  Position: String,
  Start_Date: Date,
  Status: String,
});

const Subscription = mongoose.model("subscriptions", subscriptionSchema);

module.exports = Subscription;
