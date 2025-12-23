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

const CaseStudyDetailCremica = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <section style={{ position: 'relative', minHeight: '100vh', color: 'white' }}>
                <img
                    loading="lazy"
                    src="/assets/case-study/Cremica.webp"
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
                                <div className='p-heading'>Designing Specialty Office for Cremica</div>
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
                        <p>Cremica, a leading Indian food company, widely recognized for its biscuits and diverse food products, sought a 10,000 sq. ft. corporate office in Gurugram to streamline its operations. The requirements were multifaceted, demanding maximized efficiency and a design that mirrors their prestigious brand identity.
                            <div>The key challenges were:</div>
                        </p>
                        <ul className='csd-list'>
                            <li>A Vastu-compliant, highly efficient workspace</li>
                            <li>Premium Grade A office space in a prime location with attached M.D. workstations. This project required significant effort, as we had to penetrate three floors to connect to a septic tank in the basement and install a separate line throughout.</li>
                            <li>Multiple layers of requirements, including:
                                <ul className='csd-list'>
                                    <li>Optimal space utilization</li>
                                    <li>Brand-aligned aesthetics</li>
                                    <li>Strict safety standard compliance</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">Our Approach</div>
                    <hr />
                    <p className="csd-text">
                        <ul className='csd-list'>
                            <li>
                                <b>Strategic site selection:</b>Emaar Digital Greens in Sector 61, Gurugram, was chosen for its prime location, seamless connectivity, and close proximity to key business hubs.
                            </li>
                            <li><b>Effective feedback mechanism:</b>Continuous two-way communication with office management ensured the office space perfectly aligned with their vision.</li>
                            <li><b>Pursuing perfection:</b>Despite five rounds of dismantling and redesign, the final layout precisely captured the brand’s vision.</li>
                            <li><b>Tailored layouts:</b>The 10,000 sq. ft. first-floor space in Tower A was meticulously crafted to meet Cremica’s stringent requirements. The layout incorporated Vastu-compliant configurations, ergonomic workstations, collaborative meeting spaces, and state-of-the-art IT systems.</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">The Result</div>
                    <hr />
                    <p className="csd-text">
                        The 10,000 sq. ft. office at Emaar Digital Greens serves as Cremica’s fully functional corporate hub, embodying its high standards through a modern, Vastu-compliant design.
                    </p>
                </div>
            </section>
            <RelatedArticles />
        </>
    )
}

export default CaseStudyDetailCremica