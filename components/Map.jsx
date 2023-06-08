import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 30.618939,
    longitude: -96.336540,
    zoom: 14,
  });

  const pinCoordinates = {
    latitude: 30.618939,
    longitude: -96.336540,
  };

  return (
    <div className="map_wrap">
      <div className="map">
        <ReactMapGL
          mapStyle={"mapbox://style/mapbox/dark-v9"}
          mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {/* Add marker/pin with inline styles */}
          <Marker
            latitude={pinCoordinates.latitude}
            longitude={pinCoordinates.longitude}
            style={{
              width: "0",
              height: "0",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "20px solid red",
            }}
          />
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
