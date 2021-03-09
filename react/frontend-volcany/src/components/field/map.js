import { CCard, CCardBody } from "@coreui/react";
import React from "react";
import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";

const Map = (props) => {
  const { fieldCoordinates, centerMap,handleClickMarker,markersData,zoom } = props;
console.log(markersData.coordinates);
  return (
    <>
      <CCard>
        <CCardBody>
          <MapContainer
            className="map"
            center={centerMap}
            zoom={zoom}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markersData
              ? markersData.coordinates.map((marker, index) => {console.log(index);
                  return (
                    <Marker
                      position={[marker[0], marker[1]]}
                      key={index}
                      eventHandlers={{
                        click: () => handleClickMarker(index),
                      }}
                    />
                  );
                })
              : null}
            <Polygon color="red" positions={fieldCoordinates}></Polygon>
          </MapContainer>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Map;
