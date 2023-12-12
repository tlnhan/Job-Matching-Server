const express = require("express");
const router = express.Router();

const accountRouter = require("./account/routes");
const accountEmployeeRouter = require("./employee/account/routes");
const jobRouter = require("./job/routes");


router.use("/account", accountRouter);
router.use("/employee/account", accountEmployeeRouter);
router.use("/job", jobRouter);

module.exports = router;
