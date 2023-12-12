const mongoose = require("mongoose");

const QandASchema = new mongoose.Schema({
  Category: String,
  Title: String,
  Date: Date,
  Inquiry: String,
  Status: Boolean,
});

const QandA = mongoose.model("q_and_a", QandASchema);

module.exports = QandA;
