const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/login.controller");

router.post("/login", LoginController.userCheck);
router.post("/register", LoginController.registerUser);
router.get("/refreshToken", LoginController.refreshToken);

module.exports = router;
