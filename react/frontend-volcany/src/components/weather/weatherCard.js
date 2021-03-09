import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MinMaxData from "../weather/weather_data/min_max_data";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
import  weatherButtons from './weatherButtons';

const WeatherCard = (props) => {

  const [showData, setShowData] = useState("temperature");
  const [activeButton, setActiveButton] = useState("temperature");
  const [weatherIcon, setWeatherIcon] = useState("temperature-low");
  const showActual = {...props};

  const handleClick = (button) => {
    setShowData(button.name);
    setWeatherIcon(button.icon);
    setActiveButton(button.name);
  };

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12" md="12" xl="12">
          <CCard className="text-center">
            <CCardHeader className="weather-card-header bg-gray-400 display-block">
              <CRow className="position-relative">
                <CCol className="text-blue-grey-darken-2">
                  <span className="bold-800 header display-block">
                    {props.fieldName} 
                  </span>
                  <span className="">{props.date}</span>
                </CCol>
                {weatherIcon !== "" ? (
                  <FontAwesomeIcon
                    icon={weatherIcon}
                    className="position-absolute right top-25 text-blue-grey-darken-2 hide-on-mobile "
                    size="2x"
                  />
                ) : null}
              </CRow>
            </CCardHeader>
            <CCardBody className="bg-gray-200">
              <CRow>
                {weatherButtons.map((button, index) => (
                  <CCol
                    col="6"
                    sm="4"
                    md="2"
                    xl
                    className="mb-3 mb-xl-0"
                    key={index}
                  >
                    <CButton
                      className={
                        activeButton === button.name
                          ? "weather-button active"
                          : "weather-button"
                      }
                      block
                      variant="outline"
                      onClick={() => handleClick(button)}
                    >
                      {button.text}
                    </CButton>
                  </CCol>
                ))}
              </CRow>
              <CRow>
                {showData === "temperature" ? (
                  <MinMaxData
                    min={props.actual.minTemp}
                    max={props.actual.maxTemp}
                    unit="°"
                    showActual
                  /> 
                ) : null}
                {showData === "humidity" ? (
                  <MinMaxData
                    min={props.minHumidity}
                    max={props.maxHumidity}
                    unit="%"
                    showActual
                  />
                ) : null}
                {showData === "radiation" ? (
                  <MinMaxData
                    min={props.minHumidity}
                    max={props.maxHumidity}
                    unit="%"
                    showActual
                  />
                ) : null}
                {showData === "wind" ? (
                  <MinMaxData
                    min={props.minWind}
                    max={props.maxWind}
                    unit="km/h"
                    showActual
                  />
                ) : null}
                {showData === "precipitation" ? (
                  <MinMaxData
                    min={props.minHumidity}
                    max={props.maxHumidity}
                    unit="%"
                    showActual
                  />
                ) : null}
                {showData === "ET0" ? (
                  <MinMaxData
                    min={props.minHumidity}
                    max={props.maxHumidity}
                    unit="%"
                    showActual
                  />
                ) : null}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default WeatherCard;
