import React from "react";
import { CardItem } from "./types";
import { Row,Col } from "react-bootstrap";


function PropertiesBrands({ data }: { data: CardItem }){

console.log(data.tenents)
return(data.tenents?
    <section className="customContainer">
        <Row>
                <Col md={12}>
                    <h2 className='ip_amenities_heading'>Brands in {data.name}</h2>
                    <hr className='ip_hr' />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={12} className="d-flex flex-wrap justify-content-center align-items-center">
                    {JSON.parse(data.tenents).map((logo: string, i: number) => (
                        <img
                            loading="lazy"
                            src={'https://api.realsta.com/' + logo}
                            alt="logo"
                            key={i}
                            className="mt-4"
                            style={{ maxWidth: "clamp(8rem,10vw,10rem)", height: "auto" , marginRight: "3rem" }}
                        />
                    ))}
                </Col>
                
            </Row>
    </section>:null
)
}

export default PropertiesBrands