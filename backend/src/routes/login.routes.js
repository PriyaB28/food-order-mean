const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/login.controller");

router.post("/login", LoginController.userCheck);
router.post("/register", LoginController.registerUser);

module.exports = router;
