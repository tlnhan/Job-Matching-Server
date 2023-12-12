const express = require("express");
const accountEmployeeController = require("../../../controller/employee/account/controller");

const router = express.Router();

router.post("/signin", accountEmployeeController.signInAccountEmployee);
router.post("/signup", accountEmployeeController.signUpAccountEmployee);

module.exports = router;