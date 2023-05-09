import React from "react";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("../components/WorldMap"), {
  ssr: false,
});
function MapContainer() {
  return (
    <>
      <WorldMap />
    </>
  );
}

export default MapContainer;
