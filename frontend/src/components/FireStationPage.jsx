import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function FireStation() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/firestation/login')
    },[navigate]);
  const fireStations = [
    {
      name: "Central Fire Station",
      location: "Downtown, LA",
      status: "Active",
      responseTime: "5 min",
    },
    {
      name: "Westside Fire Dept.",
      location: "West LA",
      status: "On Standby",
      responseTime: "7 min",
    },
    {
      name: "Eastside Fire Dept.",
      location: "East LA",
      status: "Responding",
      responseTime: "3 min",
    },
  ];
  return (
    <>
      <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-6 px-8 text-center rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">🚒 Fire Station Management</h1>
        <p className="mt-2 text-lg text-orange-200">
          Monitor and manage fire stations, response times, and availability.
        </p>
        <button className="mt-4 bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition">
          ➕ Add Fire Station
        </button>
      </header>
      <section className="bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-800">🚒 Fire Stations Overview</h2>
      <p className="text-gray-600 text-sm mb-4">Monitor the status and response times of nearby fire stations.</p>

      <div className="space-y-4">
        {fireStations.map((station, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
              <p className="font-semibold text-gray-800">{station.name}</p>
              <p className="text-sm text-gray-600">📍 {station.location}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-md text-sm text-white 
                ${station.status === "Active" ? "bg-green-500" : 
                   station.status === "On Standby" ? "bg-yellow-500" : 
                   "bg-red-500"}`}>
                {station.status}
              </span>
              <p className="text-gray-700 text-sm">⏳ {station.responseTime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
