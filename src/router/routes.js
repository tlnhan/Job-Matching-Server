const express = require("express");
const router = express.Router();

const accountRouter = require("./account/routes");
const jobRouter = require("./job/routes");

router.use("/account", accountRouter);
router.use("/job", jobRouter);

module.exports = router;
