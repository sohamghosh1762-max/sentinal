const Drone = require("../models/Drone");

exports.deployDrone = async (req, res) => {

  const drone = await Drone.create(req.body);

  global.io.emit("drone-update", drone);

  res.json(drone);
};