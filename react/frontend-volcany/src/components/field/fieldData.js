import React from "react";
import {

  CCard,
  CCardBody,
  CCardHeader,
  CCol,

  CRow,
} from "@coreui/react";
import fieldsData from "src/views/dashboard/fieldsData";

const FieldData = (props) => {

  const {field} = props.field;

  return (
    <>
      <CCard className="text-blue-grey-darken-2">
        <CCardHeader>
          <CRow>
            <CCol>
              <span className="bold-800">{field.field_name}</span>{" "}
              <small>{field.field_description}</small>
            </CCol>
            <CCol>
              <small>
                <span className=" float-right">Wednesday, Dec 23</span>
              </small>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <h6>Country Area </h6>
              <h4>{field.country_area_id}</h4>
            </CCol>
            <CCol>
              <h6>Crop Name </h6>
              <h4>{field.crop_name}</h4>
            </CCol>
            <CCol>
              <h6>Seeding Date </h6>
              <h4>{field.start_date}</h4>
            </CCol>
            <CCol>
              <h6>Estimate Date </h6>
              <h4>{field.end_date}</h4>
            </CCol>
            <CCol>
              <h6>ETC</h6>
              <h4>{28.3764}</h4>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default FieldData;
