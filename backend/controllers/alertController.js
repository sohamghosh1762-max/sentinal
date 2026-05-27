exports.sendAlert = async (req, res) => {

  const alert = req.body;

  global.io.emit("live-alert", alert);

  res.json({
    success: true,
    alert
  });
};