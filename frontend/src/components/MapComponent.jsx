
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const mapContainerStyle = { width: "100%", height: "500px" };
const center = { lat: 28.7041, lng: 77.1025 }; // Example: New Delhi

const fireStations = [
  { id: 1, name: "Fire Station 1", lat: 28.7045, lng: 77.1030 },
  { id: 2, name: "Fire Station 2", lat: 28.7055, lng: 77.1040 },
];

export default function MapComponent(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBN9S4lsnOa1Hc3VbMmbtWJM9pa59vvU0s", // Replace with your actual API key
      version: "weekly",
      libraries: ["marker"], // Load marker library
    });

    loader.load().then(() => {
      if (!google.maps.marker) {
        console.error("Advanced Markers API not loaded properly!");
        return;
      }

      const { Map } = google.maps;
      const { AdvancedMarkerElement } = google.maps.marker;

      const map = new Map(mapRef.current, {
        center,
        zoom: 14,
        mapId: "ddff16096d736753", // Replace with your actual Map ID
      });

      fireStations.forEach((station) => {
        new AdvancedMarkerElement({
          position: { lat: station.lat, lng: station.lng },
          map,
          title: station.name,
        });
      });
    });
  }, []);

  return <div ref={mapRef} style={props.style} />;
}




