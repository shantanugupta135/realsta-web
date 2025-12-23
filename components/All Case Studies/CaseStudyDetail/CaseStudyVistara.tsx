"use client";
import React from 'react';
import './CaseStudyDetail.css';
import NavigationMenu from '../../NavigationMenu';
import RelatedArticles from '../RelatedArticles';
import { useState } from 'react';
import FormModal from '../../../components/FormModal';

const CaseStudyDetailVistara = () => {

const [show, setShow] = useState(false);

    return (
        <>
            <section style={{ position: 'relative', minHeight: '100vh', color: 'white' }}>
                <img
                    loading="lazy"
                    src="/assets/case-study/Vistara.webp"
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
                                <div className='p-heading'>Building a State-of-the-Art Training Centre for Vistara</div>
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
                        <p>When the leading airline approached Realsta to develop a state-of-the-art training centre in the heart of Gurgaon, the timeline was tight, and the expectations were high. This wasn’t a conventional office space - it needed to incorporate training zones, a porta cabin mock-up room, coordination cells, and multiple meeting areas.
                            Compliance was a significant challenge in itself, especially given the high standards demanded by a leading aviation brand.</p>
                        <p></p>
                        <p>The project required:
                            <ul className='csd-list'>
                                <li>Speed of execution</li>
                                <li>Modular design</li>
                                <li>Regulatory compliance</li>
                                <li>Future readiness</li>
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
                        <p>Realsta initiated the project by preparing a 32,000 sq. ft. facility that would incorporate:</p>

                        <ul className='csd-list'>
                            <li>Dedicated Training Zones</li>
                            <li>Meeting Rooms</li>
                            <li>Coordination Cells</li>
                            <li>Porta Cabin Mock-up Room</li>
                        </ul>
                        <p>
                            <b>Porta Cabin Mock-up Room</b>
                            <p>Replica airplane cabins were built from scratch to mimic an actual aircraft cabin. This was a first for any real estate partner in Gurgaon at the time and demanded exceptional creativity, innovation, and precision.</p>
                            <p>The entire facility was designed with modular flexibility, enabling Vistara to reconfigure the space as needed to accommodate evolving training requirements. This adaptability made it seamless to introduce and integrate new training modules.</p>
                        </p>
                        <p>
                            <b>Tackling Compliance</b>
                            <p>Achieving full airline compliance involved addressing an exhaustive list of regulations. Realsta collaborated closely with building authorities and Vistara’s internal compliance team to ensure the facility met all regulatory and safety standards.</p>
                        </p>
                        <p>
                            <b>Going the extra mile: Fire Safety Drill</b>
                            <p>Fire safety is a top priority in aviation training. Realsta organized a full-scale fire drill, coordinating with local fire departments, safety inspectors, and Vistara personnel. Executing this exercise with a large group of trainees was demanding but essential.</p>
                            <p>Realsta ensured that the drill was not just performed - it was conducted to fully compliant standards, reflecting our commitment to not just safety and excellence but also for exceeding expectations. Client delight is paramount at Realsta.</p>
                        </p>
                    </p>
                </div>
            </section>
            <section>
                <div className="customContainer">
                    <div className="csd-heading">The Result</div>
                    <hr />
                    <p className="csd-text">
                        A state-of-the-art 32,000 sq. ft. training centre - fully compliant with all safety protocols, modular to adapt to future needs, and designed as a turnkey solution for Vistara’s evolving training ecosystem. Regular fire drills, seamless compliance, and real-time adaptability made this centre a benchmark in aviation infrastructure.
                    </p>
                </div>
            </section>
            <RelatedArticles />
        </>
    )
}

export default CaseStudyDetailVistara