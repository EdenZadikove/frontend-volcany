import React from "react";
import { CCard, CCardBody, CCol, CRow, CCardHeader } from "@coreui/react";

const FieldAverageValues = (props) => {
  console.log(props);
  const { field } = props;
  const fields = ["NDVI", "ETC", "ET0"];
  return (
    <>
      <CCard>
        <CCardHeader>Field Average Values</CCardHeader>
        <CCardBody className="text-blue-grey-darken-2">
          <CRow>
            <CCol>
              <h6>NDVI</h6>
            </CCol>
            <CCol>{props.field.ETC[0].NDVI}</CCol>
          </CRow>
          <CRow>
            <CCol>
              <h6>ETC</h6>
            </CCol>
            <CCol>{props.field.ETC[0].ETC}</CCol>
          </CRow>
          <CRow>
            <CCol>
              <h6>ET0</h6>
            </CCol>
            <CCol>{props.field.ETC[0].ET0}</CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default FieldAverageValues;
