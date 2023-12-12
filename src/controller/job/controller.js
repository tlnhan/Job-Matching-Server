const Job = require("../../schema/job/schema");

exports.getListJobPremium = async (req, res) => {
  try {
    const result = await Job.find({ Salary: { $gt: 2000 } });

    return res.status(200).json({ result });
  } catch (error) {
    console.log("Error getting list jobs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getListJobRecommendation = async (req, res) => {
  try {
    const { Country } = req.body;
    const Position =
      req.body && req.body.Position ? req.body.Position : Country;

    const result = await Job.find({ Position: Position });

    return res.status(200).json({ result });
  } catch (error) {
    console.log("Error getting list jobs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getListJobs = async (req, res) => {
  try {
    const result = await Job.find();

    return res.status(200).json({ result: result });
  } catch (error) {
    console.log("Error getting list jobs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
