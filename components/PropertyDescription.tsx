import React,{useState} from "react";
import "./PropertyDescription.css"
import { CardItem } from "./types";
import { Row,Col} from "react-bootstrap";
import FormModal from './FormModal';

interface propType{
    description:string
    keyDetails:{
        area:string
        certifications:string
        buildingType:string
        developer:string
    }
}

function PropertyDescription({data}:{data:CardItem}){
    const [show, setShow] = useState(false);
    const [description,setDescription] = useState(false);
    return(
        <section className="customContainer mt-5">
            <Row>
                <Col md={6} sm={12}>
                    <h2 className="ip_description_heading">DESCRIPTION</h2>
                    <p className="ip_description_text" dangerouslySetInnerHTML={{ __html: data?.description }} />
                     {
                        data.description_extended && !description &&
                        (<a className={` ${description?'linkHide':'linkVisible'} readMoreLink`} onClick={() => setDescription(true)}>Read More</a>)
                    }
                </Col>
                <Col md={6} sm={12} className="ip_blue_card p-4">
                    <Row>
                        <Col md={6} sm={12}>
                             <p className="ip_blue_card_heading">KEY DETAILS</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <button className='btn-primary-alternative-custom' onClick={() => setShow(true)}>
                                Contact for pricing<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                            </button>
                            <FormModal show={show} onClose={() => setShow(false)} />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                        <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Project Area&nbsp;&nbsp;</b>{data?.area}</li>
                         </ul>   
                        </Col>
                        <Col md={6}>
                        <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Certifications&nbsp;&nbsp;</b>{data?.certifications}</li>
                        </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                         <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Building Type&nbsp;&nbsp;</b>{data?.building_type}</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                        <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Developer&nbsp;&nbsp;</b>{data?.developer}</li>
                        </ul>
                        </Col>
                    </Row> 
                </Col>
            </Row>
            <Row>
                     <Col md={12} className={`mt-4 AccordionContent ${description ? ' accordionContentOpen' : ' accordionContentClosed'} ip_description_text`}>
                            {(<div className="ip_description_text" dangerouslySetInnerHTML={{ __html: data?.description_extended }} />)}
                            <a className={` ${description?'linkVisible':'linkHide'} readMoreLink`} onClick={() => setDescription(false)}>Read Less</a>
                    </Col>
            </Row>

        </section>
    )
}

export default PropertyDescription