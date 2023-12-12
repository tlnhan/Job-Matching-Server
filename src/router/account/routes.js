const express = require("express");
const accountController = require("../../controller/account/controller");

const router = express.Router();

router.post("/signin", accountController.signInAccount);
router.post("/signup", accountController.signUpAccount);

module.exports = router;