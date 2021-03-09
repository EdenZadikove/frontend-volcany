import React from "react";
import {
  CCol,
  CRow,
} from "@coreui/react";
import ContactDetails from "../../components/account/contactDetails";

import userData from "./userData";

const UserAccount = () => {

  return (
    <CRow>
      <CCol xl={12}>
        <ContactDetails userData={userData} />
      </CCol>
    </CRow>
  );
};

export default UserAccount;
