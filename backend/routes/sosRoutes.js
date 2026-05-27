const express = require("express");

const router = express.Router();

const {
  createSOS
} = require("../controllers/sosController");

router.post("/create", createSOS);

module.exports = router;