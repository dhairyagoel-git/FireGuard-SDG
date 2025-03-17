// import { useState } from "react";
import MapComponent from "./MapComponent";
// export default function MapPage() {
//   const [incidents] = useState([
//     { location: "Downtown, LA", status: "Active", risk: "High" },
//     { location: "Brooklyn, NY", status: "Under Control", risk: "Medium" },
//   ]);

//   const [fireStations] = useState([
//     { name: "Central Fire Station", distance: "2.5 km" },
//     { name: "Westside Fire Dept.", distance: "5.0 km" },
//   ]);

//   const [emergencyContacts] = useState([
//     { name: "Fire Department", number: "101" },
//     { name: "Emergency Services", number: "911" },
//   ]);

//   return (
//     <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-5">
//       {/* Map Section */}
//       <div className=" h-96 w-full  bg-gray-300 rounded-lg flex items-center justify-center">
//         <div className= "w-full h-full text-gray-600">
//         <MapComponent
//             style={{
//               width: "100%",
//               height: "100%",
//               position: "relative",
//             }}/>
//         </div>
//       </div>

//       {/* Information Card */}
//       <div className="w-full max-w-3xl bg-white shadow-md border border-gray-200 rounded-lg mt-6 p-5">
//         <h2 className="text-lg font-bold text-gray-800 mb-4">🔥 Fire Monitoring Details</h2>

//         {/* Ongoing Fire Incidents */}
//         <div className="mb-4">
//           <h3 className="font-semibold text-red-600">Ongoing Fire Incidents</h3>
//           {incidents.map((incident, index) => (
//             <p key={index} className="text-gray-700">
//               📍 {incident.location} - {incident.status} ({incident.risk} Risk)
//             </p>
//           ))}
//         </div>

//         {/* Nearby Fire Stations */}
//         <div className="mb-4">
//           <h3 className="font-semibold text-blue-600">🚒 Nearby Fire Stations</h3>
//           {fireStations.map((station, index) => (
//             <p key={index} className="text-gray-700">
//               🏢 {station.name} - {station.distance} away
//             </p>
//           ))}
//         </div>

//         {/* Emergency Contacts */}
//         <div>
//           <h3 className="font-semibold text-green-600">📞 Emergency Contacts</h3>
//           {emergencyContacts.map((contact, index) => (
//             <p key={index} className="text-gray-700">
//               ☎️ {contact.name}: {contact.number}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
export default function MapPage() {
  const [incidents] = useState([
    { location: "Downtown, LA", status: "Active", risk: "High" },
    { location: "Brooklyn, NY", status: "Under Control", risk: "Medium" },
  ]);

  const [fireStations] = useState([
    { name: "Central Fire Station", distance: "2.5 km" },
    { name: "Westside Fire Dept.", distance: "5.0 km" },
  ]);

  const [emergencyContacts] = useState([
    { name: "Fire Department", number: "101" },
    { name: "Emergency Services", number: "911" },
  ]);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-5 relative">
      {/* Map Section */}
      <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
        <div className="w-full h-full text-gray-600">
          <MapComponent
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          />
        </div>
      </div>

      {/* Information Card */}
      <div className="w-full max-w-3xl bg-white shadow-md border border-gray-200 rounded-lg mt-6 p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          🔥 Fire Monitoring Details
        </h2>

        {/* Ongoing Fire Incidents */}
        <div className="mb-4">
          <h3 className="font-semibold text-red-600">Ongoing Fire Incidents</h3>
          {incidents.map((incident, index) => (
            <p key={index} className="text-gray-700">
              📍 {incident.location} - {incident.status} ({incident.risk} Risk)
            </p>
          ))}
        </div>

        {/* Nearby Fire Stations */}
        <div className="mb-4">
          <h3 className="font-semibold text-blue-600">
            🚒 Nearby Fire Stations
          </h3>
          {fireStations.map((station, index) => (
            <p key={index} className="text-gray-700">
              🏢 {station.name} - {station.distance} away
            </p>
          ))}
        </div>

        {/* Emergency Contacts */}
        <div>
          <h3 className="font-semibold text-green-600">
            📞 Emergency Contacts
          </h3>
          {emergencyContacts.map((contact, index) => (
            <p key={index} className="text-gray-700">
              ☎️ {contact.name}: {contact.number}
            </p>
          ))}
        </div>
      </div>

      {/* 🔥 Floating "Report Fire" Button */}
      <button className="fixed bottom-6 right-6 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-700 transition">
        <Link to="/reports">🚨 Report Fire</Link>
      </button>
    </div>
  );
}
