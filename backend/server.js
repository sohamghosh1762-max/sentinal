const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

global.io = io;

io.on("connection", (socket) => {
  console.log("⚡ User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User Disconnected");
  });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/disasters", require("./routes/disasterRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/drones", require("./routes/droneRoutes"));
app.use("/api/sos", require("./routes/sosRoutes"));
app.use("/api/alerts", require("./routes/alertRoutes"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});