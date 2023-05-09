import { useMapEvents } from "react-leaflet";

const MapClickHandler = ({ setMapData }) => {
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=5&accept-language=en`
    )
      .then((response) => response.json())
      .then((data) => {
        setMapData((prevMapData) => ({
          ...prevMapData,
          selectedCountry: data?.address?.country,
          selectedLat: lat,
          selectedLon: lng,
        }));
      });
  };

  useMapEvents({
    click: handleMapClick,
  });

  return null;
};

export default MapClickHandler;
