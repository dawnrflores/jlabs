import React from "react";
import { GoogleMap, LoadScript, Marker, } from "@react-google-maps/api";

const MapComponent = (props) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const location = props.loc.split(",")

  const defaultCenter = {
    lat: parseFloat(location[0]),
    lng: parseFloat(location[1]),
  };

  return (
    <LoadScript googleMapsApiKey={process.env.MIX_REACT_APP_API_KEYS}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;