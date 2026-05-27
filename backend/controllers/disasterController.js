const Disaster = require("../models/Disaster");

exports.createDisaster = async (req, res) => {

  const disaster = await Disaster.create(req.body);

  global.io.emit("new-disaster", disaster);

  res.status(201).json(disaster);
};

exports.getDisasters = async (req, res) => {

  const disasters = await Disaster.find();

  res.json(disasters);
};