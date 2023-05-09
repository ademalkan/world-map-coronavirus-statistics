import React from "react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import CountryPopup from "../CountryPopup";
import MapClickHandler from "../../utils/handler/MapClickHandler";
import useFetchCountryData from "../../utils/fetchs/useFetchCountryData";

const WorldMap = () => {
  const [mapData, setMapData] = useState({
    selectedCountry: null,
    selectedLat: 51.505,
    selectedLon: -0.09,
  });

  const countryData = useFetchCountryData(mapData.selectedCountry);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <MapClickHandler setMapData={setMapData} />
      {mapData?.selectedCountry !== null && (
        <CountryPopup mapData={{ ...mapData, countryData }} />
      )}
    </MapContainer>
  );
};

export default WorldMap;
