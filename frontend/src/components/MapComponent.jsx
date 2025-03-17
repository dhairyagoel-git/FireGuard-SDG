import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  opacity: ".2",
};

const center = {
  lat: 30.3165, // Example: San Francisco
  lng: 78.0322,
};
const maptype = "satellite";
function MapComponent(props) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBN9S4lsnOa1Hc3VbMmbtWJM9pa59vvU0s">
      <GoogleMap
        mapContainerStyle={props.style}
        mapTypeId={maptype}
        center={center}
        zoom={10}
      >
        <div
          id="marker"
          style={{
            position: "absolute",
            transform: "translate(-50%, -100%)",
          }}
        >
          🔥 {/* Custom marker emoji */}
        </div>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
