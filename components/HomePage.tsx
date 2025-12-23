"use client";
import React, { useRef, useState, useEffect } from "react";
import './HomePage.css';
import NavigationMenu from "./NavigationMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const accordionData = [
  { title: "Micro-Market Mastery", content: "With deep on-the-ground intelligence across Gurgaon's micro-markets, we identify asymmetric commercial real estate opportunities ahead of the curve—driving alpha for institutional and global capital partners interested in office space for lease and commercial property investment in Gurgaon." },
  { title: "In-House Monetization Ecosystem", content: "Our in-house integrated model operates as a comprehensive end-to-end ecosystem, uniting multiple verticals—from acquisition and tenant profiling to office design, commercial property management, and exit. This ensures predictable monetization and complete operational control, unlocking stable, long-term value across all market cycles for our clientele." },
  { title: "Research-Led Discipline", content: "Our investment decisions are grounded in proprietary data and deep market research. This disciplined, data-driven framework enables us to deliver risk-adjusted returns in volatile environments even for niche segments like high-demand serviced office clusters." },
  { title: "Built on Principles", content: "We lead with transparency and integrity. Our reputation is built on trust, long-term alignment, and a commitment to doing what’s right—for our partners, our communities, and our portfolio of Gurgaon commercial property assets." },
];

const testimonials = [
  {
    text: "With Realsta, we are building a transparent and reliable real estate investment environment for our clients. We are a group of ambitious and competitive go-getters looking forward to getting ahead without compromising our core values and ethics.",
    author: "Dishant Malik",
    role: "Founder & CEO"
  },
  {
    text: "We strive to deliver excellence with every investment. Realsta is not just a platform but a movement towards ethical and high-return real estate investments.",
    author: "Dishant Malik",
    role: "Founder & CEO"
  },
  {
    text: "Our mission is to transform the way people invest in real estate by providing clarity, transparency, and strong investor support.",
    author: "Dishant Malik",
    role: "Founder & CEO"
  }
];

const logos = [
  "/assets/channel-partner/db.webp",
  "/assets/channel-partner/ontogeny.webp",
  "/assets/channel-partner/gabit.webp",
  "/assets/channel-partner/ve.webp",
  "/assets/channel-partner/crimson.webp",
  "/assets/channel-partner/mercados.webp",
  "/assets/channel-partner/purse.webp",
  "/assets/channel-partner/walmart-logo.webp",
  "/assets/channel-partner/vistara-logo_brandlogos.net_pvmrk.webp",
  "/assets/channel-partner/TOSHIBA_Logo.webp",
  "/assets/channel-partner/Sujan Industries.webp",
  "/assets/channel-partner/sony-vector-logo.webp",
  "/assets/channel-partner/sebia-logo-vector.webp",
  "/assets/channel-partner/Reliance-Industries-Limited-Logo.webp",
  "/assets/channel-partner/PP Jeweller.webp",
  "/assets/channel-partner/philips-logo.webp",
  "/assets/channel-partner/Mydala.webp",
  "/assets/channel-partner/McKinsey_&_Company-Logo.webp",
  "/assets/channel-partner/logo-final.webp",
  "/assets/channel-partner/Logo_blue.webp",
  "/assets/channel-partner/Kalpatru Logo.webp",
  "/assets/channel-partner/ITC_Limited_Logo.webp",
  "/assets/channel-partner/Infoglen-Logo.webp",
  "/assets/channel-partner/Hero_MotoCorp_Logo.webp",
  "/assets/channel-partner/Dell_Logo.webp",
  "/assets/channel-partner/CREMICA-LOGO-1.webp",
  "/assets/channel-partner/bitm-logo-png_seeklogo-368920.webp",
  "/assets/channel-partner/Birgma Asia logo.webp"
];

type AccordionItemProps = Readonly<{
  title: string;
  content: string;
}>;

