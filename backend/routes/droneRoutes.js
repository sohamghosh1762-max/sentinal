const express = require("express");

const router = express.Router();

const {
  deployDrone
} = require("../controllers/droneController");

router.post("/deploy", deployDrone);

module.exports = router;