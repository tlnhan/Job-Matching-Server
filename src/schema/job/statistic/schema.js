const mongoose = require("mongoose");

const statisticSchema = new mongoose.Schema({
  Date: Date,
  Name: String,
  Country: String,
  Email: String,
  Phone: String,
  Chat: String,
  Interview: String,
  Refuse: String,
  Note: String,
});

const Statistic = mongoose.model("statistics", statisticSchema);

module.exports = Statistic;
