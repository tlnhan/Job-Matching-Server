const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("MongoDB connected.");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};

module.exports = connectDatabase;
