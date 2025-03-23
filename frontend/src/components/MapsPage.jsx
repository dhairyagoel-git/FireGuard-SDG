import MapComponent from "./MapComponent";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function MapPage() {
  const [incidents,setincidents] = useState([]);
  const [fireStations,setfireStations]=useState([]);
  const [emergencyContacts,setemergencyContacts]=useState([]);
  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        "http://localhost:5000/mapspage"
      );
      setincidents(response.data[0]);
      setfireStations(response.data[1]);
      setemergencyContacts(response.data[2]);
    })();
  }, []);

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
