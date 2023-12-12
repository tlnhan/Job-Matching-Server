const express = require("express");
const jobController = require("../../controller/job/controller");

const router = express.Router();

router.get("/getAll", jobController.getListJob);

module.exports = router;