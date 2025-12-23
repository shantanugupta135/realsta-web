"use client";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import './servicesPage.css';
import ReadyToTalk from "./ReadyToTalk";
import { Container,Row } from "react-bootstrap";
import { useRouter } from "next/navigation";


function ServicesPage() {
   const router = useRouter(); // CHANGE: Ensure useRouter is used correctly
    const navigateTo = (path: string) => {
      router.push(path);
    };
    return(
        <>
            <section className="service-top-section">
                    <NavigationMenu />
                <div className="customContainer">
                <div className="services-heading-wrapper">
                    <div className="services-heading">Personalized Real Estate Advisory</div>
                    <Row className="mt-4">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="service_dot_icon" alt="list marker" /><span className="services-subtext">HNIs</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="service_dot_icon" alt="list marker" /><span className="services-subtext">UHNIs</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="service_dot_icon" alt="list marker" /><span className="services-subtext">NRIs</span></li>
                        
                        </Container>
                    </Row>
                    <Row className="mt-3">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="service_dot_icon" alt="list marker" /><span className="services-subtext">Business Owners</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="service_dot_icon" alt="list marker" /><span className="services-subtext">Corporates</span></li>
                        </Container>
                    </Row>
                    {/* <div className="d-flex">
                <ul className="ia-List">
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/lal_bindu.svg" className="ia-Marker" alt="list marker" />HNIs & UHNIs</li>
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />NRIs</li>
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />HNIs & UHNIs</li>
                </ul>
                <ul className="ia-List">
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />HNIs & UHNIs</li>
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />NRIs</li>
                </ul>
              </div> */}
                    {/* <div className="services-subtext mt-4">for HNIs, UHNIs, NRIs, Corporates & Business Owners</div> */}
                    </div>
                </div>
                <div className="row mx-5 mt-5">
                    <div className="col-10">
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="service-box row">
                        <div className="remove-side-padding col-12 col-md-4">
                          <div className="service-descriptor">
                            <div className="os_icon_wrapper">
                                <img loading="lazy" className="os_icon" src="/assets/icons/InvestmentAdvisory.svg" alt="investment-advisory" />
                            </div>
                            <p className="service-heading">Investment Advisory</p>
                            <p className="service-brief">Strategic Commercial Real Estate Investment Management for Maximum Returns</p>
                            <p className="service-discription">Choose commercial property investment in Gurgaon and more with confidence. From deal sourcing, to risk-return profiling, our investment advisory services are backed by an in-house monetization ecosystem paired with hyperlocal expertise across Gurgaon’s micro-markets, robust financial modeling and data-driven due diligence.</p>

                          </div>
                        </div>
                    <div className="remove-side-padding col-12 col-md-8" >
                      <div className="service-highlight">
                        <div className="service-image-box row">
                            <div className="col-12 d-none d-md-block">
                                <img loading="lazy" src="/assets/OurServices/service1.webp" alt="" className="service-image"/> 
                            </div>
                        
                        </div>    
                        <div className="service-highlites row">
                            <div className="service-pointers col-8">
                                <ul>
                                    <li>Investment Strategy Advisory </li>
                                    <li>Transaction Advisory </li>
                                    <li>Financial Structuring Advisory</li>
                                    <li>Portfolio Advisory</li>
                                    <li>Exit Strategy Advisory</li>
                                    </ul>
                                </div>
                            <div className="col-12 col-md-3">
                                <button className='btn-primary-custom service-button' onClick={() => navigateTo('/our-services/investment-advisory')}>Learn More<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                            </div>
                        </div>
                      </div>
                        
                    </div>
                    </div>

                    <div className="service-box row">
                        <div className="remove-side-padding col-12 col-md-4">
                          <div className="service-descriptor">
                            <div className="os_icon_wrapper">
                                <img loading="lazy" className="os_icon" src="/assets/icons/AssetManagement.svg" alt="investment-advisory" />
                            </div>
                            <p className="service-heading">Asset Management</p>
                            <p className="service-brief">Maximizing Asset Performance and Long-Term Value</p>
                            <p className="service-discription">Maximize the value of your commercial real estate with our expert asset management services. We optimize your property portfolio in Gurgaon’s dynamic market, ensuring sustainable growth and recurring income through strategic oversight and data-driven decisions.</p>

                          </div>
                        </div>
                    <div className="remove-side-padding col-12 col-md-8" >
                      <div className="service-highlight">
                        <div className="service-image-box row">
                            <div className="col-12 d-none d-md-block">
                                <img loading="lazy" src="/assets/OurServices/service2.webp" alt="" className="service-image"/> 
                            </div>
                        
                        </div>    
                        <div className="service-highlites row">
                            <div className="service-pointers col-8">
                                <ul>
                                    <li>Asset Performance Optimization</li>
                                    <li>Tenant and Lease Management</li>
                                    <li>Portfolio Strategy and Diversification</li>
                                    <li>Property Operations and Facilities Management</li>
                                    <li>Exit Strategy and Disposition Planning</li>
                                    <li>Wealth and Risk Management</li>
                                    </ul>
                                </div>
                            <div className="col-3">
                                <button className='btn-primary-custom service-button' onClick={() => navigateTo('/our-services/asset-management')}>Learn More<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                            </div>
                        </div>
                      </div>
                        
                    </div>
                    </div>

                    <div className="service-box row">
                        <div className="remove-side-padding col-12 col-md-4">
                          <div className="service-descriptor">
                            <div className="os_icon_wrapper">
                                <img loading="lazy" className="os_icon" src="/assets/icons/CorporateLeasing.svg" alt="investment-advisory" />
                            </div>
                            <p className="service-heading">Corporate Leasing</p>
                            <p className="service-brief">Premium Office Spaces Tailored for Your Business</p>
                            <p className="service-discription">Premium office space for rent in Gurgaon, crafted to elevate your business operations. Our corporate leasing services provide tailored commercial real estate solutions, ensuring your workspace aligns with your brand and goals in Gurgaon’s top business hubs.</p>

                          </div>
                        </div>
                    <div className="remove-side-padding col-12 col-md-8" >
                      <div className="service-highlight">
                        <div className="service-image-box row">
                            <div className="col-12 d-none d-md-block">
                                <img loading="lazy" src="/assets/OurServices/service3.webp" alt="" className="service-image"/> 
                            </div>
                        
                        </div>    
                        <div className="service-highlites row">
                            <div className="service-pointers col-8">
                                <ul>
                                    <li>Office Space Selection</li>
                                    <li>Leasing Support and Legal Services</li>
                                    <li>Branding and Customization</li>
                                    </ul>
                                </div>
                            <div className="col-3 ">
                                <button className='btn-primary-custom service-button' onClick={() => navigateTo('/our-services/corporate-leasing')}>Learn More<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                            </div>
                        </div>
                      </div>
                        
                    </div>
                    </div>

                    <div className="service-box row">
                        <div className="remove-side-padding col-12 col-md-4">
                          <div className="service-descriptor">
                            <div className="os_icon_wrapper">
                                <img loading="lazy" className="os_icon" src="/assets/icons/WorkspaceSolutions.svg" alt="investment-advisory" />
                            </div>
                            <p className="service-heading">Workspace Solutions</p>
                            <p className="service-brief">Flexible managed office and furnished office space in Gurgaon for seamless business productivity</p>
                            <p className="service-discription">Premium adaptive managed office spaces and bespoke interior designs in Gurgaon. We create turnkey commercial real estate environments that boost productivity and reflect your brand, tailored to your business needs in Gurgaon’s top business hubs.</p>

                          </div>
                        </div>
                    <div className="remove-side-padding col-12 col-md-8" >
                      <div className="service-highlight">
                        <div className="service-image-box row">
                            <div className="col-12 d-none d-md-block">
                                <img loading="lazy" src="/assets/OurServices/service4.webp" alt="" className="service-image"/> 
                            </div>
                        
                        </div>    
                        <div className="service-highlites row">
                            <div className="service-pointers col-8">
                                <ul>
                                    <li>Managed Offices</li>
                                    <li>Interior Designing Services</li>
                                    </ul>
                                </div>
                            <div className="col-3 ">
                                <button className='btn-primary-custom service-button' onClick={() => navigateTo('/our-services/workspace-solutions')}>Learn More<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                            </div>
                        </div>
                      </div>
                        
                    </div>
                    </div>
            </section>
            <ReadyToTalk/>
        </>
    )
 
};

export default ServicesPage;