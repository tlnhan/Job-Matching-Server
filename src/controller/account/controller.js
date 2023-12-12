const Account = require("../../schema/account/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signInAccount = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const account = await Account.findOne({ Email });
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

exports.signUpAccount = async (req, res) => {
  try {
    const { Email, Password, Status } = req.body;

    const existingAccount = await Account.findOne({ Email });
    if (existingAccount) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newAccount = new Account({
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
