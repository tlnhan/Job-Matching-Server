const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");

const accountEmployeeSchema = new mongoose.Schema({
  Email: String,
  Password: String,
  Status: String,
});

accountEmployeeSchema.pre("save", async function (next) {
    const accountEmployee = this;
    if (!accountEmployee.isModified("Password")) return next();

    try {
        const hashedPassword = await bcrypt.hash(accountEmployee.Password, 10);
        accountEmployee.Password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
})

const Account_Employee = mongoose.model("account_employees", accountEmployeeSchema);

module.exports = Account_Employee;
