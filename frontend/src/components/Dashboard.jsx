import React from "react";
import {FireAlertsWeatherResponseCard, FireSafetyAwarenessCard } from "./DashboardComponents";
import {Link} from 'react-router-dom'
export function Dashboard(){
    return(
        <>
        <div className="bg-white p-5 rounded-lg w-full  ">
      {/* 🔥 Heading */}
      <div className="flex justify-between">

      <h2 className="text-2xl font-bold text-gray-800">
        🔥 Fire Monitoring & Emergency Status
      </h2>
      <Link to='/tips' className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:opacity-90 transition">📖 View Fire Safety Tips</Link>
      </div>

      {/* 📋 Additional Details */}
      <p className="text-gray-600 mt-2">
        Stay updated with real-time fire alerts, emergency response updates, and safety measures.
      </p>
    </div>
        <FireSafetyAwarenessCard/>
        <FireAlertsWeatherResponseCard/>



        </>
    )
}