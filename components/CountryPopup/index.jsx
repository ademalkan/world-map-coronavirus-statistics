import React from "react";
import { Popup } from "react-leaflet";

function CountryPopup({ mapData }) {
  const { selectedLat, selectedLon, selectedCountry, countryData } = mapData;

  if (!countryData) {
    return (
      <Popup position={[selectedLat, selectedLon]}>
        <h3>Loading...</h3>
      </Popup>
    );
  }

  if (!selectedCountry) {
    return (
      <Popup position={[selectedLat, selectedLon]}>
        <h3>Please select a country from the map.</h3>
      </Popup>
    );
  }

  return (
    <Popup position={[selectedLat, selectedLon]}>
      <h3>{selectedCountry}</h3>
      {countryData && (
        <div>
          <p>
            Confirmed:
            {countryData?.data?.confirmed
              ? countryData?.data?.confirmed
              : "No Confirmed"}
          </p>
          <p>
            Deaths:
            {countryData?.data?.deaths
              ? countryData?.data?.deaths
              : "No Deaths"}
          </p>
          <p>
            Recovered:
            {countryData?.data?.recovered
              ? countryData?.data?.recovered
              : "No Recovered"}
          </p>
          <p>
            Last Checked:
            {countryData?.data?.lastChecked
              ? new Date(countryData?.data?.lastChecked).toLocaleString()
              : "No Last Checked"}
          </p>
          <p>
            Last Reported:
            {countryData?.data?.lastReported
              ? new Date(countryData?.data?.lastReported).toLocaleString()
              : "Last Reported"}
          </p>
        </div>
      )}
    </Popup>
  );
}

export default CountryPopup;
