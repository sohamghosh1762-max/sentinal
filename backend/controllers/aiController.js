exports.analyzeDisaster = async (req, res) => {

  const { disasterType } = req.body;

  const result = {
    disasterType,
    severity: "HIGH",
    rescuePriority: "CRITICAL",
    aiPrediction: "Massive spread expected",
    evacuation: "Immediate"
  };

  res.json(result);
};