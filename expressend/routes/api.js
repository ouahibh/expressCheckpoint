const express = require("express");
const { Time } = require("../controllers/timeController");

const router = express.Router();

router.get("/home", Time);

module.exports = router;