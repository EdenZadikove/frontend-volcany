import React from "react";
import { CCol, CForm, CFormGroup, CInput, CLabel, CRow } from "@coreui/react";

const Profile = () => {
  return (
    <>
      <CForm action="" method="post" className="form-horizontal">
        <CFormGroup row>
          <CLabel sm="5" col="lg" htmlFor="first-name">
            First Name
          </CLabel>
          <CCol sm="6">
            <CInput
              size="lg"
              type="text"
              id="first-name"
              name="first-name"
              className="input-lg"
              value="Eden"
              readOnly
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CLabel sm="5" col="lg" htmlFor="last-name">
            Last Name
          </CLabel>
          <CCol sm="6">
            <CInput
              size="lg"
              type="text"
              id="last-name"
              name="last-name"
              className="input-lg"
              value="Zadikove"
              readOnly
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CLabel sm="5" col="lg" htmlFor="user-name">
            User Name
          </CLabel>
          <CCol sm="6">
            <CInput
              size="lg"
              type="text"
              id="user-name"
              name="user-name"
              className="input-lg"
              value="edenz"
              readOnly
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CLabel sm="5" col="lg" htmlFor="permission">
            Permission
          </CLabel>
          <CCol sm="6">
            <CInput
              size="lg"
              type="text"
              id="permission"
              name="permission"
              className="input-lg"
              value="Admin"
              readOnly
            />
          </CCol>
        </CFormGroup>
        <CRow className="card-header"> Contact Details</CRow>
      </CForm>
    </>
  );
};

export default Profile;
