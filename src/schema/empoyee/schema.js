const mongoose = require("mongoose");

const profileEmployeeSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Phone: Number,
  Country: String,
  Street: String,
  City: String,
  Postal_Code: String,
  Level_Education: String,
  Major: String,
  School: String,
  Country_School: String,
  City_Education: String,
  Student: Boolean,
  Period_Start: Date,
  Period_Finish: Date,
  Position: String,
  Company_Work: String,
  Country_Work: String,
  In_Office: Boolean,
  Period_Start_Work: Date,
  Period_Finish_Work: Date,
  Description_Work: String,
  Photo: String,
});

const Profile_Employee = mongoose.model(
  "profile_employees",
  profileEmployeeSchema
);

module.exports = Profile_Employee;
