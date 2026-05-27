import { useEffect, useState } from "react";
import socket from "../socket";

function LiveAlerts() {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    socket.on("new-disaster", (data) => {

      const newAlert = {
        id: Date.now(),
        message: `🚨 ${data.type} detected in ${data.location}`,
        severity: data.severity
      };

      setAlerts((prev) => [newAlert, ...prev]);

    });

  }, []);

  return (

    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        width: "350px",
        zIndex: 9999
      }}
    >

      {alerts.map((alert) => (

        <div
          key={alert.id}
          style={{
            background: "#1a0000",
            border: "1px solid red",
            padding: "15px",
            marginBottom: "15px",
            color: "white",
            boxShadow: "0 0 20px red",
            animation: "pulse 1s infinite"
          }}
        >

          <h3>{alert.message}</h3>

          <p>⚠️ {alert.severity}</p>

        </div>

      ))}

    </div>
  );
}

export default LiveAlerts;