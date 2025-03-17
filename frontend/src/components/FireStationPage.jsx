import React from "react";
import { useEffect, useState } from "react";
export function FireStation() {
  const stationName = "Downtown LA";

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      location: "Downtown, LA",
      type: "Structural Fire",
      status: "In Progress",
      firefighters: [
        { name: "John Doe", role: "Squad Leader" },
        { name: "Sarah Lee", role: "Firefighter" },
        { name: "Michael Johnson", role: "Driver" },
      ],
      equipment: [
        { name: "Fire Truck", quantity: 1, icon: "🚒" },
        { name: "Hose", quantity: 3, icon: "🚰" },
        { name: "Protective Gear", quantity: 5, icon: "🦺" },
      ],
      reportedTime: "2:45 PM",
      estimatedCompletion: "4:30 PM",
      severity: "High",
      civiliansAffected: 20,
      emergencyContacts: [
        { name: "Hospital ER", contact: "+1 800-555-1234" },
        { name: "Police Dept.", contact: "+1 800-555-5678" },
      ],
      additionalNotes:
        "Structure is unstable. Nearby buildings at risk. Additional water supply requested.",
    },
    {
      id: 2,
      location: "Westside Apartments",
      type: "Electrical Fire",
      status: "Containment Phase",
      firefighters: [
        { name: "Emily Carter", role: "Team Lead" },
        { name: "Robert Brown", role: "Firefighter" },
      ],
      equipment: [
        { name: "Extinguisher", quantity: 2, icon: "🧯" },
        { name: "Thermal Camera", quantity: 1, icon: "📷" },
      ],
      reportedTime: "3:10 PM",
      estimatedCompletion: "5:00 PM",
      severity: "Medium",
      civiliansAffected: 10,
      emergencyContacts: [
        { name: "Building Management", contact: "+1 800-555-9876" },
      ],
      additionalNotes:
        "Power supply has been shut off. Smoke still present on floors 3-5.",
    },
    {
      id: 3,
      location: "Eastwood Warehouse",
      type: "Chemical Fire",
      status: "Evacuation Ongoing",
      firefighters: [
        { name: "James Smith", role: "Hazmat Specialist" },
        { name: "Laura Williams", role: "Firefighter" },
      ],
      equipment: [
        { name: "Hazmat Suit", quantity: 2, icon: "🧪" },
        { name: "Gas Mask", quantity: 4, icon: "🥽" },
      ],
      reportedTime: "1:30 PM",
      estimatedCompletion: "5:30 PM",
      severity: "High",
      civiliansAffected: 5,
      emergencyContacts: [
        { name: "Chemical Control", contact: "+1 800-555-4444" },
        { name: "Environmental Agency", contact: "+1 800-555-7777" },
      ],
      additionalNotes:
        "Toxic fumes detected. Nearby residents advised to stay indoors.",
    },
    {
      id: 4,
      location: "Riverside Mall",
      type: "Kitchen Fire",
      status: "Extinguished - Monitoring",
      firefighters: [
        { name: "Daniel Clark", role: "Squad Leader" },
        { name: "Sophia White", role: "Firefighter" },
      ],
      equipment: [
        { name: "CO2 Extinguisher", quantity: 2, icon: "🧯" },
        { name: "Ventilation Fan", quantity: 1, icon: "🌬" },
      ],
      reportedTime: "12:50 PM",
      estimatedCompletion: "3:00 PM",
      severity: "Low",
      civiliansAffected: 0,
      emergencyContacts: [
        { name: "Mall Security", contact: "+1 800-555-2222" },
      ],
      additionalNotes:
        "Minor smoke damage. Kitchen will remain closed for safety inspection.",
    },
  ]);
  const resources = [
    // 🔥 Fire Equipment
    { id: 1, name: "Fire Hose", count: 10, status: "Available" },
    { id: 2, name: "Ladders", count: 5, status: "Functional" },
    { id: 3, name: "Fire Extinguishers (CO₂)", count: 8, status: "Available" },
    { id: 4, name: "Fire Extinguishers (Foam)", count: 6, status: "Limited" },

    // 🚑 First Aid & Medical
    { id: 5, name: "Burn Kits", count: 15, status: "Available" },
    { id: 6, name: "First Aid Kits", count: 12, status: "Functional" },

    // 📡 Communication & Alerts
    { id: 7, name: "Radio Transceivers", count: 7, status: "Available" },
    { id: 8, name: "Emergency Sirens", count: 4, status: "Functional" },

    // 🦺 Protective Gear
    { id: 9, name: "Firefighter Suits", count: 20, status: "Available" },
    { id: 10, name: "Helmets", count: 18, status: "Functional" },
    { id: 11, name: "Thermal Gloves", count: 25, status: "Limited" },

    // 🛠️ Rescue Equipment
    { id: 12, name: "Rescue Axes", count: 6, status: "Functional" },
    { id: 13, name: "Chainsaws", count: 3, status: "Limited" },
    { id: 14, name: "Hydraulic Spreaders", count: 2, status: "Available" },
  ];

  const activityData = {
    pendingCalls: [
      {
        id: 1,
        caller: "Alex Carter",
        location: "Brooklyn, NY",
        urgency: "High",
      },
      {
        id: 2,
        caller: "Emily Smith",
        location: "Queens, NY",
        urgency: "Medium",
      },
    ],
  };

  const [selectedFirefighter, setSelectedFirefighter] = useState(null);
  const firefighters = [
    { id: 1, name: "John Doe", role: "Squad Leader", shift: "8 AM - 8 PM" },
    {
      id: 2,
      name: "Sarah Lee",
      role: "Rescue Specialist",
      shift: "10 AM - 10 PM",
    },
  ];
  const totalIncidents = incidents.length;
  const activeIncidents = incidents.filter(
    (inc) => inc.status !== "Resolved"
  ).length;
  const resolvedIncidents = totalIncidents - activeIncidents;

  return (
    <>
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-5 flex justify-between items-center rounded-lg shadow-lg">
        {/* Fire Station Name */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚒</span>
          <h1 className="text-2xl font-bold">
            {stationName || "Fire Station Dashboard"}
          </h1>
        </div>

        {/* Current Time Display */}
        <div className="bg-white text-red-600 px-4 py-2 rounded-md shadow-md font-semibold">
          🕒 {time.toLocaleTimeString()}
        </div>

        {/* Logout Button */}
        <button className="bg-white text-red-600 px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 transition">
          🔒 Logout
        </button>
      </header>
      <div className="bg-white p-5 shadow-lg rounded-lg w-full border border-gray-200 mt-5">
        {/* 🔥 Header */}

        {/* 🔍 Quick Summary */}
        <div className="flex justify-around text-center my-4">
          <div className="p-3 bg-red-100 text-red-700 rounded-lg w-1/3 shadow-sm">
            <p className="text-lg font-bold">{totalIncidents}</p>
            <p className="text-sm">Total Incidents</p>
          </div>
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-lg w-1/3 shadow-sm">
            <p className="text-lg font-bold">{activeIncidents}</p>
            <p className="text-sm">Active Fires</p>
          </div>
          <div className="p-3 bg-green-100 text-green-700 rounded-lg w-1/3 shadow-sm">
            <p className="text-lg font-bold">{resolvedIncidents}</p>
            <p className="text-sm">Resolved Cases</p>
          </div>
        </div>

        {/* 🏷️ Incident List */}
        <div className="mt-4 space-y-4">
          <h2 className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-md inline-block">
            🚨 Active incidents
          </h2>
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className={`flex justify-between items-center p-3 rounded-md shadow-sm border ${
                incident.severity === "High"
                  ? "bg-red-50 border-red-300"
                  : incident.severity === "Medium"
                  ? "bg-yellow-50 border-yellow-300"
                  : "bg-green-50 border-green-300"
              }`}
            >
              {/* Incident Details */}
              <div>
                <p className="font-semibold text-gray-800">
                  📍 {incident.location}
                </p>
                <p className="text-sm text-gray-500">
                  🔥 Severity:{" "}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs text-white ${
                      incident.severity === "High"
                        ? "bg-red-500"
                        : incident.severity === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {incident.severity}
                  </span>
                </p>
              </div>

              {/* Status & Containment Time */}
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  ⏳ {incident.containmentTime}
                </p>
                <span
                  className={`px-3 py-1 rounded-md text-xs text-white ${
                    incident.status === "Dispatched"
                      ? "bg-yellow-500"
                      : incident.status === "On Scene"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                >
                  {incident.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-5 shadow-md rounded-lg w-full border border-gray-200">
        {/* Header */}
        <h2 className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-4 rounded-md inline-block">
          🚒 Fire Station Activity Overview
        </h2>

        {/* Firefighters List */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800">
            👨‍🚒 Active Firefighters
          </h3>
          <ul className="mt-2 space-y-2">
            {firefighters.map((firefighter) => (
              <li
                key={firefighter.id}
                className="p-3 bg-blue-50 rounded-md shadow-sm border border-blue-300 cursor-pointer hover:bg-blue-100 transition"
                onClick={() => setSelectedFirefighter(firefighter)} // Open modal with details
              >
                <p className="font-semibold">{firefighter.name}</p>
                <p className="text-sm text-gray-500">{firefighter.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Popup */}
        {selectedFirefighter && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold">
                👨‍🚒 {selectedFirefighter.name}
              </h2>
              <p className="text-gray-600">{selectedFirefighter.role}</p>
              <p className="text-gray-500">
                Shift: {selectedFirefighter.shift}
              </p>

              {/* Close Button */}
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                onClick={() => setSelectedFirefighter(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Pending Emergency Calls */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800">
            📞 Pending Emergency Calls
          </h3>
          <ul className="mt-2 space-y-2">
            {activityData.pendingCalls.map((call) => (
              <li
                key={call.id}
                className="p-3 bg-yellow-50 rounded-md shadow-sm border border-yellow-300"
              >
                <p className="font-semibold">📞 Caller: {call.caller}</p>
                <p className="text-sm text-gray-500">
                  Location: {call.location} – Urgency: {call.urgency}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white p-5 shadow-md rounded-lg w-full border border-gray-200 mt-5">
        {/* Header */}
        <h2 className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-4 rounded-md inline-block">
          🚒 Fire Station Resources & Equipment
        </h2>

        {/* Resource List */}
        <div className="mt-4 space-y-4 flex flex-wrap w-screen space-x-5">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className={`flex justify-between items-center p-3 min-w-23/100 rounded-md shadow-sm border ${
                resource.status === "Available"
                  ? "bg-green-50 border-green-300"
                  : resource.status === "Functional"
                  ? "bg-blue-50 border-blue-300"
                  : "bg-yellow-50 border-yellow-300"
              }`}
            >
              {/* Resource Name & Count */}
              <div>
                <p className="font-semibold text-gray-800">{resource.name}</p>
                <p className="text-sm text-gray-500">
                  🔢 {resource.count} in stock
                </p>
              </div>

              {/* Status Badge */}
              <span
                className={`px-3 py-1 rounded-md text-xs text-white ${
                  resource.status === "Available"
                    ? "bg-green-500"
                    : resource.status === "Functional"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
              >
                {resource.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function FireStationLogin() {
  return (
    <>
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-6 px-8 text-center rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">🚒 Fire Station Login</h1>
        <p className="mt-2 text-lg text-orange-200">
          Secure access for fire station personnel to manage resources and
          emergency responses.
        </p>
      </header>
      <div className="bg-white p-6 shadow-2xl rounded-lg w-full max-w-md mx-auto mt-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Sign In
        </h2>

        {/* Email Input */}
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">ID</label>
          <input
            type="id"
            placeholder="Enter your Station ID"
            className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Forgot Password & Login Button */}
        <div className="mt-4 flex  items-center">
          <button className="bg-red-500 text-white w-full px-4 py-2 rounded-md hover:bg-red-600 m-auto transition">
            Login
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="border-t flex-1"></div>
          <p className="px-3 text-gray-500 text-sm">OR</p>
          <div className="border-t flex-1"></div>
        </div>

        {/* Google Sign-In Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
          Sign in with Google
        </button>
      </div>
    </>
  );
}
