const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");

router.post("/signup48235", signup);
router.post("/signin48235", signin);

module.exports = router;