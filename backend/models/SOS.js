const mongoose = require("mongoose");

const sosSchema = new mongoose.Schema(
  {
    user: String,

    message: String,

    priority: String,

    location: String,

    status: {
      type: String,
      default: "PENDING"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("SOS", sosSchema);