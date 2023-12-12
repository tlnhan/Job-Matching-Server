const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");

const accountSchema = new mongoose.Schema({
  Email: String,
  Password: String,
  Status: String,
});

accountSchema.pre("save", async function (next) {
    const account = this;
    if (!account.isModified("Password")) return next();

    try {
        const hashedPassword = await bcrypt.hash(account.Password, 10);
        account.Password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
})

const Account = mongoose.model("accounts", accountSchema);

module.exports = Account;
