const SOS = require("../models/SOS");

exports.createSOS = async (req, res) => {

  const sos = await SOS.create(req.body);

  global.io.emit("sos-request", sos);

  res.status(201).json(sos);
};