const express = require("express");

const router = express.Router();

const {
  analyzeDisaster
} = require("../controllers/aiController");

router.post("/analyze-disaster", analyzeDisaster);

module.exports = router;