import { useState } from "react";

const FireIncidentModal = ({ incident, onClose }) => {
  if (!incident) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur */}
      <div className="fixed inset-0  bg-opacity-30 backdrop-blur-lg"></div>

      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl z-50">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold text-gray-800">
            🚨 {incident.type} - {incident.location}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✖
          </button>
        </div>

        {/* Incident Details */}
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600">
            📍 Location: {incident.location}
          </p>
          <p className="text-sm text-gray-600">
            🕒 Reported: {incident.reportedTime}
          </p>
          <p className="text-sm text-gray-600">
            ⏳ Estimated Completion: {incident.estimatedCompletion}
          </p>
          <p className="text-sm text-gray-600">
            🔥 Severity: <strong>{incident.severity}</strong>
          </p>
          <p className="text-sm text-gray-600">
            👥 Civilians Affected: {incident.civiliansAffected}
          </p>

          {/* Firefighters */}
          <div className="border-t pt-3">
            <h3 className="font-semibold text-gray-700">
              👨‍🚒 Firefighters Assigned:
            </h3>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              {incident.firefighters.map((firefighter, index) => (
                <li key={index}>
                  {firefighter.name} - {firefighter.role}
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Used */}
          <div className="border-t pt-3">
            <h3 className="font-semibold text-gray-700">🛠 Equipment Used:</h3>
            <div className="flex flex-wrap gap-2">
              {incident.equipment.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm"
                >
                  <span>{item.icon}</span>
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="border-t pt-3">
            <h3 className="font-semibold text-gray-700">
              📞 Emergency Contacts:
            </h3>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              {incident.emergencyContacts.map((contact, index) => (
                <li key={index}>
                  {contact.name}: {contact.contact}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Notes */}
          <div className="border-t pt-3">
            <h3 className="font-semibold text-gray-700">
              📝 Additional Notes:
            </h3>
            <p className="text-sm text-gray-600">{incident.additionalNotes}</p>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const FireIncidentDashboard = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      location: "Downtown, LA",
      type: "Structural Fire",
      status: "Dispatched",
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
  ]);

  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-md inline-block">
        🚨 Active incidents
      </h2>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {incidents.map((incident) => (
          <div
          key={incident.id}
          onClick={() => setSelectedIncident(incident)}
            className="cursor-pointer p-4 shadow-md rounded-lg hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-bold">{incident.location}</h3>
            <p className="text-sm text-gray-600">{incident.type}</p>
            <p className="text-blue-500 text-sm font-semibold mt-2">
              See More →
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <FireIncidentModal
        incident={selectedIncident}
        onClose={() => setSelectedIncident(null)}
      />
    </div>
  );
};

export default FireIncidentDashboard;



import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export  function FireReports() {
  const [newReports, setNewReports] = useState([
    { id: 1, location: "Downtown LA", type: "Structural Fire", status: "Unreviewed" },
    { id: 2, location: "Westside Apartments", type: "Electrical Fire", status: "Unreviewed" },
  ]);
  const [ongoingIncidents, setOngoingIncidents] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [assignedTeam, setAssignedTeam] = useState("");

  const handleAssign = (reportId) => {
    if (!assignedTeam) {
      toast.error("Please select a team before assigning.");
      return;
    }
    
    const report = newReports.find((r) => r.id === reportId);
    report.status = "In Progress";
    report.assignedTeam = assignedTeam;

    setNewReports(newReports.filter((r) => r.id !== reportId));
    setOngoingIncidents([...ongoingIncidents, report]);
    setSelectedReport(null);
    setAssignedTeam("");
    toast.success("Incident assigned successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">🚨 New Fire Reports</h2>
      <div className="mt-4 space-y-3">
        {newReports.length > 0 ? (
          newReports.map((report) => (
            <div key={report.id} className="flex justify-between items-center p-3 bg-red-50 border border-red-300 rounded-md">
              <div>
                <p className="font-semibold">{report.location}</p>
                <p className="text-sm text-gray-600">{report.type}</p>
              </div>
              <button
                onClick={() => setSelectedReport(report)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No new reports.</p>
        )}
      </div>
      
      <h2 className="text-xl font-bold mt-6">🔥 Ongoing Incidents</h2>
      <div className="mt-4 space-y-3">
        {ongoingIncidents.length > 0 ? (
          ongoingIncidents.map((incident) => (
            <div key={incident.id} className="p-3 bg-yellow-50 border border-yellow-300 rounded-md">
              <p className="font-semibold">{incident.location}</p>
              <p className="text-sm text-gray-600">Assigned to: {incident.assignedTeam}</p>
            </div>
          ))
        ) : (
          <p>No ongoing incidents.</p>
        )}
      </div>
      
      {selectedReport && (
        <div className="fixed inset-0  bg-opacity-30 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h3 className="text-lg font-bold">Incident Details</h3>
            <p className="mt-2">Location: {selectedReport.location}</p>
            <p>Type: {selectedReport.type}</p>
            <p>Status: {selectedReport.status}</p>

            <label className="block mt-4">Assign Team:</label>
            <select
              className="border p-2 rounded-md w-full"
              value={assignedTeam}
              onChange={(e) => setAssignedTeam(e.target.value)}
            >
              <option value="">Select a team</option>
              <option value="Squad Alpha">Squad Alpha</option>
              <option value="Rescue Team Bravo">Rescue Team Bravo</option>
              <option value="Firefighters Delta">Firefighters Delta</option>
            </select>
            
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setSelectedReport(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Close
              </button>
              <button
                onClick={() => handleAssign(selectedReport.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
