"use client";
import React from 'react';
import './CaseStudyDetail.css';
import NavigationMenu from '../../NavigationMenu';
import RelatedArticles from '../RelatedArticles';
import { useState } from 'react';
import FormModal from '../../../components/FormModal';
import Head from 'next/head';

const CaseStudyDetailSebia = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <section style={{ position: 'relative', minHeight: '100vh', color: 'white' }}>
                <img
                    loading="lazy"
                    src="/assets/case-study/Sebia.webp"
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
                                <div className='p-heading'>Engineering customised diagnostic labs for Sebia</div>
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
                        <p>Sebia Diagnostics India, a leading diagnostic company approached Realsta to develop a customised laboratory environment in Gurgaon, with one critical mandate: clinical precision. These labs weren’t just spaces - they were integral to life-saving diagnostics, including testing for serious medical conditions like blood cancer and thalassemia.<br />
                            The requirements were:</p>
                        <ul className='csd-list'>
                            <li>Controlled airflow to preserve sample integrity</li>
                            <li>Lockable, access-restricted zones</li>
                            <li>Partitioned environments for workflow segregation</li>
                            <li>Confidential housing of patent-secret machinery</li>
                        </ul>
                        <p>This was a space where even the smallest compromise could impact results and risk lives. Every square inch had to be engineered for precision, safety, and compliance.</p>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">Our Approach</div>
                    <hr />
                    <p className="csd-text">
                        <p>Realsta conceptualised a customised diagnostic lab environment designed for high-end testing and absolute sample integrity.</p>
                        <p>
                            <b>Sealed Zones</b>
                            <div>The lab was divided into multiple sealed compartments - each lockable, access-controlled, and equipped with specialised ventilation systems. These zones helped prevent cross-contamination and preserved the sanctity of each diagnostic workflow.</div>
                        </p>
                        <p>
                            <b>Access Control Systems</b>
                            <p>Biometric and RFID-based systems were integrated at critical junctions to restrict movement, ensuring only authorised personnel could access sensitive zones.</p>
                        </p>
                        <p>
                            <b>Confidential Integration of Patent-Secret Machinery</b>
                            <p>Several areas were designed to house cutting-edge diagnostic machines used in the testing of life-threatening conditions like blood cancer and thalassemia. These machines, protected under patent secrecy, required highly specialised infrastructure including vibration-dampening flooring, electromagnetic shielding, and secure access systems.</p>
                        </p>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">The Result</div>
                    <hr />
                    <p className="csd-text">
                        A secure, diagnostic lab environment - engineered to support cutting-edge testing, housing sensitive patent-secret medical technologies, and built to the highest clinical standards.
                    </p>
                </div>
            </section>
            <RelatedArticles />
        </>
    )
}

export default CaseStudyDetailSebia