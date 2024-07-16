const express = require("express");
const control = require("../controllers/User.controller");

const router = express.Router();

router.post("/login", control.login);
router.post("/register", control.Register);

module.exports = router;
