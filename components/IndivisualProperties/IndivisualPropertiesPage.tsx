"use client";
import React from "react";
import { CardItem } from "../types";
import PropertyDescription from "../../components/PropertyDescription";
import PropertyAmenities from "../../components/PropertiesAmenities";
import {getProperty} from "../../components/PropertiesJsonParser"
import PropertySpecification from "../../components/PropertiesSpecification";
import PropertyLocation from "../../components/PropertiesLocation";
import PropertyHeader from "../../components/PropertiesHeader";
import RelatedProperties from "../../components/RelatedProperties";
import ReadyToTalk from "../ReadyToTalk";
import { useParams, useRouter } from 'next/navigation';
import { Row, Col } from "react-bootstrap";
import "./individualPropertiesPage.css";
import { useEffect, useState } from "react";
import { getProperties } from "../../services/popertyService";
import PropertyMeta from "./PropertyMeta";
import PropertiesAvailableTable from "../../components/propertiesAvailableTable";
import PropertiesBrands from "../../components/PropertiesBrands";
import PropertiesBrocure from "../../components/propertiesBrocure";
import PropertiesFloorPlan from "../../components/PropertiesFloorPlan";


interface desctiptionType{
    description:string
    keyDetails:{
        area:string
        certifications:string
        buildingType:string
        developer:string
    }
}

interface propertyMeta{
    metaTitle?:string
    metaDescription?:string
    url?:string
}


function IndivisualPropertiesPage({prop_url}: {prop_url?: string}){

    // const id = Number(useParams<{ id: string }>().id);
    const url=prop_url
    const [relatedProperties,setRelatedProperties]=useState<CardItem[]>([])
    const [propertyData,setPropertyData]=useState<CardItem>()
    const [propertyMetaData,setPropertyMetaData]=useState<propertyMeta>()
    const navigate=useRouter()

    useEffect(() => {
        getProperties().then(data => {
            const property = data.find((property) => property.url === url);
            if (property){
                property.card_image = 'https://api.realsta.com/' + property.card_image;
                 setPropertyData(property);
                if (property) {
                    setPropertyMetaData({
                     metaTitle: property.metaTitle,
                     metaDescription: property.metaDescription,
                    url:  property.url
                });
                }
            setRelatedProperties(data.filter((property) => property.url !== url));
            }
            else{
                navigate.push('*')
            }
           
        });
    }, [url]);
    // let propertyData:CardItem=getProperty(url);

    return(
    <>
    {/* props={props.description,props.keyDetails} */}
    {/* <PropertyDescription props={props.description,props.keyDetails}/> */}
    {/* <Helmet>
        {propertyData && <title>{propertyData?.metaTitle}</title>}
        {propertyData && <meta name="description" content={propertyData.metaDescription} />}
        {propertyData && <link  rel="canonical" href={`https://realsta.com/property/${propertyData.url}`}/>}
    </Helmet> */}
    {propertyMetaData&&<PropertyMeta data={propertyMetaData}></PropertyMeta>}
    {propertyData &&<PropertyHeader data={propertyData}/>} 
    {propertyData &&<PropertyDescription data={propertyData}/>}
        <Row className="customContainer">
        <Col xs={12} md={6} className="sidepaddingright">
             {propertyData &&<PropertyAmenities data={propertyData}/>}
        </Col>
        <Col xs={12} md={6} className="sidepaddingleft">
             {propertyData &&<PropertySpecification data={propertyData}/>}
        </Col>
    </Row>
    {/* {propertyData?.brocher && propertyData?.floor_plan} */}
     <Row className="customContainer">
        
             {propertyData?.floor_plan && <Col xs={12} md={6} className="sidepaddingright"><PropertiesFloorPlan data={propertyData}/></Col>}
        
        
             {propertyData?.brocher && <Col xs={12} md={6} className="sidepaddingleft"><PropertiesBrocure data={propertyData}/> </Col>}
       
    </Row>
    
    

    {propertyData?.available_space && <PropertiesAvailableTable data={propertyData}/> }
    {propertyData?.tenents && <PropertiesBrands data={propertyData}/>}
    {propertyData &&<PropertyLocation data={propertyData}/>}
    {relatedProperties &&<RelatedProperties data={relatedProperties} />}
    <ReadyToTalk />
    </>
    )
}

export default IndivisualPropertiesPage