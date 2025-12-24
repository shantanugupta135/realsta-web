import React from "react";
import { CardItem } from "./types";
import "./PropertiesLocation.css"
import MapEmbed from "./MapEmbed";
import { Col, Container, Row } from "react-bootstrap";
import "../components/IndivisualProperties/individualPropertiesPage.css";

function PropertyLocation({data}:{data:CardItem}){
    return(
        <section className="customContainer">
            {/* <Row style={{maxWidth:'100vw'}}>
                <Col md={12} >                 */}
                    <Row>
                        {/* <Col xs={12} md={6}>                
                            <Row className='d-flex justify-content-start ip_location_description_container'> */}
                                <Col xs={12} md={6} className="sidepaddingright">                           
                                    <Row>
                                        <Col md={12}>
                                            <h2 className="ip_location_heading">Location</h2>
                                            <hr className="ip_hr"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <p className="ip_location_description" dangerouslySetInnerHTML={{ __html: data?.location_description }} />
                                        </Col>
                                    </Row>
                                </Col>
                            {/* </Row>
                        </Col> */}
                        <Col xs={12} md={6} className="sidepaddingleft">
                            {/* <Container className='justify-content-start'> */}
                                <Row className="ip_location_connectivity_conatiner">
                                    {/* <Col>
                            
                                        <Row> */}
                                            <Col md={12}>
                                                <h2 className="ip_conectivity_header">Connectivity Details</h2>
                                                <hr className="ip_hr"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                            {data && data?.connectivity_details?.split(",")
                                            .map((_, i) => i)
                                            .filter(i => i % 4 === 0) // Every 4 items = a group
                                            .map(groupStart => {
                                            const group = data?.connectivity_details?.split(",").slice(groupStart, groupStart + 4);
                                            return (
                                                <Row>
                                                    <Col md={6}>
                                                        <ul>
                                                        {group.slice(0, 2).map((value, idx) => (
                                                            <li className="ip_connectivity_pointers" key={idx}>{value}</li>
                                                        ))}
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul>
                                                        {group.slice(2, 4).map((value, idx) => (
                                                            <li className="ip_connectivity_pointers" key={idx}>{value}</li>
                                                        ))}
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            )})}
                                            </Col>
                                        {/* </Row>
                                    </Col> */}
                                </Row>
                            {/* </Container> */}
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={12} >
                            <Row>
                                <Col>
                                    <MapEmbed mapHtml={data?.geo_location}/>
                                </Col>
                            </Row>                        
                        </Col>
                    </Row>
                {/* </Col>
            </Row> */}
        </section>
    )
}

export default PropertyLocation