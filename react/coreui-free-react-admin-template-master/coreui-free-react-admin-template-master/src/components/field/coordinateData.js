import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

const CoordinateData = (props) => {
//rendering seleted marker data
const {coordinateData} =props;
const markerData = coordinateData.markerData;
//const {coordinates, ETC, timestamp} = props;
const index = props.coordinateData.index;
  return (
    <>
      <CCard>
        <CCardHeader>Selected Marker</CCardHeader>
        <CCardBody className="text-blue-grey-darken-2">
          <CRow>
            <CCol>
              <h6>Date:</h6>
            </CCol>
            <CCol>{markerData.timestamp}</CCol>
          </CRow>
          <CRow>
            <CCol>
              <h6>ETC value:</h6>
            </CCol>
            <CCol>{markerData.ETC}</CCol>
          </CRow>
          <CRow>
            <CCol>
              <h6>Latitude:</h6>
            </CCol>
            <CCol>
            {markerData.coordinates[index][0]}
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <h6>Longitude:</h6>
            </CCol>
            <CCol> {markerData.coordinates[index][1]}</CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default CoordinateData;
