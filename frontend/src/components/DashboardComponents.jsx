

import { useState ,useEffect} from "react";

export function FireAlertsWeatherResponseCard() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const alerts = [
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
    }
  ];

  return (
    <div className="bg-white p-5 shadow-md rounded-lg w-full border border-gray-200">
      {/* Header */}
      <h2 className="text-lg font-bold flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-md">
        🔥 Fire Alerts, Emergency Response & Weather
      </h2>

      {/* Fire Alerts & Response List */}
      <div className="mt-4 space-y-5">
        {alerts.map((alert, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-300">
            {/* Fire Alert Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {/* Fire Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                  🔥
                </div>
                {/* Alert Details */}
                <div>
                  <p className="font-semibold text-gray-800">{alert.location}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    {alert.time} • 
                    <span className={`text-white px-2 py-0.5 rounded-full text-xs ${alert.riskColor}`}>
                      {alert.risk} Risk
                    </span>
                  </p>
                </div>
              </div>
              {/* Response Status */}
              <span className={`text-white px-3 py-1 rounded-md text-xs ${alert.statusColor}`}>
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
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {expandedIndex === index ? "🔽 Hide Weather Details" : "🔼 Show Weather Details"}
            </button>

            {/* Weather Details (Collapsible) */}
            {expandedIndex === index && (
              <div className="mt-3 bg-white p-3 rounded-md shadow-md border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">🌤️ Weather Conditions</h3>
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
  );
}
export function FireSafetyAwarenessCard() {
  const tips = [
    "🔥 Never leave an open flame unattended!",
    "🚪 Always keep emergency exits clear.",
    "🧯 Test your fire extinguisher monthly.",
    "⚡ Avoid overloading electrical outlets.",
    "📞 Have emergency numbers saved.",
  ];
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 10000); // Rotate every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 text-black text-xl text-center p-3 rounded-md  shadow-sm">
        {tips[currentTip]}
      </div>
  );
}
