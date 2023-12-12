const Account_Employee = require("../../../schema/employee/account/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signInAccountEmployee = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const account = await Account_Employee.findOne({ Email });
    if (!account || !bcrypt.compare(Password, account.Password)) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ userId: account._id }, process.env.SECRET_KEY, {
      expiresIn: "8h",
    });

    return res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    console.log("Error sign in account: ", error);
  }
};

exports.signUpAccountEmployee = async (req, res) => {
  try {
    const { Email, Password, Status } = req.body;

    const existingAccount = await Account_Employee.findOne({ Email });
    if (existingAccount) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newAccount = new Account_Employee({
      Email,
      Password: hashedPassword,
      Status: Status,
    });

    await newAccount.save();

    const token = jwt.sign({ userId: newAccount._id }, process.env.SECRET_KEY, {
      expiresIn: "8h",
    });

    return res.status(201).json({ message: "Signup successful.", token });
  } catch (error) {
    console.log("Error signing up account: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
