'use client';
import './AboutUs.css';
import NavigationMenu from './NavigationMenu';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import FormModal from "./components/FormModal";
// import { Helmet } from 'react-helmet';
import ResourcesModal from './ResourcesModal';
import { useRouter } from "next/navigation";
 import dynamic from "next/dynamic";

function AboutUs() {

    const cardData = [
        { image: '/assets/AboutUs/Dishant_Malik.webp', name: 'Dishant Malik', role: 'Founder & CEO', about: 'Dishant Malik is the Founder and CEO of Realsta Infratech Pvt. Ltd., a leading real estate advisory firm based in Gurugram. With over 14 years of industry experience, he has successfully advised and facilitated real estate strategies for numerous multinational corporations and high-net-worth individuals. Known for his strategic thinking, client-first approach, and in-depth market expertise.', linkedin: 'https://www.linkedin.com/in/dishant-malik-322233164/' },
        { image: '/assets/AboutUs/Ankit_Arora.webp', name: 'Ankit Arora', role: 'Chief Operating Officer', about: 'With over a decade of experience in the real estate industry, Ankitl excels in diverse areas such as liaising, business strategies, and administrative tasks. HIs expertise and proficiency make them a valuable asset in the field.' },
        { image: '/assets/AboutUs/Sahil_Kapoor.webp', name: 'Sahil Kapoor', role: 'Director, Corporate Leasing', about: 'With years of experience in corporate leasing, Sahil excels in providing tailored leasing solutions for businesses. Specializing in office space leasing, he offers services in lease negotiation, contract management, and strategic space planning, all aimed at optimizing space utilization and reducing costs. Sahil thrives on building strong partnerships with corporate clients, ensuring their unique needs are met with cost-effective, results-driven strategies.', linkedin: 'https://www.linkedin.com/in/sahil-kapoor-39964b302/ ' },
        { image: '/assets/AboutUs/Abbhimanyu_Syaal.webp', name: 'Abbhimanyu Syaal', role: 'Director, Sales', about: "Abbhimanyu Syaal is a seasoned professional in the real estate sector. He brings a wealth of experience and a strategic mindset to his role, contributing significantly to the company's growth and operations. His educational background from St. John's High School, Chandigarh, has laid a strong foundation for his professional journey. With a robust network in the industry, Abbhimanyu is well-regarded in the industry for his expertise and leadership.", linkedin: 'https://www.linkedin.com/in/abbhimanyu-syaal-997470217/ ' },
    ];

    const bizCards = [
        { image: '/assets/AboutUs/BlueChipCRE.webp', hoverImage: '/assets/AboutUs/BlueChipCREGrayscale.webp', imgalt: 'Blue Chip Real Estate', title: 'Blue-Chip Real Estate Only', description: 'Every asset is a rigorously selected, Grade-A commercial opportunity.' },
        { image: '/assets/AboutUs/downside-risk-mitigation.webp', hoverImage: '/assets/AboutUs/downside-risk-mitigationGrayscale.webp', imgalt: 'Downside Risk Mitigation', title: 'Downside Risk Mitigation', description: 'Our underwriting model is designed to protect capital first, then multiply it.' },
        { image: '/assets/AboutUs/HyperlocalExpertise.webp', hoverImage: '/assets/AboutUs/HyperlocalExpertiseGrayscale.webp', imgalt: 'Hyperlocal Expertise', title: 'Hyperlocal Expertise', description: 'Specialists in high-growth zones and micro markets across Gurugram, powered by real-time intel.' },
        { image: '/assets/AboutUs/inhousemonitization.webp', hoverImage: '/assets/AboutUs/inhousemonitizationGrayscale.webp', imgalt: 'In-House Monetization Ecosystem', title: 'In-House Monetization Ecosystem', description: 'Integrates all commercial real estate investment verticals—including acquisition, leasing, tenant management, office design, sale, and exit—under one roof to monetize results within a controlled environment.' },
    ]

    const file= {
        "name": "Realsta Profile",
        "path": "assets/download/resources/Realsta Profile - FINAL.pdf",
    }
    
    const [index, setIndex] = useState(0);
    const cardsPerPage = 4;

    const router = useRouter();
     const navigateTo = (path: string) => router.push(path);
 
    // const [show, setShow] = useState(false);

    const consultantLogos = {
        international: [
            "/assets/Consultant/International/JLL-Logo.webp",
            "/assets/Consultant/International/Cushman_&_Wakefield_logo.webp",
            "/assets/Consultant/International/CBRE_Group-Logo.webp",
            "/assets/Consultant/International/Colliers_logo.webp",
            "/assets/Consultant/International/Knight_Frank_Logo.webp",
            "/assets/Consultant/International/Savills_logo.webp",
            "/assets/Consultant/International/ANAROCK_Logo.webp"
        ],
        domestic: [
            "/assets/Consultant/Domestic/AltreLogo.webp",
            "/assets/Consultant/Domestic/Easydesq.webp",
            "/assets/Consultant/Domestic/Final-Logo-Crown-5-1024x240.webp",
            "/assets/Consultant/Domestic/firstlease-logo.webp",
            "/assets/Consultant/Domestic/Iconiclogo.webp",
            "/assets/Consultant/Domestic/LagonSpace.webp",
            "/assets/Consultant/Domestic/LeasingIndia.webp",
            "/assets/Consultant/Domestic/Office9am.webp",
        ]
    };

    // Add this function inside your component
    // const handleProfileDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = '/assets/download/Realsta_Company_Profile.pdf';
    //     link.download = 'Realsta_Company_Profile.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
        // Optional: show alert after download starts
        // setTimeout(() => {
        //     alert(
        //         "Thank you for downloading our report!\n\nWe’re excited to share these insights with you. Please feel free to reach out at enquiry@realsta.com if you'd like to discuss the findings further."
        //     );
        // }, 500);
    // };

    const [showModal, setShowModal] = useState(false);
        const [pendingDownload, setPendingDownload] = useState<{ path: string; name: string } | null>(null);
    
        const handleDownloadRequest = (filePath: string, fileName: string) => {
            setPendingDownload({ path: filePath, name: fileName });
            setShowModal(true);
        };
    
        const handleModalClose = () => {
            setShowModal(false);
            setPendingDownload(null);
        };
        const ReadyToTalk = dynamic(() => import("./ReadyToTalk"), {
                      loading: () => null,
          });
    
        // Download file directly from modal
        const handleModalDownload = () => {
            if (pendingDownload) {
                fetch(pendingDownload.path)
                    .then(response => {
                        if (!response.ok) throw new Error('Network response was not ok');
                        return response.blob();
                    })
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = pendingDownload.name;
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        window.URL.revokeObjectURL(url);
                        // Show thank you alert after download
                        alert(
                          "Thank you for downloading our report!\n\nWe’re excited to share these insights with you. Please feel free to reach out at enquiry@realsta.com if you'd like to discuss the findings further."
                        );
                    })
                    .catch(() => {
                        alert(
                          "Sorry we couldn’t complete your request.\nPlease check your connection or try again."
                        );
                    });
            }
            setShowModal(false);
            setPendingDownload(null);
        }

    return (
        <>
            <section className="au-section" style={{ filter: 'grayscale(50%)' }}>
                <NavigationMenu />
                <div className="customContainer">
                    <div className="row mt4">
                        <div className="col-12 col-md-7">
                            <div className='au-heading'>Micro-Level Insight.</div>
                            <div className='au-heading'>Macro-Level Investment.</div>
                            <p className='au-subtext mt-2'>
                                Realsta specializes in unlocking exceptional value—grounded in granular data and built for scale—from the most promising micro-markets of Gurugram. By combining active, high-performance commercial real estate investing with complementary CRE verticals, we are not just passive participants—we are catalysts in Gurugram's most competitive CRE corridors and micro-markets.
                            </p>
                            <hr className='au-divider' />
                            <div className="row">
                                <div className="col-4">
                                    <div className='au-details'>45+</div>
                                    <div className='au-subdetails'>Buildings</div>
                                </div>
                                <div className="col-4">
                                    <div className='au-details'>700+</div>
                                    <div className='au-subdetails'>Channel Partners</div>
                                </div>
                                <div className="col-4">
                                    <div className='au-details'>14+ Years</div>
                                    <div className='au-subdetails'>Real Estate Market Presence</div>
                                </div>
                            </div>
                            <hr className='au-divider' />
                            <div className="row">
                                <div className="col-4">
                                    <div className='au-details' style={{ fontSize: '25px' }}>₹1,360+<br />crore</div>
                                    <div className='au-subdetails'>Funds Under Advice</div>
                                </div>
                                <div className="col-4">
                                    <div className='au-details' style={{ fontSize: '25px' }}>2.86 Lakh<br />sq. ft.</div>
                                    <div className='au-subdetails'>Assets Under Management</div>
                                </div>
                                <div className="col-4">
                                    <div className='au-details' style={{ fontSize: '25px' }}>22+ lakh<br />sq. ft.</div>
                                    <div className='au-subdetails'>Commercial Space Leased</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 d-flex justify-content-start justify-content-md-end align-items-end gap-3 mt-5 mt-md-0">
                            <button className='btn-secondary-custom' onClick={() => navigateTo('/our-services/investment-advisory')}>
                                Start Investing<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                            </button>
                            <button className='btn-secondary-custom' onClick={() => navigateTo('/our-services/corporate-leasing')}>
                                Lease an Office<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="au-uniqueness-section">
                <div className="customContainer">
                    <div className="au-sub-heading-clientele">Our Uniqueness</div>
                    <div className="au-heading-clientele pt-3">What sets us <span className='au-apart-text'>apart?</span></div>
                    {/* <div className="row mt-5 au-biz-unique-section">
                        {bizCards.map((card, i) => (
                            <div className="au-biz-card col-12 col-md-3 mt-4 mt-md-0" key={i}>
                                <img loading="lazy" src={card.hoverImage} alt={card.title} className="au-biz-image default" />
                                <img loading="lazy" src={card.image} alt={card.title} className="au-biz-image hover" />
                                <div className="au-biz-description au-card-title">
                                    <h4>{card.title}</h4>
                                </div>
                                <div className="au-biz-overlay">
                                    <div className="au-biz-description">
                                        <h4>{card.title}</h4>
                                    </div>
                                    <div className="au-biz-footer">{card.description}</div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div className="row mt-5 au-biz-unique-section">
                        {bizCards.map((card, i) => (
                            <div
                                className="au-biz-card col-12 col-md-3 mt-4 mt-md-0"
                                key={i}
                            >
                                {/* Default image */}
                                {card.hoverImage && (
                                    <Image
                                        loading="lazy"
                                        src={card.hoverImage}
                                        alt={card.title}
                                        className="au-biz-image default"
                                        width={300}
                                        height={300}
                                    />
                                )}

                                {/* Hover image */}
                                {card.image && (
                                    <Image
                                        loading="lazy"
                                        src={card.image}
                                        alt={card.title}
                                        className="au-biz-image hover"
                                        width={300}
                                        height={300}
                                    />
                                )}

                                <div className="au-biz-description au-card-title">
                                    <h4>{card.title}</h4>
                                </div>

                                <div className="au-biz-overlay">
                                    <div className="au-biz-description">
                                        <h4>{card.title}</h4>
                                    </div>
                                    <div className="au-biz-footer">{card.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 col-md-9">
                            <div>
                                <div className='d-flex align-items-start align-items-md-center au-custom-gap-4 flex-column flex-md-row'>
                                    <div className="au-clientele-includes">Our Clientele Includes</div>
                                    <ul className='au-clientele-list mb-0 d-sm-flex flex-sm-column flex-md-row'>
                                        <li>HNIs & UHNIs</li>
                                        <li>NRIs</li>
                                        <li>Corporates & Business Owners</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 d-flex d-flex justify-content-start justify-content-md-end">
                            {/* <FormModal show={show} onClose={() => setShow(false)} /> */}
                                <ResourcesModal show={showModal} onClose={handleModalClose} onDownload={handleModalDownload} />
                            <button
                                type="button"
                                className="btn-secondary-alternative-custom"
                                onClick={() => handleDownloadRequest(file.path, file.name.endsWith('.pdf') ? file.name : file.name + '.pdf')}
                            >
                                Download Corporate Profile
                                <i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='au-vision'>
                <div className="customContainer">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='au-vision-heading'>VISION</div>
                            <Image loading="lazy" className='au-vision-img' src='/assets/AboutUs/vision.webp' alt='vision' 
                            width={480} height={134}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="au-vision-text">
                                To be globally synonymous with Grade-A commercial real estate investment.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='au-mission'>
                <div className="customContainer">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='au-mission-heading'>MISSION</div>
                            <Image loading="lazy" className='au-mission-img' src='/assets/AboutUs/mission.webp' alt='vision' width={480}
                                        height={134} />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="au-mission-text">
                                Deliver exceptional long-term value to clients by identifying, engineering and executing the highest yield opportunities in Grade-A commercial assets.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='customContainer'>
                <div className="au-core-values">
                    <div className="au-core-value-heading">
                        Our Core <span className='au-value-text'>Values</span>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                            <div className="au-core-card au-rigor">
                                <div className="au-overlay">
                                    <h3>Reliability</h3>
                                    <p>Trusted by MNCs & UHNIs for 14+ years, we manage wealth steadfastly, even during COVID.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="au-core-card au-transparency">
                                <div className="au-overlay">
                                    <h3>Transparency</h3>
                                    <p>Honest, data-driven transparency builds trust, enabling confident, high-return investments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="au-core-card au-alignment">
                                <div className="au-overlay">
                                    <h3>Expertise</h3>
                                    <p>Results-driven expertise in investing, leasing, & value creation with deep market insight.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="au-core-card au-performance">
                                <div className="au-overlay">
                                    <h3>Performance</h3>
                                    <p>Long-term, risk-adjusted returns deliver superior performance over traditional assets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='au-services'>
                <div className="customContainer">
                    <div className="row">
                        <div className="col-12 col-md-5 au-services-left-heading">services</div>
                        <div className="col-12 col-md-7  au-services-right-heading">Making Real<br />Estate Work<br />for you</div>
                    </div>
                    <div className='row au-services-list-wrapper'>
                        <div className="col-12 col-md-5 pt-2 d-flex flex-column align-items-start justify-content-evenly">
                            <p className='au-service-description'>Realsta is a Gurgaon-based real estate advisory firm offering end-to-end solutions for property investment, management, and design. We cater to UHNIs and NRIs, providing services from acquisition and legal support to interior execution and strategic asset management.</p>
                            <button className='btn-secondary-alternative-custom' onClick={() => navigateTo('/our-services')}>Learn More<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                        </div>
                        <div className="col-12 col-md-7 pt-4">
                            <ul className='au-services-list'>
                                <li><Link href="/our-services/investment-advisory"><span>Investment Management</span><i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></Link></li>
                                <li><Link href="/our-services/asset-management"><span>Asset Management</span><i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></Link></li>
                                <li><Link href="/our-services/corporate-leasing"><span>Corporate Leasing</span><i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></Link></li>
                                <li><Link href="/our-services/workspace-solutions"><span>Managed Commercial Spaces</span><i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></Link></li>
                                {/* <li>Office Designing <i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='min-vh-100'>
                <div className="customContainer">
                    <div className="row">?
                        <div className="col-10">
                            <div className="au-subheading-leader">Our team</div>
                            <div className="au-heading-leader pt-3">leadership</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {cardData.slice(index, index + cardsPerPage).map((card, i) => (
                            <div className="au-team-card col-12 col-md-3 mt-4 mt-md-0" key={i}>
                                <img loading="lazy" src={card.image} alt={card.name} className="au-team-image" />
                                <div className="au-team-overlay">
                                    <p className="au-team-description">
                                        {card?.about}
                                    </p>
                                    <div className="au-team-footer">
                                        <div>
                                            <h5>{card.name}</h5>
                                            <small>{card.role}</small>
                                        </div>
                                        <div className="au-social-icons">
                                            <a href={card?.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <section className="au-consultants">
                <div className="customContainer py-5">
                    <div className="row au-consulatnt-row">
                        <span className='au-international-heading'><span className='au-apart-text' style={{ color: '#DD2525' }}>International</span> Property Consultants</span>
                        <hr className='ip_hr' />
                    </div>
                    
                    <div className="row mt4">
                        <div className="col-12 au-consultant-logo">
                            {consultantLogos.international.map((imgPath, idx) => (
                                <img loading="lazy" src={imgPath} alt="" className='au-intntl' key={idx} />
                            ))}
                        </div>
                    </div>
                    <div className="row mt6 au-consulatnt-row">
                        <span className='au-domestic-heading'><span className='au-apart-text' style={{ color: '#DD2525' }}>Domestic</span> Property Consultants</span>
                        <hr className='ip_hr' />
                    </div>
                    
                    <div className="row mt3">
                        <div className="col-12 au-consultant-logo">
                            {consultantLogos.domestic.map((imgPath, idx) => (
                                <img loading="lazy" src={imgPath} alt="" className='au-intntl' key={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            { <ReadyToTalk />}
        </>
    );
}

export default AboutUs;