function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordianWrap">
      <div className="accordianHeading d-flex align-items-center justify-content-between">
        <div className={isOpen ? 'accordianHeadingExpanded' : ''}>{title}</div>
        <button className="expandbutton" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
        </button>
      </div>
      {isOpen && (
        <div className={`mt-4 accordianDescription ${isOpen ? 'open' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
}

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const serviceSectionRef = useRef<HTMLElement>(null);
  const leadersSectionRef = useRef<HTMLElement>(null);
  console.log("check");

  const handleScrollToService = () => {
    serviceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToLeader = () => {
    leadersSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const channelPartners = [
    {
      name: "Vistara",
      image: "Vistara.webp",
      description: "Building a State-of-the-Art Training Centre for Vistara"
    },
    {
      name: "Sebia",
      image: "Sebia.webp",
      description: "Engineering customised diagnostic labs for Sebia"
    },
    {
      name: "ITC",
      image: "ITC.webp",
      description: "Providing Branch Office for ITC’s OGP Operations"
    },
    {
      name: "Cremica",
      image: "Cremica.webp",
      description: "Designing Specialty Office for Cremica"
    }
  ];

  const [channelIndex, setChannelIndex] = useState(0);
  const visibleCards = 3;

  const handleChannelPrev = () => {
    if (channelIndex === 0) return;
    setChannelIndex((prev) => prev - 1);
  };

  const handleChannelNext = () => {
    if (channelIndex >= channelPartners.length - visibleCards) return;
    setChannelIndex((prev) => prev + 1);
  };

  const router = useRouter(); // CHANGE: Ensure useRouter is used correctly
  const navigateTo = (path: string) => {
    router.push(path);
  };


  const GetInTouch = dynamic(() => import("./GetInTouch"), {
    loading: () => null,
  });

  return (
    <>
      <section className="hp-herosection">
        {/* Background Image (LCP) */}
        <Image
          src="/assets/HomePageBg.webp"
          alt="Commercial Real Estate Investment Advisor in Gurgaon"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hp-hero-bg"
        />

        {/* Overlay Content */}
        <div className="hp-hero-overlay">
          <NavigationMenu />

          <div className="customContainer">
            <div className="row">
              <div className="hp-herotext col-12 col-md-5">
                <div className="hp-herosubtext">
                  Gurgaon's Leading Real Estate Consultancy
                </div>

                <div className="hp-heroheading">
                  Making real estate work for you
                </div>

                <div className="button-wrapper">
                  <button
                    className="btn-secondary-custom"
                    onClick={handleScrollToLeader}
                  >
                    See Our Results
                    <i className="fa-solid fa-arrow-right p-browse-more-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={leadersSectionRef}>
        <div className="customContainer d-flex justify-content-center flex-column align-items-center">
          <div className="row">
            <div className="col-12">
              <div className="hp-commercialheading text-left text-md-center">Leaders of commercial property Investment in Gurgaon</div>
            </div>
          </div>
          <div className="row justify-content-between w-100 hp-microwrap mt-4 pb-5">
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12 col-md-6">
                  <p className="hp-micromarkets">Micro Markets. Maximum Value.</p>
                  <p className="hp-micromarkettext">
                    Founded by CEO Dishant Malik in 2012, Realsta is a leading real estate consultancy in Gurgaon, known for its data-driven approach with deep expertise as a real estate advisory in Gurgaon and its micro-markets. We manage the entire asset lifecycle - including corporate leasing, commercial property investment in Gurgaon, real estate asset management, acquisition of commercial property in Gurgaon, office design, and monetization - forming an integrated ecosystem that maximizes returns and minimizes risk for a distinguished clientele that includes UHNIs, NRIs, and global brands such as ITC, Sebia, and Vistara.
                  </p>
                  <button className="btn-secondary-alternative-custom mt-2" onClick={handleScrollToService}>
                    Our Services<i className="fa-solid fa-arrow-right p-browse-more-arrow"></i>
                  </button>
                </div>
                <div className="col-1"></div>
                <div className="hp-funds col-12 col-md-5 mt-3 mt-md-0">
                  <div className="hp-funds-under-advice">
                    <div className="fs-6">FUNDS UNDER ADVICE</div>
                    <div className="fs-1">₹1,360+ Cr</div>
                  </div>
                  <div className="hp-dividerHome"></div>
                  <div className="hp-assets-under-mgmt">
                    <div className="fs-1">2.86 Lakh</div>
                    <div className="fs-6">SQ. FT. UNDER MANAGEMENT</div>
                  </div>
                </div>
              </div>
              <div className="row text-center mt-5 g-3 hp-stat-wrap">
                <div className="col-6 col-md-3">
                  <div className="hp-stat-box">
                    <div className="d-flex align-items-center gap-3">
                      <div className="hp-icon">
                        <img loading="lazy" src="/assets/icons/14Yearsofexperience.svg" className="hp-years-of-experience-icon" alt="14 years experience" />
                      </div>
                      <div className="hp-experience-number">14+</div>
                    </div>
                    <p className="mb-0 pt-2 hp-experience-text">Years of Experience</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="hp-stat-box">
                    <div className="d-flex align-items-center gap-3">
                      <div className="hp-icon">
                        <img loading="lazy" src="/assets/icons/45Buildings.svg" className="hp-Buildings45" alt="45+ Buildings" />
                      </div>
                      <div className="hp-experience-number">45+</div>
                    </div>
                    <p className="mb-0 pt-2 hp-experience-text">Buildings</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="hp-stat-box">
                    <div className="d-flex align-items-center gap-3">
                      <div className="hp-icon">
                        <img loading="lazy" src="/assets/icons/700ChannelPartners.svg" className="hp-ChannelPartners" alt="700+ Channel Partners" />
                      </div>
                      <div className="hp-experience-number">700+</div>
                    </div>
                    <p className="mb-0 pt-2 hp-experience-text">Channel Partners</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="hp-stat-box">
                    <div className="d-flex align-items-center gap-3">
                      <div className="hp-icon">
                        <img loading="lazy" src="/assets/icons/commercialspace.svg" className="hp-commercial-space" alt="22 Lakh+ Sq. Ft. Commercial Space" />
                      </div>
                      <div className="hp-experience-number" style={{ fontSize: "22px" }}>22 Lakh+</div>
                    </div>
                    <p className="mb-0 pt-2 hp-experience-text" style={{ fontSize: "14px" }}>Sq. Ft. Commercial Space Leased</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 hp-image-box d-none d-md-block">
              <img loading="lazy" src="/assets/Section2.webp" alt="Architecture" />
            </div>
          </div>
        </div>
      </section>
      <section className="hp-our-services-wrapper pb-5" ref={serviceSectionRef}>
        <div className="customContainer">
          <div className="hp-our-services-subheading">Our Services</div>
          <div className="hp-our-services-heading pt-3">Our Umbrella Of <span className='hp-our-services-heading-bold'>Services</span></div>
          <div className="row mt-5">
            <div className="col-12 col-md-3 ">
              <div className="hp-services-card mx-3">
                <div className="hp-card-icon-wrapper">
                  <img loading="lazy" className="hp-card-icon" src="/assets/icons/InvestmentAdvisory.svg" alt="investment-advisory" />
                </div>
                <p className="hp-card-heading">Investment<br />Advisory</p>
                <p className="hp-card-text mb-5">Backed by rigorous analysis and deep market insight, our investment management platform enables UHNIs and NRIs to deploy capital in commercial property investment and more in Gurgaon with confidence—identifying high-yield opportunities and constructing resilient real estate portfolios in high-demand nodes like Emaar Digital Greens and Grand View Tower.</p>
                {<Link href="/our-services/investment-advisory" className="hp-link"><div className="hp-card-button">Learn More<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i></div></Link>}
              </div>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0">
              <div className="hp-services-card mx-3">
                <div className="hp-card-icon-wrapper">
                  <img loading="lazy" className="hp-card-icon" src="/assets/icons/AssetManagement.svg" alt="investment-advisory" />
                </div>
                <p className="hp-card-heading">Asset<br />Management</p>
                <p className="hp-card-text mb-5">We manage commercial real estate and other real estate assets with an institutional mindset—maximizing operational efficiency, enhancing tenant experience, and protecting long-term value through disciplined execution and proactive oversight.</p>
                {<Link href="/our-services/asset-management" className="hp-link"><div className="hp-card-button">Learn More<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i></div></Link>}
              </div>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0">
              <div className="hp-services-card mx-3">
                <div className="hp-card-icon-wrapper">
                  <img loading="lazy" className="hp-card-icon" src="/assets/icons/CorporateLeasing.svg" alt="investment-advisory" />
                </div>
                <p className="hp-card-heading">Corporate<br />Leasing</p>
                <p className="hp-card-text mb-5">We secure premium office spaces for lease as a leading office space rental agency aligned with the strategic objectives of global enterprises. By matching high-caliber tenants with institutional-grade assets-such as AIPL Business Club-we drive enduring value and consistent rental income for stakeholders.</p>
                {<Link href="/our-services/corporate-leasing" className="hp-link"><div className="hp-card-button">Learn More<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i></div></Link>}
              </div>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0">
              <div className="hp-services-card mx-3">
                <div className="hp-card-icon-wrapper">
                  <img loading="lazy" className="hp-card-icon" src="/assets/icons/WorkspaceSolutions.svg" alt="investment-advisory" />
                </div>
                <p className="hp-card-heading">Workspace<br />Solutions</p>
                <p className="hp-card-text mb-5">We deliver fully integrated, turnkey workspace solutions—designing, developing, and managing high-performance serviced offices that align with each client's strategic, operational, and brand objectives.</p>
                {<Link href="/our-services/workspace-solutions" className="hp-link"> <div className="hp-card-button">
                  Learn More
                  <i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i>
                </div>
                </Link>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hp-our-channel-partner">
        <div className="customContainer">
          <div className="row">
            <div className="marquee-wrapper">
              <div className="marquee">
                <div className="marquee-group">
                  {logos.map((src, idx) => (
                    <img loading="lazy" key={`1-${idx}`} className="logo" src={src} alt={`partner-${idx}`} />
                  ))}
                </div>
                <div className="marquee-group">
                  {logos.map((src, idx) => (
                    <img loading="lazy" key={`2-${idx}`} className="logo" src={src} alt={`partner-duplicate-${idx}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="hp-our-services-heading pt-3">
                Success <span className='hp-our-services-heading-bold'>Stories</span>
              </div>
            </div>
            <div className="col-2 d-none d-md-flex justify-content-end">
              <button className="hp-partner-button" onClick={handleChannelPrev} disabled={channelIndex === 0}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="hp-partner-button" onClick={handleChannelNext} disabled={channelIndex >= channelPartners.length - visibleCards}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="row overflow-hidden mt-5">
            <div className="d-none d-md-flex hp-channel-slider p-0"
              style={{
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                transform: `translateX(-${channelIndex * (100 / visibleCards)}%)`,
                width: `${(channelPartners.length / visibleCards) * 100}%`,
              }}
            >
              {channelPartners.map((partner, idx) => (
                <div className="col-4 hp-channel-wrapper" key={idx}>
                  <div className="hp-channel-card mx-2">
                    <img
                      loading="lazy"
                      className="hp-channel-img"
                      src={`/assets/channel-partner/${partner.image}`}
                      alt={partner.name}
                    />
                    <div className="hp-channel-details">
                      <div className="hp-partner-name">{partner.name}</div>
                      <div className="hp-industry pt-3">{partner.description}</div>
                      <div>
                        {<button className='btn-secondary-alternative-custom' style={{ alignSelf: 'end' }} onClick={() => navigateTo(`/case-study/${partner.name}`)}>Learn More<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i></button>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex d-md-none flex-column w-100 p-0">
              {channelPartners.map((partner, idx) => (
                <div className="col-12 hp-channel-wrapper w-100 mb-3" key={idx}>
                  <div className="hp-channel-card mx-2">
                    <img
                      className="hp-channel-img"
                      src={`/assets/channel-partner/${partner.image}`}
                      alt={partner.name}
                    />
                    <div className="hp-channel-details">
                      <div className="hp-partner-name">{partner.name}</div>
                      <div className="hp-industry pt-3">{partner.description}</div>
                      <div>
                        <button className='btn-secondary-alternative-custom' style={{ alignSelf: 'end' }}>Learn More<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="hp-our-expertise-wrapper">
        <div className="customContainer">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="hp-our-services-subheading">Our Expertise</div>
              <div className="hp-our-services-heading pt-3">How We Deliver<br /><span className='hp-our-services-heading-bold'>Performance</span></div>
            </div>
            <div className="col-12 col-md-7 mt-4 mt-md-0">
              {accordionData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="hp-leadership-wrapper">
        <div className="customContainer">
          <div className="row">
            <div className="col-12 col-md-6">
              <img loading="lazy" src="/assets/LeadershipDishant.webp" className="hp-leadership-image mt4" alt="leadership-quotes" />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-center position-relative">
              <div className="hp-leadership-quote mt-4">
                {testimonials[index].text}
              </div>
              <div className="hp-leadership-name mt-5 d-flex">
                <div className="hp-wrapper-position">
                  <div className="hp-name">{testimonials[index].author}</div>
                  <div className="hp-leadership-position mt-1">{testimonials[index].role}</div>
                </div>
                <div className="d-none d-md-flex hp-button-wrapper d-flex align-items-center gap-2">
                  <button className="hp-leadership-button m-0" onClick={handlePrev}>
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <div className="d-flex gap-2" style={{ margin: "0 1rem" }}>
                    {testimonials.map((_, i) => (
                      <span
                        key={i}
                        className={`hp-dot ${i === index ? "active" : ""}`}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="hp-leadership-button"
                    style={{ transform: "rotate(180deg)" }}
                    onClick={handleNext}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {<GetInTouch />}
    </>
  );
};

export default HomePage;