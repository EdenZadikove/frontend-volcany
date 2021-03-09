import React, { useState, useEffect } from "react";


import {CCol} from "@coreui/react";

const Temperature = (props) => {
  return (
    <>
      <CCol>
        <CCol className="weather-card-title">
          <span className="margin-right-5">Min</span>
        </CCol>
      </CCol>
      <CCol>
        <CCol className="weather-card-title">
          <span className="margin-right-5">Max</span>
        </CCol>
      </CCol>
      <CCol>
        <CCol className="weather-card-title">
          <span className="margin-right-5">Max</span>
        </CCol>
      </CCol>
    </>
  )};
export default Temperature;
