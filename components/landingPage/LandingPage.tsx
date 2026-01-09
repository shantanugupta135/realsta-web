"use client";
import React, { useState, useRef, useEffect, JSX } from "react";
import { Row, Col } from "react-bootstrap";
import FAQ, { FAQItem } from "../../components/FAQ";
import { submitLandingForm } from "../../services/formService";
import Link from "next/link";
import "./landingPage.css"
import { useRouter } from "next/navigation";
import Head from "next/head";

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

const faqData: FAQItem[] = [
  {
    question: "What is the expected possession timeline for this Emaar India commercial property?",
    answer: " The property is currently under construction with possession expected in approximately 3 years."
  },
  {
    question: "What are the benefits of investing in an under-construction commercial property?",
    answer: " Investing early allows you to buy at a lower price with potential for high capital appreciation by the time of possession. Deferred payment plans also provide flexible financial options."
  },
  {
    question: "Who are the typical tenants for this property?",
    answer: "The property is expected to be leased by tier-1 corporate clients, ensuring stable and reliable rental income."
  },
  {
    question: "What is the location advantage of this project?",
    answer: " Located on Golf Course Road Extension opposite Emaar Digital Greens, it offers proximity to major business hubs and excellent connectivity via metro and expressways."
  },
  {
    question: "What flexible payment options are available?",
    answer: " Deferred payment plans are offered to align with your investment strategy, allowing you to manage cash flow efficiently."
  },
  {
    question: "What kind of returns can I expect from this investment?",
    answer: "The project offers high rental yields, some of the highest in the NCR region, with potential capital appreciation up to 60% before possession and up to 300% after possession."
  },
  {
    question: "Why should I choose Realsta as my real estate consultant?",
    answer: "Realsta is a trusted consultancy with over 14 years of experience, managing a wide range of commercial properties and serving UHNIs, NRIs, and global brands. We provide end-to-end services to maximize your investment returns."
  }
]

const paymentPlans = [
  {
    image: "/assets/landingPage/office1.png"
  },
  {
    image: "/assets/landingPage/office2.png"
  },
  {
    image: "/assets/landingPage/office3.png"
  },
];

type FormPageProps = {
  setFormSubmitted?: React.Dispatch<React.SetStateAction<boolean>>;
};

