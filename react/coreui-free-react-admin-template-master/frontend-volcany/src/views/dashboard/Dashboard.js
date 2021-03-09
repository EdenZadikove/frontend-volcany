import React, { useState } from "react";
import { CCard, CCardBody, CCol, CNavLink, CProgress, CRow } from "@coreui/react";

import fieldsData from "./fieldsData";
import WeatherCarousel from "../../components/weather/weatherCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const [selectedField, setSelectedField] = useState(fieldsData[0]);
  const handleClickRow = (field) => {
    setSelectedField(field);
  };

  return (
    <>
      <WeatherCarousel selectedField={selectedField}/>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Field Name</th>
                    <th>Description</th>
                    <th>Country Area</th>
                    <th>Crop</th>
                    <th>Duration</th>
                    <th className="text-center">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fieldsData.map((field, index) => {
                    return (
                      <tr key={index} onClick={() => handleClickRow(field)}>
                        <td>
                          <div>{field.field.field_name}</div>
                        </td>
                        <td>
                          <div>{field.field.field_description}</div>
                        </td>
                        <td>
                          <div>{field.field.country_area_id}</div>
                        </td>
                        <td>
                          <div>{field.field.crop_name}</div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>50%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <CProgress
                            className="progress-xs"
                            color="success"
                            value="50"
                          />
                        </td>
                        <td className="text-center">
                          <CNavLink to={`/field-details/${field.field.field_name}`}>
                          <FontAwesomeIcon icon="arrow-right" className="pointer"></FontAwesomeIcon>
                          </CNavLink>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
