import React from "react";

import { CCol} from "@coreui/react";

const MinMaxData = (props) => {
  const showActual = {...props};
  return (
    <>
      <CCol>
        <CCol className="weather-card-title">
          <span className="margin-right-5 no-wrap">Min</span>
            <span className="weather-card-value no-wrap">{props.min}{props.unit}</span>
        </CCol>
      </CCol>
      <CCol>
        <CCol className="weather-card-title">
          <span className="margin-right-5 no-wrap">Max</span>
          <span className="weather-card-value no-wrap">{props.max}{props.unit}</span>
        </CCol>
      </CCol>
    
    </>
  );
};
export default MinMaxData;
