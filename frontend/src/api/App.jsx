import { useEffect, useState } from "react";
import LiveAlerts from "./components/LiveAlerts";
import { getDisasters } from "./api/disasterService";
import socket from "./socket";

function App() {

  const [disasters, setDisasters] = useState([]);

  useEffect(() => {

    fetchDisasters();

    socket.on("new-disaster", (data) => {

      console.log("🚨 LIVE DISASTER:", data);

      setDisasters((prev) => [data, ...prev]);

    });

  }, []);

  const fetchDisasters = async () => {

    try {

      const res = await getDisasters();

      setDisasters(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          color: "red",
          fontSize: "50px"
        }}
      >
        🚨 SENTIENT SENTINEL
      </h1>

      <h2>LIVE DISASTER FEED</h2>

      {disasters.map((d) => (

        <div
          key={d._id}
          style={{
            border: "1px solid red",
            padding: "20px",
            marginTop: "20px",
            background: "#111"
          }}
        >
          <h2>{d.type}</h2>

          <p>📍 {d.location}</p>

          <p>⚠️ Severity: {d.severity}</p>

        </div>

      ))}

    </div>
  );
}

export default App;