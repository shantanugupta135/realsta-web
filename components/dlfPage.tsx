"use client";
import React ,{useState,useEffect} from "react";
import NavigationMenu from "./NavigationMenu";
import FormModal from "./FormModal";
import { Row,Col,Container } from "react-bootstrap";
import RelatedProperties from "./RelatedProperties";
import MapEmbed from "./MapEmbed";
import './dlfPage.css';
import { getProperties } from "../services/popertyService";
import { CardItem } from "./types";
import Head from "next/head";

function DlfPage() {

    const [show, setShow] = useState(false);
    const [description,setDescription] = useState(false);
    const [parking, setParking] = useState(false);
    const [hotels, setHotels] = useState(false);
    const [companies, setCompanies] = useState(false);
    const [restaurants, setRestaurants] = useState(false);
    const [Building, setBuilding] = useState(false);
    const [cyberPark, setCyberPark] = useState(false);
    const mapLocation=`<iframe  loading="lazy" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7013.036144258879!2d77.08568709592355!3d28.494056832201643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19382985d7d1%3A0xb03bedc65fe6f2b2!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1750803460277!5m2!1sen!2sin\" width=\"100%\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`

    const [relatedProperties,setRelatedProperties]=useState<CardItem[]>([])

    useEffect(() => {
             getProperties().then(data => {
                    setRelatedProperties(data)
          })}, []);

  return (
    <div className="dlf-page">
        <Head>
            <title>DLF Cybercity Gurgaon – Premium Commercial Office Spaces</title>
         <meta name="description" content="Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity." />
        <link rel="canonical" href="https://realsta.com/property/dlf-cyber-city" />
        </Head>
        
      <section className="ip_top_section"> 
            <NavigationMenu />            
            <div className="customContainer">
                    <div className="row mt4">
                        <div className="col-12 col-md-6">
                            <h1 className="ip_header_name">DLF Cyber City, Gurgaon – Top Destination for Office Spaces</h1>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">Address</p>
                            <p className="ip_header_text">DLF Gateway Tower, DLF City,
                                                        DLF phase 3 Gurgaon</p>
                            </div>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">DLF Cyber City Gurgaon Pin Code</p>
                            <p className="ip_header_text">122022</p>
                            </div>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">DLF Cyber City Nearest Metro Station</p>
                            <p className="ip_header_text">IndusInd Bank Cyber City Metro Station | 0.25 km away, a 3-minute walk</p>
                            </div>
                            {/* <div className="ip_header_Details">
                            <h3 className="ip_header_titles">How to reach DLF Cyber City Gurgaon by Metro</h3>
                            <p className="ip_header_text">Take the Delhi Metro Yellow Line to Sikanderpur Metro Station. Transfer to the Rapid Metro Gurgaon and get off at IndusInd Bank Cyber City Metro Station, a short 3-minute walk from DLF Cyber City.</p>
                            </div> */}
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">Cyber City Gurgaon Sector</p>
                            <p className="ip_header_text">DLF Cyber City is located in Sector 24, Gurugram, Haryana.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img loading="lazy" className="ip_header_image" src={`/assets/property-images/dlf-cyber-city.webp`}/>
                        </div>
                    </div>
                    <div className="row ip_slogan_cta mt-3">
                        <div className="col-12 col-md-6">
                            <button className="btn-secondary-alternative-custom" onClick={() => setShow(true)}>CONTACT FOR PRICING<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                        </div>
                        <FormModal show={show} onClose={() => setShow(false)} />
                        <div className="col-12 col-md-6">
                            <div className="row">   
                                <div className="col-9 col-md-11 mt-2">
                                    <p className="ip_slogan" style={{alignContent: 'end'}}>
                                    DLF Cyber City is located in<br/>Sector 24, Gurugram, Haryana.
                                    {/* Consolidated offices up to <span className="ip_slogan_red">50,000 sq. ft.</span> available<br/>
                                    Customised <span className="ip_slogan_red">fitouts</span> available */}
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="customContainer mt-5 p-0">
            <Row>
                <Col md={9} sm={12}>
                    <h2 className="ip_description_heading">DESCRIPTION</h2>
                    <p className="ip_description_text">
                        DLF Cyber City Gurugram Haryana is one of the best business estates for the corporate office class of India. It is a 125-acre IT integrated complex which is a Gurgaon IT hub with 15 million square feet of international-standard office space, which is a center of international business and innovative companies. World-class infrastructure and professionally designed urban planning make it the first choice of corporations to have a desirable and dynamic address.<br/><br/>
                        Located in DLF Cyber City Phase 3, it is the epitome of innovation and sustainability. It is the first globally to be certified LEED Platinum v4.1 by a community owned by developers, a testament to its commitment to green practices. Energy-efficient systems, water-saving measures, and wellness-oriented designs all blend to make Cyber City Gurugram a product of an efficient work culture for the workers. The campus is the epitome of new urbanism, where commercial development is harmonized with environmental stewardship, marking it as a central zone of DLF Cyber City Gurugram.&emsp;
                     {
                        !description &&
                        (<a className={` ${description?'linkHide':'linkVisible'} readMoreLink`} onClick={() => setDescription(true)}>Read More</a>)
                    }
                    </p>
                </Col>
                <Col md={3} sm={12} className="ip_blue_card p-5">
                    <Row>
                        <Col md={12} sm={12}>
                             <p className="ip_blue_card_heading">KEY DETAILS</p>
                        </Col>
                        
                    </Row>
                    <Row className="mt-3">
                        <Col md={12} className="p-0">
                        <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Project Area&nbsp;&nbsp;</b>125 acres</li>
                         </ul>   
                        </Col>
                        <Col md={12} className="p-0">
                        <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Certifications&nbsp;&nbsp;</b>LEED Platinum v4.1, LEED Zero Water, WELL Health & Safety</li>
                        </ul>
                        </Col>
                        <Col md={12} className="p-0">
                         <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Office Space&nbsp;&nbsp;</b>~15 million sq. ft.</li>
                            </ul>
                        </Col>
                        <Col md={12} className="p-0">
                        <ul>
                            <li className="ip_blue_card_point_normal"><b className="ip_blue_card_point_bold">Developer&nbsp;&nbsp;</b>DLF Limited</li>
                        </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12}>
                            <button className='btn-primary-alternative-custom' onClick={() => setShow(true)}>
                                Contact for pricing<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                            </button>
                            <FormModal show={show} onClose={() => setShow(false)} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12} className={`mt-4 AccordionContent ${description ? ' accordionContentOpen' : ' accordionContentClosed'} ip_description_text`}>
                        <p>
                        DLF Cyber City Phase 3 Gurgaon is a dynamic location that is outside the pale of traditional office space. DLF Cyber City Gurgaon​ comprises an affluent neighborhood with landmark towers such as Gateway Tower and DLF Epitome. The towers have world-class IT and ITES facilities for large floor plate firms, secure buildings, and smart technologies. The precinct is the epitome of the district's reputation as a center of corporate excellence, and a major part of Cyber City Gurugram.
                        <br/><br/>
                        Another aspect of DLF City Gurgaon​ is the connectivity. Strategically located on National Highway-8, Cyber City is well connected to Delhi, IGI Airport, and industrial townships of Manesar. For those who require how to reach DLF Cyber City Gurgaon from the metro, there can be Cyber City Metro Station in the Rapid Metro with direct and convenient access, ensuring handy day-to-day connectivity. Cyber City​ is 15 minutes from the IGI Airport and 20 minutes from South Delhi, and hence DLF Cyber City Gurugram is a convenient business hub.
                        <br/><br/>
                        DLF City Gurgaon residential community, sprawling over this tract, is surrounded by high-end residential enclaves, luxury hotels, and entertainment complexes, with top work-life balance. The DLF Gurugram residential community is renowned for city living, with entertainment complexes, shopping malls, and parks at one's doorsteps. The extremely coveted location is the icing on the cake of Cyber City Gurugram's popularity, with companies and professionals fighting to get their hands on this extremely coveted location near DLF Cyber hubs.
                        <br/><br/>
                        One of the district's pulls is Cyber Hub Gurgaon, one of the most sought-after dining and shopping spots that adds zing to office life. The DLF Cyber Hub Gurgaon is a social and entertainment hub with restaurants and cafes offering something for everyone. The hub provides a laid-back setting for the employees and guests visiting for lunch parties or after-office gatherings, enhancing community culture in Cyber City.
                        <br/><br/>
                        DLF Cyber infrastructure is planned for high-performance offices. Facades of the buildings are energy-efficient, internet connectivity is excellent, and multi-level parking is there to cater to the requirements of modern-day businesses. Medical centers, gymnasiums and 24/7 support centers are a few of the facilities welcoming the inhabitants. Cyber City sector in Gurgaon provides security facilities such as fire stations and CCTV, offering the inhabitants a sense of security. 
                        <br/><br/>
                        DLF Cyber City is renowned for embracing work, leisure, and sustainability. It is situated near schools, hospitals, and recreation centers and thus an integrated location. Pedestrian corridor and park layout of the place is wellness and collaborative-friendly. DLF Cyber City Gurugram campus is a reflection of the manner in which Gurugram has grown as a global business hub with a climate conducive to innovation.
                        <br/><br/>
                        For companies, being located at Cyber City is being at the forefront of the curve of a changing world. Its global connectivity, state-of-the-art facilities, and location are all the reason business companies eager to expand or establish themselves in India require. The DLF Cyber idea promotes innovation in the form of intelligent technology strategies and green practices, responding to the requirements of visionary companies.
                        <br/><br/>
                        In brief, Cyber City is not merely a commercial complex; it's a live community revolutionizing office life in DLF City Gurgaon. Its blend of hip facilities, locational advantages, and live activities make it iconic.&emsp;
                        <a className={` ${description?'linkVisible':'linkHide'} readMoreLink`} onClick={() => setDescription(false)}>Read Less</a>
                    </p>
                    
                </Col>
            </Row>
        </section>
        <section className="customContainer">
            <Row>
                <Col md={12}>
                    <h2 className="ip_description_heading">Key Details</h2>
                    <hr className='ip_hr'/>
                    <Row>
                    <Col md={4}>
                        <p className="ip_specification_point_normal"><b>Project Area</b><br/>125 acres</p>
                    </Col>
                    <Col md={4}>
                        <p className="ip_specification_point_normal"><b>Office Space</b><br/>~15 million sq. ft.</p>
                    </Col>
                    <Col md={4}>
                        <p className="ip_specification_point_normal"><b>Developer</b><br/>DLF Limited</p>
                    </Col>
                    </Row>
                    <Row>
                     <Col md={8}>
                        <p className="ip_specification_point_normal"><b>Certifications</b><br/>LEED Platinum v4.1, LEED Zero Water, WELL Health & Safety</p>
                    </Col>
                     <Col md={4} style={{alignContent:"end"}}>
                        <button className="btn-secondary-alternative-custom" onClick={() => setShow(true)}>CONTACT FOR PRICING<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                    </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    <section className="pb-0">   
                <div className=" customContainer">
                <button
                  className='accordionHeader'
                  onClick={() => setParking(!parking)}
                >
                  <span>Cyber Hub Parking</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${parking? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                  
                </button>
                <hr className="ip_hr"/>
                 <div className={`mt-4 AccordionContent ${parking ? ' accordionContentOpen' : ' accordionContentClosed'}`}>
                    
                    <p>Cyber Hub Parking caters to guests with comfort, providing generous parking space for a hassle-free experience. The main choice, Parking 1, is a multi-level facility located close to the main entrance for easy accessibility to Cyber Hub's lively dining and entertainment options. Cyber Hub Parking also features open-air parking lots for added space, with clear signs to direct drivers. Valet service is provided during peak hours, and specifically marked areas for differently-abled visitors are there to further facilitate accessibility. With tight security and well-preserved area, Cyber Hub Parking provides a worry-free visit to this busy destination.</p>
                  </div>
                  <button
                  className='accordionHeader mt-5'
                  onClick={() => setHotels(!hotels)}
                >
                  <span>Hotels near DLF Cyber City Gurgaon</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${hotels? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                  
                </button>
                <hr className="ip_hr"/>
                 <div className={`mt-4 AccordionContent ${hotels ? ' accordionContentOpen' : ' accordionContentClosed'}`}>
                    
                    <p>DLF Cyber City Gurgaon hotels provide quality and affordable stays for corporate business travelers and tourists. Oberoi, Gurgaon, with interior luxury, provides good amenities. Trident Gurgaon is a combination of luxury with contemporary amenities, suitable for corporate business travelers. The Leela Ambience Gurugram provides trendy rooms and gourmet food, suitable for luxury stay. FabHotel New Journey Hospitality provides affordable price comfort for backpackers. Park Plaza Gurugram, city center, provides short stay and extended stay. DLF Cyber City Gurgaon hotels provide convenient accessibility to this business hub.</p>
                    <ul>
                        <li>The Oberoi, Gurgaon</li>
                        <li>Trident Gurgaon</li>
                        <li>The Leela Ambience Gurugram</li>
                        <li>FabHotel New Journey Hospitality</li>
                        <li>Park Plaza Gurugram</li>
                    </ul>
                </div>
                 <button
                  className='accordionHeader mt-5'
                  onClick={() => setCompanies(!companies)}
                >
                  <span>Companies in DLF Cyber City</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${companies? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                  
                </button>
                <hr className="ip_hr"/>
                 <div className={`mt-4 AccordionContent ${companies ? ' accordionContentOpen' : ' accordionContentClosed'}`}>
                    
                    <p>DLF Cyber City's corporate offices are a thriving hub of international and local firms, leading innovation and economic development. The crème de la crème of technology leaders Google, Microsoft, and IBM have set up large facilities here, followed by financial giants American Express, Deloitte, and KPMG. Automobile major BMW India Pvt Ltd and paints and coatings specialist Akzo Nobel India Ltd also form part of the diversified corporate profile. DLF Cyber City's corporate offices have top-class infrastructure and locational advantage and have attracted many more to this finest business destination in Gurgaon, fostering collaboration and cutting-edge innovations.</p>
                    <div className="row">
                    <div className="col-md-4">
                        <ul>
                        <li>Google</li>
                        <li>Microsoft</li>
                        <li>American Express</li>
                        <li>BMW India Pvt Ltd</li>
                        <li>Akzo Nobel India Ltd</li>
                    </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                        <li>IBM</li>
                        <li>Deloitte</li>
                        <li>KPMG</li>
                        <li>And many others</li>
                    </ul>
                    </div>
                    </div>
                </div>
                 <button
                  className='accordionHeader mt-5'
                  onClick={() => setRestaurants(!restaurants)}
                >
                  <span>Restaurants in DLF Cyber City Gurgaon</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${restaurants? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                  
                </button>
                <hr className="ip_hr"/>
                 <div className={`mt-4 AccordionContent ${restaurants ? ' accordionContentOpen' : ' accordionContentClosed'}`}>
                    
                    <p>DLF Cyber City Gurgaon restaurants offer diverse dining experience, suitable for diverse tastes in a fast-paced business setting. Burma Burma Restaurant and Tea Room offers traditional Burmese food, and Farzi Cafe offers modern Indian flavors with international influences. Made in Punjab offers rich North Indian food, and Kylin Premier offers elegant Asian food. Sammy Sosa offers Mexican cuisine, and Raas offers elegant Indian coastal cuisine. Chili's offers American comfort food. DLF Cyber City Gurgaon restaurants offer great dining experience for professionals and travelers.</p>
                    <ul>
                        <li>Burma Burma Restaurant and Tea Room</li>
                        <li>Farzi Cafe</li>
                        <li>Made in Punjab </li>
                        <li>Kylin Premier</li>
                        <li>Sammy Sosa</li>
                        <li>Raas </li>
                        <li>Chili’s</li>
                    </ul>
                </div>
              </div>
    </section>
                                        <section className="customContainer ">
         <Row className="mx-0">
            <Col xs={12} md={6} className="sidepaddingright">
            {/* <Container className='justify-content-start ip_amenities_container'>
             <Row style={{width: '-webkit-fill-available !important'}}>
            <Col> */}
            <Row>
              <Col md={12} >
                <h2 className='ip_amenities_heading'>Amenities</h2>
                <hr className='ip_hr'/>
              </Col>
            </Row>

            <Row>
             
                  <Col md={6}>
                   <p className='ip_amenities_points'>CyberHub: Premium retail & F&B destination</p>
                  </Col>
                   <Col md={6}>
                   <p className='ip_amenities_points'>Creche & Gymnasium</p>
                  </Col>                     
             
            </Row>
             <Row>
             
                  <Col md={6}>
                   <p className='ip_amenities_points'>Hospital & Medical Centres</p>
                  </Col>
                   <Col md={6}>
                   <p className='ip_amenities_points'>Banks & ATMs</p>
                  </Col>                     
             
            </Row>
            <Row>
             
                  <Col md={6}>
                   <p className='ip_amenities_points'>Fitness Centres</p>
                  </Col>
                   <Col md={6}>
                   <p className='ip_amenities_points'>Restaurants & Cafes</p>
                  </Col>                     
             
            </Row>
           <Row>
             
                  <Col md={6}>
                   <p className='ip_amenities_points'>24/7 Dedicated Customer Service</p>
                  </Col>
                   <Col md={6}>
                   <p className='ip_amenities_points'>Dedicated Fire Stations</p>
                  </Col>                     
             
            </Row>
          {/* </Col>
             </Row>
             </Container> */}
             </Col>
            <Col xs={12} md={6}  className="sidepaddingleft">
             {/* <Container className='justify-content-start'>
             <Row style={{width: '-webkit-fill-available;'}}>
            <Col> */}
            
            <Row>
            <Col md={12}>
            <h2 className="ip_specification_heading">Specifications</h2>
            <hr className="ip_hr"/>
            </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Floor Plates:&nbsp;</b>20,000–28,000 sq. ft.</p>
                </Col>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Towers:&nbsp;</b>Single high-rise tower</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Parking:&nbsp;</b>Multiple basement levels</p>
                </Col>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Security:&nbsp;</b>CCTV, access control</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p className="ip_specification_point_normal"><b>Sustainability:&nbsp;</b>Energy-efficient facade</p>
                </Col>
            </Row>
            {/* </Col>
        </Row>
        
        </Container> */}
        </Col>
    </Row>
    </section>
    <section className="customContainer">
            <Row style={{maxWidth:'100vw'}}>
                <Col md={12} >                
                    <Row>
                        <h2 className="ip_location_heading">Location</h2>
                        <Col xs={12} md={8}>                
                            <Row className='d-flex justify-content-start ip_location_description_container'>
                                <Col>                           
                                    <Row>
                                        <Col md={12}>
                                            
                                            <hr className="ip_hr"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <p className="ip_location_description">Located just off National Highway-8 in DLF Phase 3, Gurugram, DLF Cyber City offers seamless connectivity to Delhi, IGI Airport, and key industrial areas like Manesar. Surrounded by premium residential projects, 5-star hotels, and recreational hubs like CyberHub, it’s a prime business address.</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} className="ip_blue_card p-4">
                            <Container className='justify-content-start'>
                                <Row>
                                    <Col>
                            
                                        <Row>
                                            <Col md={12}>
                                                <h2 className="ip_blue_card_heading">Connectivity Details</h2>
                                                <hr className="ip_hr"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                            
                                                <Row>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li className="ip_blue_card_point_normal">NH-8: 5 mins</li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li className="ip_blue_card_point_normal">IGI Airport: 15 mins</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li className="ip_blue_card_point_normal">Cyber City Metro Station: Direct access</li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li className="ip_blue_card_point_normal">South Delhi: 20 mins</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="mt-4">
                        <button
                  className='accordionHeader'
                  onClick={() => setBuilding(!Building)}
                >
                  <span>Buildings at DLF Cyber City</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${Building? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                  
                           </button>
                <hr className="ip_hr"/>
                 <div className={`mt-4 AccordionContent ${Building ? ' accordionContentOpen' : ' accordionContentClosed'}`}>
                    
                    <p>DLF Cyber City Gurgaon hotels provide quality and affordable stays for corporate business travelers and tourists. Oberoi, Gurgaon, with interior luxury, provides good amenities. Trident Gurgaon is a combination of luxury with contemporary amenities, suitable for corporate business travelers. The Leela Ambience Gurugram provides trendy rooms and gourmet food, suitable for luxury stay. FabHotel New Journey Hospitality provides affordable price comfort for backpackers. Park Plaza Gurugram, city center, provides short stay and extended stay. DLF Cyber City Gurgaon hotels provide convenient accessibility to this business hub.</p>
                     <div className="row">
                    <div className="col-md-4">
                        <ul>
                        <li>BUILDING 6</li>
                        <li>Building 7A / 7B</li>
                        <li>Building 9A AND 9B</li>
                        <li>Building 10</li>
                        <li>DLF IQ</li>
                    </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                        <li>Cyber Greens</li>
                        <li>Epitome</li>
                        <li>Forum</li>
                        <li>Infinity</li>
                        <li>Innov8 (Bldg.8)</li>
                    </ul>
                    </div>
                    </div>
                </div>
                        </Col>
                    </Row>    
                    <Row>
                        <Col md={6} className="sidepaddingright">
                        <h2 className="ip_specification_heading">DLF Cyber Hub Gurgaon</h2>
                        <hr className="ip_hr"/>
                        <p className="ip_location_description">DLF Cyberhub Gurugram Haryana - is a leading lifestyle, entertainment and recreation centre right in the heart of the city. It covers an area of 400,000 sq. ft., and features premium restaurants, pubs, cafes, retail outlets like Zara, H&M, and Lifestyle and much more. Known for its beautifully vibrant nightlife, open-air amphitheater that sparks conversations, and theme parties, it attracts everyone from professionals and families, to tourists.</p>
                        </Col>
                        <Col md={6} className="sidepaddingleft">
                        <h2 className="ip_specification_heading">DLF Cyber City Food Court</h2>
                        <hr className="ip_hr"/>
                        <p className="ip_location_description">The first floor food court outlet of DLF Cyber City is a popular place that provides numerous quick dining options. It has multi-cuisine counters and fast food chains, which are popular among visitors and corporate employees. It is a budget-friendly, easy option for a quick lunch in the midst of the busy hub.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                         <button
                  className='accordionHeader mt-5'
                  onClick={() => setCyberPark(!cyberPark)}
                >
                  <span>Cyber Park Gurgaon</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${cyberPark? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                  
                </button>
                <hr className="ip_hr"/>
                 <div className={`mt-4 AccordionContent ${cyberPark ? ' accordionContentOpen' : ' accordionContentClosed'}`}>
                    
                    <p>DLF Cyberpark in DLF Cyber City is a next-generation office park in Sector 24, Gurugram. It has LEED Platinum-rated towers with state-of-the-art facilities such as MERV 14 air conditioning, high-performance digital infrastructure, and an events auditorium. Off NH-8, it's well-connected with Rapid Metro and airports, and therefore is the perfect choice for international businesses.</p>
                    <br/>
                    <br/>
                    <p>Famous Buildings Name with High Volume Searches in DLF Cyber City</p>
                    <ul>
                        <li><b>DLF Cyber Hub: </b> A vibrant complex with offices, restaurants, and retail.</li>
                        <li><b>Cyber Greens: </b> LEED Platinum-certified, known for sustainability.</li>
                        <li><b>DLF Gateway Tower: </b> A prominent office space for global firms.</li>
                        <li><b>DLF Corporate Park: </b> Houses top IT and Fortune 500 companies.</li>
                        <li><b>DLF Atria: </b>Modern office building with high-end facilities. These structures are landmarks of Gurugram’s commercial landscape, attracting businesses and visitors alike.</li>
                    </ul>
                </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={12} >
                            <Row>
                                <Col>
                                    <MapEmbed mapHtml={mapLocation}/>
                                </Col>
                            </Row>                        
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
         <RelatedProperties data={relatedProperties} />                               
    </div>
    
  );
}

export default DlfPage;