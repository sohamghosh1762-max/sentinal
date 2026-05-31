# 🚨 Sentient Sentinel

### AI-Powered Emergency Rescue & Disaster Intelligence System

Sentient Sentinel is an advanced AI-driven disaster monitoring and emergency response platform designed to detect, analyze, and manage critical disaster events in real time. The system combines artificial intelligence, live alerting, geospatial intelligence, drone coordination, and emergency communication services to support rapid disaster response and decision-making.

---

## 📖 Project Overview

Natural disasters such as wildfires, floods, earthquakes, and severe storms cause significant damage to infrastructure, ecosystems, and human lives. Traditional emergency management systems often suffer from delayed information flow and limited situational awareness.

Sentient Sentinel addresses these challenges by providing a centralized disaster intelligence platform capable of:

- Monitoring active disasters
- Generating real-time alerts
- Supporting emergency response operations
- Coordinating rescue resources
- Visualizing disaster information through an interactive dashboard

---

## 🎯 Key Features

### 🔥 Disaster Detection & Monitoring
- Wildfire tracking
- Flood monitoring
- Earthquake reporting
- Storm and cyclone surveillance
- Multi-disaster intelligence dashboard

### 🚨 Emergency Alert System
- Real-time alert generation
- Emergency notification broadcasting
- SOS reporting and management
- Live incident tracking

### 🚁 AI Rescue Coordination
- Drone deployment monitoring
- Rescue mission management
- Emergency resource allocation
- Response unit tracking

### 🛰️ Geospatial Intelligence
- Disaster location mapping
- Risk zone identification
- Satellite monitoring integration
- Geographic incident visualization

### ⚡ Real-Time Communication
- Socket.IO-based live updates
- Instant alert synchronization
- Live status monitoring
- Dynamic dashboard refresh

---

## 🏗️ System Architecture

```text
Disaster Events
       │
       ▼
AI Analysis Engine
       │
 ┌─────┴─────┐
 ▼           ▼
MongoDB   Socket.IO
Database  Real-Time Layer
       │
       ▼
Emergency Dashboard
       │
       ▼
Rescue Operations & Alerts
```

---

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose

### Cloud & Communication
- Cloudinary
- Twilio
- Nodemailer
- Redis

### Development Tools
- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```text
sentient-sentinel/
│
├── frontend/
│   ├── src/
│   ├── assets/
│   ├── public/
│   ├── login.html
│   └── index.html
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/sentient-sentinel.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token

EMAIL_USER=your_email
EMAIL_PASS=your_password
```

---

## 🔗 API Endpoints

### Disaster Management

| Method | Endpoint | Description |
|----------|------------|------------|
| POST | /api/disasters/create | Create disaster |
| GET | /api/disasters | Fetch disasters |
| GET | /api/disasters/:id | Get disaster details |

### SOS Management

| Method | Endpoint | Description |
|----------|------------|------------|
| POST | /api/sos/create | Create SOS request |
| GET | /api/sos | Get SOS reports |

### Alerts

| Method | Endpoint | Description |
|----------|------------|------------|
| GET | /api/alerts | Fetch active alerts |
| POST | /api/alerts/create | Generate alert |

---

## 📸 Screenshots

Add screenshots here:

### Login Dashboard

```md
![Login Dashboard](screenshots/login-dashboard.png)
```

### Disaster Monitoring Dashboard

```md
![Disaster Dashboard](screenshots/disaster-dashboard.png)
```

### Emergency Operations Center

```md
![Operations Center](screenshots/operations-center.png)
```

---

## 🔮 Future Enhancements

- AI-powered disaster prediction
- Satellite image analysis
- Autonomous rescue drone integration
- Mobile emergency response application
- Voice-based emergency assistance
- Predictive evacuation planning
- Machine learning risk assessment
- Real-time weather intelligence

---


## ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 🚀 Contribute improvements
- 📢 Share with others

---

## 🌍 Vision

> "Empowering emergency response through artificial intelligence, real-time intelligence, and rapid disaster coordination."

---

### 🚨 SENTIENT SENTINEL

**AI-Powered Emergency Rescue & Disaster Intelligence System**