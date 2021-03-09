import React, { useState } from "react";
import {
  CButton,
  CTooltip,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetails = (props) => {
  const [readOnly, setReadOnly] = useState(true);
  
  const handleEditBottom = () => {
    //set the page to edit mode
    setReadOnly(false);
  };

  return (
    <>
      <CForm action="" method="post" className="form-horizontal">
        <CCard>
          <CCardHeader>
            My Profile
            <CTooltip content="edit" placement="left">
              <FontAwesomeIcon
                icon="edit"
                className="text-blue-grey-darken-2 float-right pointer"
                onClick={handleEditBottom}
              />
            </CTooltip>
            <CCol col="6" sm="4" md="2" xl="2" className="mb-3 mb-xl-0 float-right">
              <CButton block color="success">
                Save
              </CButton>
            </CCol>
          </CCardHeader>
          <CCardBody>
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
                  value={props.userData.firstName}
                  readOnly={readOnly}
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
                  value={props.userData.lastName}
                  readOnly={readOnly}
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
                  value={props.userData.userName}
                  readOnly={readOnly}
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
                  value={props.userData.permission}
                  readOnly={readOnly}
                />
              </CCol>
            </CFormGroup>
          </CCardBody>
          <CCardHeader>Conatct Details</CCardHeader>
          <CCardBody>
            <CFormGroup row>
              <CLabel sm="5" col="lg" htmlFor="phone-number">
                Phone Number
              </CLabel>
              <CCol sm="6">
                <CInput
                  size="lg"
                  type="text"
                  id="phone-number"
                  name="phone-number"
                  className="input-lg"
                  value={props.userData.phoneNumber}
                  readOnly={readOnly}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col="lg" htmlFor="email">
                Email
              </CLabel>
              <CCol sm="6">
                <CInput
                  size="lg"
                  type="text"
                  id="email"
                  name="email"
                  className="input-lg"
                  value={props.userData.email}
                  readOnly={readOnly}
                />
              </CCol>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CForm>
    </>
  );
};

export default ContactDetails;
