import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = (props) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const location = props.loc.split(",")

  console.log(location)

  const defaultCenter = {
    lat: parseFloat(location[0]),
    lng: parseFloat(location[1]),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCKLnx34iMvva3czLNJpeEPEyFho2Tef0Q">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
    console.log(location)
};

export default MapComponent;