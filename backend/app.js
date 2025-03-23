const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("app is running");
});

app.get("/mapspage", (req, res) => {
  const responsearray = [
    [
      { location: "Downtown, LA", status: "Active", risk: "High" },
      { location: "Brooklyn, NY", status: "Under Control", risk: "Medium" },
    ],
    [
      { name: "Central Fire Station", distance: "2.5 km" },
      { name: "Westside Fire Dept.", distance: "5.0 km" },
    ],
    [
      { name: "Fire Department", number: "101" },
      { name: "Emergency Services", number: "911" },
    ],
  ];
  res.send(responsearray);
});

app.get("/dashboard", (req, res) => {

  const responsearray = [
    [
      {
        location: "📍 Downtown, LA",
        time: "⏳ 10 mins ago",
        risk: "High",
        riskColor: "bg-red-500",
        status: "Dispatched",
        statusColor: "bg-yellow-500",
        severity: "Critical",
        unitsDispatched: 5,
        estimatedTime: "⏳ 30 mins",
        contact: "☎️ 911",
        temperature: "🔥 36°C",
        windSpeed: "💨 22 km/h",
        humidity: "💧 45%",
      },
      {
        location: "📍 Brooklyn, NY",
        time: "⏳ 30 mins ago",
        risk: "Medium",
        riskColor: "bg-yellow-500",
        status: "On Scene",
        statusColor: "bg-blue-500",
        severity: "Severe",
        unitsDispatched: 3,
        estimatedTime: "⏳ 20 mins",
        contact: "☎️ 911",
        temperature: "🔥 33°C",
        windSpeed: "💨 18 km/h",
        humidity: "💧 50%",
      },
      {
        location: "📍 Seattle, WA",
        time: "⏳ 1 hour ago",
        risk: "Low",
        riskColor: "bg-green-500",
        status: "Resolved",
        statusColor: "bg-green-500",
        severity: "Mild",
        unitsDispatched: 2,
        estimatedTime: "⏳ 10 mins",
        contact: "☎️ 911",
        temperature: "🔥 28°C",
        windSpeed: "💨 10 km/h",
        humidity: "💧 60%",
      },
    ],
    [
      "🔥 Never leave an open flame unattended!",
      "🚪 Always keep emergency exits clear.",
      "🧯 Test your fire extinguisher monthly.",
      "⚡ Avoid overloading electrical outlets.",
      "📞 Have emergency numbers saved.",
    ],
  ];
  res.send(responsearray);
});
app.get("/firestation",(req,res)=>{
  
})
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
