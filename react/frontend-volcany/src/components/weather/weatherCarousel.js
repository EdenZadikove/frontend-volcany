import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCarousel,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'

const WeatherCard = lazy(() => import('../weather/weatherCard'))

const cardProps = [{
  field_name:"Corn Field",
  date:"Sunday, Dec 23",
  predicted:{
    minTemp:"16",
    maxTemp:"23",
    minHumidity:"18",
    maxHumidity:"15",
    radiation:"",
    wind:"20",
    windLastUpdated:"10:00",
    ET0:""
  },
  actual:{
    minTemp:"16",
    maxTemp:"23",
    minHumidity:"18",
    maxHumidity:"15",
    radiation:"",
    wind:"20",
    windLastUpdated:"10:00",
    ET0:"",
  }
},{
  name:"Corn Field",
  date:"Sunday, Dec 24",
  predicted:{
    minTemp:"16",
    maxTemp:"",
    minHumidity:"",
    maxHumidity:"",
    radiation:"",
    wind:"20",
    windLastUpdated:"10:00",
    ET0:""
  },
  actual:{}
},{
  name:"Corn Field",
  date:"Sunday, Dec 25",
  predicted:{
    minTemp:"16",
    maxTemp:"",
    minHumidity:"",
    maxHumidity:"",
    radiation:"",
    wind:"20",
    windLastUpdated:"10:00",
    ET0:"",
  },
  actual:{}
}]


const WeatherCarousel = (props) => {
 const {selectedField} = props;

  return (
    <CRow>
       <CCol xs="12" xl="12">
        <CCard>
          <CCardBody>
            <CCarousel animate>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <WeatherCard  fieldName={selectedField.field.field_name} {...cardProps[0]} showActual={1}></WeatherCard>
                </CCarouselItem>
                <CCarouselItem>
                <WeatherCard  fieldName={selectedField.field.field_name} {...cardProps[1]} showActual={0}></WeatherCard>
                </CCarouselItem>
                <CCarouselItem>
                   <WeatherCard  fieldName={selectedField.field.field_name}{...cardProps[2]} showActual={0}></WeatherCard>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev" className="display-block top-50px pointer height-fit-content"/>
              <CCarouselControl direction="next" className="display-block top-50px pointer height-fit-content"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default WeatherCarousel
