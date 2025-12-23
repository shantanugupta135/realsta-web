import React from "react";
import { CardItem } from "./types";
import "./PropertiesSpecification.css"
import { Row,Col,Container } from "react-bootstrap";

function PropertySpecification({data}:{data:CardItem}){
    return(
        // <Container className='justify-content-start'>
        // <Row>
        //     <Col>
            <section>
            <Row>
            <Col md={12}>
            <h2 className="ip_specification_heading">Specifications</h2>
            <hr className="ip_hr"/>
            </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Floor Plates:&nbsp;</b>{data?.floor_plates}</p>
                </Col>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Towers:&nbsp;</b>{data?.tower_spec}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Parking:&nbsp;</b>{data?.parking_spec}</p>
                </Col>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Security:&nbsp;</b>{data?.security_spec}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Sustainability:&nbsp;</b>{data?.sustainability_spec}</p>
                </Col>
            </Row>
            </section>
        //     </Col>
        // </Row>
        
        // </Container>
    )
}

export default PropertySpecification