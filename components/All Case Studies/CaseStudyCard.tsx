"use client";
import React from 'react';
import './CaseStudyCard.css';
import caseStudyData from '../../data/caseStudy.json';
import { useRouter } from 'next/navigation';

const CaseStudyCard = () => {

     const router = useRouter();
     const navigateTo = (path: string) => {
       router.push(path);
     };

    return (
        <section>
            <div className="customContainer">
                <div className="row">
                    {caseStudyData.map((card, idx) => (
                        <div className="col-12 col-md-6" key={idx}>
                            <div className="cs-channel-card mx-2">
                                <img
                                    loading="lazy"
                                    className="cs-channel-img"
                                    src={card.img}
                                    alt={card.alt}
                                />
                                <div className="cs-channel-details">
                                    <div className="cs-partner-name">{card.name}</div>
                                    <div className="cs-industry pt-3">{card.description}</div>
                                    <div>
                                        <button className='btn-secondary-alternative-custom' style={{ alignSelf: 'end' }} onClick={() => navigateTo(`/case-study/${card.name}`)}>
                                            Learn More<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudyCard
