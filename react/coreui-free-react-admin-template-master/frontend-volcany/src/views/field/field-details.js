import React, { useState } from "react";
import { CCol, CRow } from "@coreui/react";
import Map from "../../components/field/map";
import FieldData from "../../components/field/fieldData";
import ETC from "../../components/field/etc";
import FieldAverageValues from '../../components/field/fieldAverageValues';
import CoordinateData from "../../components/field/coordinateData";
import fieldsData from "../dashboard/fieldsData";
import { useParams } from "react-router-dom";

const FieldDetails = (props) => {
  const fieldName = useParams().type;
  const field = fieldsData.find(field => field.field.field_name === fieldName);
 
  //map states
  const [markersData, setMarkersData] = useState(false);
  const [centerMap, setCenterMap] = useState(field.field_coordinates.coordinates[0]);
  const [zoom, setZoom] = useState(14);
  const [coordinateData, setCoordinateData] = useState({}); //selected marker data
  const [markerClicked, setMarkerClicked] = useState(false);
  const [showFieldAverageValues,setShowFieldAverageValues] = useState(false);
  const [activeRowStyle, setActiveRowStyle] = useState();

  const handleCLickRowETC = (e) => {
    //add markers to map
    console.log(e);
    setMarkerClicked(false);
    setMarkersData(e);
    setShowFieldAverageValues(true);
    setActiveRowStyle(e);
  };

  const handleClickMarker = (index) => {
    setCoordinateData({ markerData: markersData, index: index });
    setMarkerClicked(true); 
  };

  return (
    <>
      <CRow>
        <CCol>
          <FieldData field={field}/>
        </CCol>
      </CRow>
      <CRow>
        <CCol xl={3} sm={4}>
          <CRow>
            <CCol>
              <ETC handleCLickRowETC={handleCLickRowETC}  field={field}/>
            </CCol>
          </CRow>
          {showFieldAverageValues ? (
         <CRow>
         <CCol>
           <FieldAverageValues handleCLickRowETC={handleCLickRowETC} field={field}/>
         </CCol>
       </CRow>
          ): null}
          {markerClicked ? (
            <CRow>
              <CCol>
                <CoordinateData
                  coordinateData={coordinateData}
                ></CoordinateData>
              </CCol>
            </CRow>
          ) : null}
        </CCol>
        <CCol xl={9} sm={8}>
          <Map
            markersData={markersData}
            centerMap={centerMap}
            zoom={zoom}
            handleClickMarker={handleClickMarker}
            fieldCoordinates={field.field_coordinates.coordinates}
          />
        </CCol>
      </CRow>
    </>
  );
};

export default FieldDetails;
