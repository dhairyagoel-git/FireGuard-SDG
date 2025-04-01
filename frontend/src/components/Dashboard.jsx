import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Dashboard() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentTip, setCurrentTip] = useState(0);
  const [alerts, setalerts] = useState([]);
  const [tips, settips] = useState([
    "🔥 Never leave an open flame unattended!",
    "🚪 Always keep emergency exits clear.",
    "🧯 Test your fire extinguisher monthly.",
    "⚡ Avoid overloading electrical outlets.",
    "📞 Have emergency numbers saved.",
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard")
      .then((response) => {
        const alert = response.data[0];
        setalerts(alert);
        

      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white p-5 rounded-lg w-full  ">
        {/* 🔥 Heading */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            🔥 Fire Monitoring & Emergency Status
          </h2>
          <Link
            to="/tips"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:opacity-90 transition"
          >
            📖 View Fire Safety Tips
          </Link>
        </div>

        {/* 📋 Additional Details */}
        <p className="text-gray-600 mt-2">
          Stay updated with real-time fire alerts, emergency response updates,
          and safety measures.
        </p>
      </div>
      <div className="mt-4 bg-yellow-100 text-yellow-900 text-center p-3 rounded-md font-medium border border-yellow-400 shadow-sm">
        {tips[currentTip]}
      </div>
      <div className="bg-white p-5 shadow-md rounded-lg w-full border border-gray-200">
        {/* Header */}
        <h2 className="text-lg font-bold flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-md">
          🔥 Fire Alerts, Emergency Response & Weather
        </h2>

        {/* Fire Alerts & Response List */}
        <div className="mt-4 space-y-5">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-300"
            >
              {/* Fire Alert Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Fire Icon */}
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                    🔥
                  </div>
                  {/* Alert Details */}
                  <div>
                    <p className="font-semibold text-gray-800">
                      {alert.location}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      {alert.time} •
                      <span
                        className={`text-white px-2 py-0.5 rounded-full text-xs ${alert.riskColor}`}
                      >
                        {alert.risk} Risk
                      </span>
                    </p>
                  </div>
                </div>
                {/* Response Status */}
                <span
                  className={`text-white px-3 py-1 rounded-md text-xs ${alert.statusColor}`}
                >
                  🚒 {alert.status}
                </span>
              </div>

              {/* Additional Fire Details */}
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  ⚠️ <strong>Severity:</strong> {alert.severity}
                </div>
                <div className="flex items-center gap-2">
                  🚒 <strong>Units Dispatched:</strong> {alert.unitsDispatched}
                </div>
                <div className="flex items-center gap-2">
                  ⏳ <strong>ETA to Control:</strong> {alert.estimatedTime}
                </div>
                <div className="flex items-center gap-2">
                  ☎️ <strong>Contact:</strong> {alert.contact}
                </div>
              </div>

              {/* Toggle Button */}
              <button
                className="mt-3 w-full bg-gray-50 text-black px-3 py-2 rounded-md text-sm flex justify-center items-center gap-2"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                {expandedIndex === index
                  ? "🔽 Hide Weather Details"
                  : "🔼 Show Weather Details"}
              </button>

              {/* Weather Details (Collapsible) */}
              {expandedIndex === index && (
                <div className="mt-3 bg-white p-3 rounded-md shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    🌤️ Weather Conditions
                  </h3>
                  <div className="grid grid-cols-3 gap-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      🌡️ <strong>Temp:</strong> {alert.temperature}
                    </div>
                    <div className="flex items-center gap-2">
                      💨 <strong>Wind:</strong> {alert.windSpeed}
                    </div>
                    <div className="flex items-center gap-2">
                      💧 <strong>Humidity:</strong> {alert.humidity}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
