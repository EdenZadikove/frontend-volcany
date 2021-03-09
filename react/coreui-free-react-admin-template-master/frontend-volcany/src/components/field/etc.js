import React from "react";
import { CCard, CCardBody, CDataTable } from "@coreui/react";

const ETC = (props) => {
  const {field} = props;
  const fields = ["ETC", "timestamp"];
  return (
    <>
      <CCard>
        <CCardBody>
          <CDataTable
            items={field.ETC}
            fields={fields}
            itemsPerPage={5}
            pagination
            clickableRows
            onRowClick={(e) => props.handleCLickRowETC(e)}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default ETC;
