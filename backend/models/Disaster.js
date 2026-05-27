const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema(
  {
    type: String,

    severity: String,

    location: String,

    status: {
      type: String,
      default: "ACTIVE"
    },

    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Disaster", disasterSchema);