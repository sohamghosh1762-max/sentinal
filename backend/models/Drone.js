const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema(
  {
    droneId: String,

    battery: Number,

    status: String,

    liveLocation: {
      lat: Number,
      lng: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Drone", droneSchema);