const Job = require("../../schema/job/schema");

exports.getListJob = async (req, res) => {
  try {
    const result = await Job.find();

    return res.status(200).json({ result });
  } catch (error) {
    console.log("Error getting list jobs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
