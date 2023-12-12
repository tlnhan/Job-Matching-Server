const express = require("express");
const jobController = require("../../controller/job/controller");

const router = express.Router();

router.get("/premium", jobController.getListJobPremium);
router.get("/recommendation", jobController.getListJobRecommendation);
router.get("/jobs", jobController.getListJobs);

module.exports = router;