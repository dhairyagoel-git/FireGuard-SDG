import { useState } from "react";
import {useNavigate} from 'react-router-dom'
export function FireLocationInput() {
  const [location, setLocation] = useState("");

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation(`Lat: ${lat}, Lon: ${lon}`);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setLocation("");
          alert("Location access denied. Try entering manually");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-white   p-6 pb-0 rounded-lg w-screen  max-w-2xl mt-6">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-800">📍 Fire Location</h2>

      {/* Location Input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter fire location..."
        className="w-full mt-3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Use My Location Button */}
      <button
        onClick={handleUseMyLocation}
        className="mt-4 bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        📌 Use My Location
      </button>
    </div>
  );
}
export function FireDetailsInput() {
  const [fireIntensity, setFireIntensity] = useState("");
  const [fireType, setFireType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  return (
    <div className="bg-white  p-6 pb-0 rounded-lg w-screen max-w-2xl ">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-800">🔥 Fire Details</h2>

      {/* Fire Intensity */}
      <label className="block mt-4 text-gray-700 font-medium">
        Fire Intensity:
      </label>
      <select
        value={fireIntensity}
        onChange={(e) => setFireIntensity(e.target.value)}
        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="">Select Intensity</option>
        <option value="low">Low 🔵</option>
        <option value="moderate">Moderate 🟠</option>
        <option value="high">High 🔴</option>
      </select>

      {/* Fire Type */}
      <label className="block mt-4 text-gray-700 font-medium">
        Type of Fire:
      </label>
      <select
        value={fireType}
        onChange={(e) => setFireType(e.target.value)}
        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="">Select Type</option>
        <option value="forest">Forest Fire 🌲🔥</option>
        <option value="building">Building Fire 🏢🔥</option>
        <option value="vehicle">Vehicle Fire 🚗🔥</option>
        <option value="other">Other 🔥</option>
      </select>

      {/* Additional Information */}
      <label className="block mt-4 text-gray-700 font-medium">
        Additional Details:
      </label>
      <textarea
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="Provide any extra details about the fire..."
        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        rows="4"
      ></textarea>
    </div>
  );
}
export function FireImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white  p-6 rounded-lg w-screen max-w-2xl ">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        📷 Upload Fire Images (Optional)
      </h2>

      {/* File Input */}
      <label className="block mt-4 text-gray-700 font-medium">
        Select an Image:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Image Preview */}
      {selectedImage && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm">Preview:</p>
          <img
            src={selectedImage}
            alt="Uploaded Fire Image"
            className="mt-2 w-full h-48 object-cover rounded-md border"
          />
        </div>
      )}
    </div>
  );
}
export function SubmitFireReport() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Simulate report submission
    setSubmitted(true);
    navigate("/maps");
    setTimeout(() => setSubmitted(false), 5000); // Auto-hide confirmation after 5 seconds
  };

  return (
    <div className="bg-white  p-6 rounded-lg w-screen max-w-2xl mt-6 text-center">
      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
      >
        🚨 Submit Fire Report
      </button>

      {/* Confirmation Message */}
      {submitted && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          ✅ Fire report submitted successfully! Emergency responders have been
          notified.
        </div>
      )}
    </div>
  );
}
