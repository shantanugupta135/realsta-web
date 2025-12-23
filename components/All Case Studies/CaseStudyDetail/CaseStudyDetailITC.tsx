"use client";
import React from 'react';
import './CaseStudyDetail.css';
import NavigationMenu from '../../NavigationMenu';
import RelatedArticles from '../RelatedArticles';
import { useState } from 'react';
import FormModal from '../../../components/FormModal';
import Head from 'next/head';

const details = [
    "Area: 14,000 sq. ft.",
    "Building: Emaar Digital Greens"
];

const CaseStudyDetailITC = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <section style={{ position: 'relative', minHeight: '100vh', color: 'white' }}>
                <img
                    loading="lazy"
                    src="/assets/case-study/ITC.webp"
                    alt="Hero Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <NavigationMenu />
                    <div className="customContainer">
                        <div className="row mt9 csd-cta-sction">
                            <div className="col-12 col-md-5">
                                <div className='p-heading'>Providing Branch Office for ITC's OGP Operations</div>
                                <p className='p-subtext mt-3'>
                                    <ul className='csd-subtext-list'>
                                        {details.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="csd-button-wrapper d-flex justify-content-end align-items-end">
                                    <button className='btn-secondary-custom' onClick={() => setShow(true)}>
                                        Start Investing<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                                    </button>
                                    <FormModal show={show} onClose={() => setShow(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">The Challenge</div>
                    <hr />
                    <p className="csd-text">
                        <p>ITC Limited, a world-renowned Indian conglomerate headquartered in Kolkata, with a business presence across FMCG, agribusiness, information technology, paper products, and packaging, required a 14,000 sq. ft. office space in Gurugram to serve as a strategic hub for its operations. A part of ITC’s Agri Business Division, specifically Oil Grains & Proteins (OGP) Operations, this was to function as a branch office.</p>
                        <p>The challenge was that ITC had strict SOPs and construction standards to meet, which were nearly impossible to achieve in a leased office. We successfully met these requirements while maintaining financial integrity.</p>
                        <p>The key requirements were:
                            <ul className='csd-list'>
                                <li>A prime location in Gurugram</li>
                                <li>A modern, professional workspace on a lower floor</li>
                                <li>Infrastructure to support seamless operations</li>
                                <li>Strict SOPs and standards, nearly impossible in a leased office</li>
                            </ul>
                        </p>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">Our Approach</div>
                    <hr />
                    <p className="csd-text">
                        <p>Led by CEO Dishant Malik, Realsta used its commercial real estate expertise to recommend Emaar Digital Greens for ITC’s OGP branch office, aligning with ITC’s reputation and operational needs.</p>
                        <ul>
                            <li><b>Strategic Guidance:</b> Malik convinced ITC’s leadership that a high-visibility office in Emaar Digital Greens would boost client perceptions, attract talent, and enhance operations compared to a less accessible back-office location.</li>
                            <li><b>Prime Location:</b> Emaar Digital Greens in Sector 61, Gurugram, was selected for its excellent connectivity, Grade A space, and proximity to business hubs.</li>
                            <li><b>Tailored Design:</b> The 14,000 sq. ft. space on Tower B’s 1st floor was customized with modern workstations, collaborative meeting areas, and advanced IT infrastructure for OGP operations.</li>
                            <li><b>Enhanced Branding:</b> The prestigious address of Emaar Digital Greens strengthened ITC’s market presence, unlike a back-office location that risked reducing visibility.</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">The Result</div>
                    <hr />
                    <p className="csd-text">
                        The office at Emaar Digital Greens is an active branch office for ITC’s Agri Business Division in Gurugram. The 14,000 sq. ft. space provides a modern, high-visibility workspace that aligns with ITC’s reputation as a market leader. Key outcomes included:
                        <ul>
                            <li>Enhanced Brand Visibility: The prestigious address and professional environment elevated ITC’s market presence, making it a preferred destination for clients and partners.</li>
                            <li>Strategic Advantage: Moving from a back-office location to a central hub strengthened ITC’s positioning in Gurugram’s competitive business landscape.</li>
                            <li>Strict SOPs and standards were implemented which were nearly impossible in a leased office keeping financial integrity.</li>
                        </ul>
                    </p>
                </div>
            </section>
            <RelatedArticles />
        </>
    )
}

export default CaseStudyDetailITC