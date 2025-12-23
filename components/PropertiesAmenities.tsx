import React from 'react';
import { CardItem } from "./types";
import "./PropertiesAmenities.css"
import { Row,Col,Container } from 'react-bootstrap';

function PropertyAmenities({data}:{data:CardItem}){

    return(
      <section>
            <Row>
              <Col md={12}>
                <h2 className='ip_amenities_heading'>Amenities</h2>
                <hr className='ip_hr'/>
              </Col>
            </Row>
              {data.amenities.split(",").map((_, index) => index)
  .filter(index => index % 2 === 0)
  .map(rowStart => (
    <Row key={rowStart}>
      {[0, 1].map(offset => {
        const item = data.amenities?.split(",")[rowStart + offset];
        return (
          <Col key={rowStart + offset}>
            {item && <p className='ip_amenities_points'>{item}</p>}
          </Col>
        );
      })}
    </Row>
))}
            </section> 
    )
}

export default PropertyAmenities