function Carousel({
  slides,
  index,
  setIndex,
}: {
  slides: { image: string }[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));
  const goTo = (i: number) => setIndex(clamp(i, 0, slides.length - 1));

  return (
    <div className="carousel-root">
      <div className="carousel-viewport">
        <div className="carousel-track">
          {slides.map((s, i) => {
            const rel = i - index;
            const isCurrent = rel === 0;
            const toRight = rel > 0;
            const hiddenLeft = rel < 0;

            const style: React.CSSProperties = {
              backgroundImage: `url(${s.image})`,
              transform: isCurrent
                ? "translateX(0) scale(1)"
                : toRight
                  ? `translateX(${rel * 90}%) scale(0.75)`
                  : "translateX(-12%) scale(0.9)",
              opacity: hiddenLeft ? 0 : 1,
              visibility: hiddenLeft ? "hidden" : "visible",
              zIndex: isCurrent ? 5 : toRight ? 4 - Math.min(rel, 3) : 0,
            };

            return (
              <article key={i} className="carousel-card" style={style}></article>
            );
          })}
        </div>
      </div>
      <button
        className="carousel-nav prev"
        onClick={() => setIndex(Math.max(index - 1, 0))}
        disabled={index === 0}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="carousel-nav next"
        onClick={() => setIndex(Math.min(index + 1, slides.length - 1))}
        disabled={index === slides.length - 1}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

function LandingPage({ setFormSubmitted }: FormPageProps): JSX.Element {
  const [disableButton, setDisableButton] = useState(false)
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));
  };
  const requiredFields = [
    "contactTiming",
    "fullName",
    "emailAddress",
    "phoneNumber"
  ];
  const isEmailValid = (email: string) => {
    if (!email) return true; // If empty, it's valid (since not required)
    // Simple email regex
    return /^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email);
  };

  const [formData, setFormData] = useState({
    contactTiming: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const isFieldInvalid = (field: string) => {
    if (!touched[field]) return false; // Only show red border if touched

    if (field === "emailAddress") {
      return formData.emailAddress.trim() !== "" && !isEmailValid(formData.emailAddress);
    }
    if (field === "phoneNumber") {
      return formData.phoneNumber.trim() === "" || formData.phoneNumber.length !== 10;
    }
    // For other fields, show red if empty
    return formData[field as keyof typeof formData]?.trim() === "";
  };
  const isFormValid =
    requiredFields.every(field => formData[field as keyof typeof formData]?.trim()) &&
    isEmailValid(formData.emailAddress) &&
    formData.phoneNumber.length === 10;

  const handleSubmit = async () => {
    if (!isFormValid) {
      // Mark all required fields as touched to show red border for invalid/empty fields
      const touchedFields: { [key: string]: boolean } = {};
      requiredFields.forEach(field => {
        touchedFields[field] = true;
      });
      setTouched(prev => ({
        ...prev,
        ...touchedFields,
      }));
      return;
    }
    try {
      setDisableButton(true)
      const message = await submitLandingForm(formData);
      // alert(
      //   "Thank you for reaching out to us!\n\nYour form has been successfully submitted. Our team will review your details and get back to you shortly. In the meantime, feel free to explore our resources or contact us directly if you need immediate assistance."
      // );

      setFormData({
        contactTiming: "",
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
      });
      setTouched({});
      setFormSubmitted?.(true);
      router.push("/ThankYou")
    } catch (error: any) {
      setDisableButton(false)
      alert("Error: " + error.message);
    }
  };
  const maxProperty = 3
  // const [propertyIndex, setPropertyIndex] = useState(0);

  // const handleChannelPrev = () => {
  //     if (propertyIndex === 0) return; // Do nothing if already at first card
  //     setPropertyIndex((prev) => prev - 1);
  // };

  // const handleChannelNext = () => {
  //     if (propertyIndex >= maxProperty) return; // Do nothing if already at last visible card
  //     setPropertyIndex((prev) => prev + 1);
  // };


  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = () => {
    if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
  };

  const handleNext = () => {
    if (carouselIndex < paymentPlans.length - 1) setCarouselIndex(carouselIndex + 1);
  };

  const [description, setDescription] = useState(false);

  return (
    <>
      <Head>
        {`<!-- Google tag (gtag.js) -->`}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17470231838"></script>
        <script>{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'AW-17470231838');`}
        </script>
        {`<!-- Hotjar Tracking Code for https://realsta.com/landingPage -->`}
        <script>
          {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6502061,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>
      </Head>
      <section className="customContainer justify-content-between d-flex">
        <Link href="/" onClick={() => window.scrollTo(0, 0)}>
          <img style={{ width: 'clamp(120px, 10vw, 500px)' }} loading="lazy" src='/assets/landingPage/logo.png' alt='' />
        </Link>

        <button className="btn-secondary-alternative-custom" onClick={() => { window.location.href = "tel:+917840001269" }}><i className="fa-solid fa-phone"></i>+91 - 7840001269</button>
      </section>
      <section className="row customContainer d-flex landing-top-form-container justify-content-between">
        <div className="col-md-5 col-sm-12 px-4 mt-3 landing-top-form-side-container">
          <p className="landing-top-form-heading">Invest Early in Emaar India’s Upcoming Commercial Property in Gurgaon</p>
          <p className="landing-top-form-description">Invest in under-construction property with low entry price, high-ROI<br />potential in Grade A office spaces and pre-leased commercial<br />properties in Gurgaon with deferred payment plans.</p>
          <div className="d-flex row landing-top-form-box">
            <div className="col-md-3 mt-1 landing-top-form-box-fields">
              <input
                type="text"
                className={` form-control bg-transparent border-1 border-bottom text-black${isFieldInvalid('fullName') ? ' border-danger' : ''}`}
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, fullName: true }))}
              />
            </div>
            <div className="col-md-3 mt-1 landing-top-form-box-fields">
              <input
                type="email"
                className={` form-control bg-transparent border-1 border-bottom text-black${isFieldInvalid('emailAddress') ? ' border-danger' : ''}`}
                placeholder="Your Email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, emailAddress: true }))}
                pattern="^[\w\.-]+@[\w\.-]+\.\w{2,}$"
                autoComplete="email"
              />
            </div>
            <div className="col-md-3 mt-1 landing-top-form-box-fields">
              <input
                type="tel"
                className={` form-control bg-transparent border-1 border-bottom text-black${isFieldInvalid('phoneNumber') ? ' border-danger' : ''}`}
                placeholder="Phone Number *"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={e => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setFormData(prev => ({
                    ...prev,
                    phoneNumber: value,
                  }));
                }}
                onBlur={() => setTouched(prev => ({ ...prev, phoneNumber: true }))}
                minLength={10}
                maxLength={10}
                pattern="\d{10}"
              />
            </div>
            <div className="col-md-2 mt-1 landing-top-form-box-fields">
              <select
                className={` form-select bg-white border-1 border-bottom text-black${isFieldInvalid('contactTiming') ? ' border-danger' : ''}`}
                name="contactTiming"
                onChange={handleChange}
                value={formData.contactTiming}
                onBlur={() => setTouched(prev => ({ ...prev, contactTiming: true }))}
              >

                <option value="">Preferred Time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening"> Evening</option>



              </select>
            </div>
            <div className="col-md-1 mt-1 landing-top-form-box-fields">
              <button
                className=' btn-secondary-alternative-custom'
                type="button"
                disabled={disableButton}
                onClick={handleSubmit}
                formMethod="post"
              >Submit</button>
            </div>
          </div>
        </div>
        <img style={{ width: 'auto', maxHeight: '400px' }} src="/assets/landingPage/topFormBuilding.png" alt=""></img>
      </section>
      <section className="customContainer">

        <h2 className="landing-why-heding">Why Choose Under Construction Emaar India’s<br />Commercial Property in Gurgaon?</h2>

        <Row style={{ backgroundColor: "#00000000" }}>
          <Col md={3} className="landing-why-box mt-5 pt-4">

            <i className="fa-solid fa-arrow-trend-up landing-icon-box mb-4"></i>
            <p className="landing-why-subHeading">High Appreciation Potential</p>
            <p className="landing-why-description">Projected appreciation<br />of up to 300% in 3 years.</p>

          </Col>
          <Col md={3} className="landing-why-box mt-5 pt-4">

            <i className="fa-solid fa-location-dot landing-icon-box mb-4"></i>
            <p className="landing-why-subHeading">Prime Location</p>
            <p className="landing-why-description">To be situated on Golf Course Road Extension<br />opposite Emaar Digital Greens.</p>
          </Col>
          <Col md={3} className="landing-why-box mt-5 pt-4">

            <i className="fa-solid fa-user-tie landing-icon-box mb-4"></i>
            <p className="landing-why-subHeading">Tier-1 Tenants</p>
            <p className="landing-why-description">Established corporate clients will lease the property<br />ensuring steady rental income.</p>
          </Col>
          <Col md={3} className="landing-why-box mt-5 pt-4">

            <i className="fa-solid fa-money-bill-wave landing-icon-box mb-4"></i>
            <p className="landing-why-subHeading">Flexible Payment Plans</p>
            <p className="landing-why-description">Deferred payment plans.</p>
          </Col>
        </Row>


      </section>
      <section className="customContainer">
        <h2 className="ip_specification_heading">Project Highlights</h2>
        <hr className="ip_hr" />
        <Row>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Developer&nbsp;</b>Emaar India - renowned for delivering premium commercial projects.&emsp;  {
              !description &&
              (<a className={` ${description ? 'linkHide' : 'linkVisible'} readMoreLink`} onClick={() => setDescription(true)}>read more</a>)
            }</p>
            <Col md={12} className={`mt-4 AccordionContent ${description ? ' accordionContentOpen' : ' accordionContentClosed'} ip_description_text`}>
              <p><b>About Emaar India</b></p>
              <p>Emaar India is a leading real estate developer known for delivering world-class residential and commercial projects. With a commitment to quality and timely delivery, Emaar India has established a strong presence in the Indian real estate market.</p></Col>
            <a className={` ${description ? 'linkVisible' : 'linkHide'} readMoreLink`} onClick={() => setDescription(false)}>read less</a>
          </Col>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Project Area&nbsp;</b>Grade A office spaces.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Unit Size&nbsp;</b>4000 sqft - 55000 sqft</p>
          </Col>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Tower 1&nbsp;</b>G+26 floor</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Tower 2&nbsp;</b>G+12 floor</p>
          </Col>
        </Row>
      </section>
      <section className="customContainer">
        <h2 className="ip_specification_heading">Investment Benefits</h2>
        <hr className="ip_hr" />
        <Row className="justify-content-between mt-5" >
          <Col md={8}>
            <Row className="mb-5 justify-content-between">
              <Col md={6} className="landing-ib-box p-4">
                <div className="d-flex mb-3">
                  <div className="landing-ib-box-count-box">
                    <p className="landing-ib-box-count m-0">1</p>
                  </div>
                  <p className="landing-ib-box-heading m-0">High Rental Yields</p>
                </div>
                <p className="landing-ib-box-description">Invest at ₹23,000/sq ft; projected appreciation of up to 300% in 3 years.</p>
              </Col>
              <Col md={6} className="landing-ib-box p-4">
                <div className="d-flex mb-3">
                  <div className="landing-ib-box-count-box">
                    <p className="landing-ib-box-count m-0">2</p>
                  </div>
                  <p className="landing-ib-box-heading m-0">Steady Income Stream</p>
                </div>
                <p className="landing-ib-box-description">Pre-leased properties offer immediate rental income upon possession.</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={6} className="landing-ib-box p-4">
                <div className="d-flex mb-3">
                  <div className="landing-ib-box-count-box">
                    <p className="landing-ib-box-count m-0">3</p>
                  </div>
                  <p className="landing-ib-box-heading m-0">Capital Appreciation</p>
                </div>
                <p className="landing-ib-box-description">Potential for up to 60% appreciation before possession up to 300% after possession with leased spaces.</p>
              </Col>
              <Col md={6} className="landing-ib-box p-4">
                <div className="d-flex mb-3">
                  <div className="landing-ib-box-count-box">
                    <p className="landing-ib-box-count m-0">4</p>
                  </div>
                  <p className="landing-ib-box-heading m-0">Reputable Developer</p>
                </div>
                <p className="landing-ib-box-description">Emaar India’s track record ensures timely delivery and quality construction.</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <img src="/assets/landingPage/emaa.jpg" alt="" style={{ width: "-webkit-fill-available", height: "-webkit-fill-available", borderRadius: "1rem" }} />
          </Col>
        </Row>

      </section>
      <section className="customContainer">
        <h2 className="ip_specification_heading">Location Advantage</h2>
        <hr className="ip_hr" />
        <Row>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Golf Course Road Extension&nbsp;</b>A prime commercial hub with high demand for office spaces opposite Emaar Digital Greens. </p>
          </Col>
          <Col md={6}>
            <p className="ip_specification_point_normal"><b>Emerging Business Hubs&nbsp;</b>Proximity to new commercial developments and infrastructure projects.</p>
          </Col>
        </Row>
      </section>
      <section className="mb-5" style={{ marginLeft: "clamp(0rem,3vw,3rem)" }}>
        <div className="row" style={{ maxWidth: '100%' }}>
          <div className="col-md-5">
            {/* <i className="fa-solid fa-arrow-trend-up landing-icon-box mb-4"></i> */}
            <p className="lp-payment-plan-heading">Why Realsta?</p>
            <p className="lp-payment-plan-description"><b>Realsta</b> is a leading real estate consultancy in Gurgaon founded in 2012, known for its data-driven approach with deep expertise as a real estate advisory in Gurgaon and its micro-markets. We manage the entire asset lifecycle - including corporate leasing, commercial property investment in Gurgaon, real estate asset management, acquisition of commercial property in Gurgaon, office design, and monetization. Thus forming an integrated ecosystem that maximizes returns and minimizes risk for a distinguished clientele that includes UHNIs, NRIs, and global brands such as Vistara and Sebia.</p>
            {/* <p className="lp-payment-plan-description"><b>₹1,360+ Cr. Funds Under Advice</b></p>
                <p className="lp-payment-plan-description"><b>22+ lakh sq. ft. Space Leased</b></p>
                <p className="lp-payment-plan-description"><b>2.86 lakh sq. ft. Under Management</b></p>
                <p className="lp-payment-plan-description"><b>14+ Years of Experience</b></p> */}
            <Row style={{ backgroundColor: "#00000000" }}>
              <Col md={6} className="landing-why-box mt-2 pt-3">

                <i className="fa-solid fa-indian-rupee-sign landing-icon-box mb-4"></i>
                <p className="landing-why-subHeading">₹1,360+ Cr. Funds Under Advice</p>


              </Col>
              <Col md={6} className="landing-why-box mt-2 pt-3">
                <i className="fa-solid fa-building-circle-check  landing-icon-box mb-4"></i>
                {/* <img loading="lazy" src="/assets/icons/commercialspace.svg" className="landing-icon-box-svg mb-4" alt="22 Lakh+ Sq. Ft. Commercial Space" /> */}
                {/* <i className="fa-solid fa-location-dot landing-icon-box mb-4"></i>s */}
                <p className="landing-why-subHeading">22+ lakh sq. ft. Space Leased</p>

              </Col>
              <Col md={6} className="landing-why-box mt-2 pt-3">
                {/* <i class="fa-solid fa-layer-group"></i> */}
                <i className="fa-solid fa-layer-group landing-icon-box mb-4"></i>
                <p className="landing-why-subHeading">2.86 lakh sq. ft. Under Management</p>

              </Col>
              <Col md={6} className="landing-why-box mt-2 pt-3 mb-5">

                {/* <i className="fa-solid fa-money-bill-wave landing-icon-box mb-4"></i> */}
                <i className="fa-solid fa-users landing-icon-box mb-4"></i>
                {/* <img loading="lazy" src="/assets/icons/14Yearsofexperience.svg" className="landing-icon-box-svg mb-4" alt="14 years experience" /> */}
                <p className="landing-why-subHeading">14+ Years of Experience</p>
              </Col>
            </Row>

          </div>
          <div className="col-md-7" style={{ minHeight: 320 }}>

            {/* <Row>
                    <Col md={4} className="p-2" >
                        <img src="/assets/landingPage/office1.png" alt=""/>
                    </Col>
                    <Col md={4} className="p-2">
                        <img src="/assets/landingPage/office3.png" alt=""/>
                    </Col>
                    <Col md={4} className="p-2">
                        <img src="/assets/landingPage/office4.png" alt=""/>
                    </Col>
                </Row> */}


            <Carousel
              slides={paymentPlans}
              index={carouselIndex}
              setIndex={setCarouselIndex}
            />


          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#181A20" }}>
        <Row className="customContainer">
          <Col md={4} >
            <p className="lp-payment-heading">Deferred<br />Payment<br />Plans</p>
            <p className="lp-payment-subtext mb-3">Flexible structures to align payments<br />with your cash flow and project milestones.</p>
          </Col>
          <Col md={4}>
            <i className="fa-solid fa-person-digging lp-payment-icon mt-3" />
            <p className="lp-payment-subtext mt-3"><b>Construction-Linked Plan (CLP).</b></p>
            <p className="lp-payment-subtext mt-2">Pay in stages as construction progresses.<br />Talk to our investment advisor for details.</p>
            <i className="fa-solid fa-sitemap lp-payment-icon mt-3" />
            <p className="lp-payment-subtext mt-3"><b>Deferred Possession Plan.</b></p>
            <p className="lp-payment-subtext mt-2">Split a small portion upfront and defer the<br /> balance until possession. Talk to our<br />investment advisor for details.</p>
          </Col>
          <Col md={4}>
            <i className="fa-solid fa-money-bill lp-payment-icon mt-3" />
            <p className="lp-payment-subtext mt-3"><b>Optimal Investments.</b></p>
            <p className="lp-payment-subtext mt-2">Leverage your capital elsewhere<br />instead of paying the entire amount upfront.</p>
            <i className="fa-solid fa-arrows-split-up-and-left lp-payment-icon mt-3" />
            <p className="lp-payment-subtext mt-3"><b>Flexi / Hybrid Plan.</b></p>
            <p className="lp-payment-subtext mt-2">Split your payment in the initial phase,<br />with the balance spread across<br />construction stages and possession.</p>
          </Col>
        </Row>
      </section>
      <section className="clients-section">
        <h2 className="clients-title">700+ Clients</h2>

        <div className="marquee-wrapper">
          <div className="marquee">

            {/* First set */}
            <div className="marquee-group">
              {logos.map((src, idx) => (
                <img
                  key={`logo-1-${idx}`}
                  src={src}
                  alt={`client-${idx}`}
                  loading="lazy"
                  className="client-logo"
                />
              ))}
            </div>

            {/* Duplicate set for infinite scroll */}
            <div className="marquee-group">
              {logos.map((src, idx) => (
                <img
                  key={`logo-2-${idx}`}
                  src={src}
                  alt={`client-dup-${idx}`}
                  loading="lazy"
                  className="client-logo"
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <FAQ data={faqData} />
      <section className="customContainer">
        <p className="lp-lower-form-heading">Get Started</p>
        <p className="lp-lower-form-description">Schedule Your Free Consultation</p>
        <div className="lp-lower-form-section">
          <div className="lp-lower-form-section-image">
            <form onSubmit={handleSubmit} noValidate className="formGrid p-5" >
              <div className="fields">
                <input
                  className={`field span2 ${isFieldInvalid('fullName') ? ' border-danger' : ''}`}
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => setTouched(prev => ({ ...prev, fullName: true }))}
                  autoComplete="given-name"
                />

                <input
                  className={`field span2 ${isFieldInvalid('emailAddress') ? ' border-danger' : ''}`}
                  name="emailAddress"
                  type="email"
                  placeholder="Your Email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  onBlur={() => setTouched(prev => ({ ...prev, emailAddress: true }))}
                  autoComplete="email"
                />
                <input
                  className={`field span2 ${isFieldInvalid('phoneNumber') ? ' border-danger' : ''}`}
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onBlur={() => setTouched(prev => ({ ...prev, phoneNumber: true }))}
                  onChange={e => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setFormData(prev => ({
                      ...prev,
                      phoneNumber: value,
                    }));
                  }}
                  autoComplete="tel"
                />
                <select
                  className={`field select span2 ${isFieldInvalid('contactTiming') ? ' border-danger' : ''}`}
                  name="contactTiming"
                  value={formData.contactTiming}
                  onChange={handleChange}
                  onBlur={() => setTouched(prev => ({ ...prev, contactTiming: true }))}
                >
                  <option value="">Preferred Contact Time</option>
                  <option value="Morning">Morning (9–12)</option>
                  <option value="Afternoon">Afternoon (12–4)</option>
                  <option value="Evening">Evening (4–7)</option>
                </select>
              </div>

              {/* RIGHT-SIDE SUBMIT BUTTON */}
              <div className="submitWrap">
                <button type='button' disabled={disableButton} className="submitBtn" onClick={handleSubmit} formMethod="post">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage