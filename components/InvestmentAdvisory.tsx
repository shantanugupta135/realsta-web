'use client';
import NavigationMenu from "./NavigationMenu";
import './InvestmentAdvisory.css';
import IncludedServices from "./IncludedServices";
import FAQ from "./FAQ";
import TextBrief from "./TextBrief";
import TableSection from "./TableSection";
import ReadyToTalk from "./ReadyToTalk";
import FormModal from "./FormModal";
import { useState } from "react";
import { Row,Container } from "react-bootstrap";
import Head from "next/head";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  title: string;
  content?: string;
  bulletPoints?: string[];
}

interface TableSectionItem {
  titleNormal: string;
  titleBold: string;
  tableContents: {
    heading: string;
    content: string;
    image:string;
  }[]

}

interface BriefTextItem{
    text:string;
    image:string;
}


const BriefTextData: BriefTextItem = {
  text:"At Realsta, we help investors make informed, data-driven decisions on where, when, and how to invest for commercial property investment in Gurgaon and more for maximum returns. Our strategic approach aligns market intelligence with your financial goals, ensuring every investment builds enduring wealth.",
  image:"Investment_Advisory"
}
const TableSectionData: TableSectionItem = {
  titleNormal: "Why we ",
  titleBold: "Deliver?",
  tableContents: [
    {
      heading: "Hyperlocal\nExpertise",
      content: "Specialists in high-growth zones and micro markets across Gurugram, powered by real-time intel.",
      image: "/assets/servicesTable/Hyperlocal Expertise - Under Investment Advisory.webp"
    },
    {
      heading: "In-House\nMonetization",
      content: "Integrated CRE verticals to monetize investments within a controlled environment.",
      image: "/assets/servicesTable/Inhouse Monetization - under investment advisory.webp"
    },
    {
      heading: "Data-\nDriven\nFramework",
      content: "Grounded in proprietary data and deep market research, enables us to deliver risk-adjusted returns.",
      image: "/assets/servicesTable/Data driven framework - under investment advisory.webp"
    },
    {
      heading: "14+ Years\nof Expertise",
      content: "Implementing creative investment strategies for global brands and UHNIs.",
      image: "/assets/servicesTable/14 years of expertise - under investment advisory.webp"
    }
  ]
}

const faqData: FAQItem[] = [
  {
    question: "What is commercial real estate investment, and why should I consider it?",
    answer: "Commercial real estate investment involves purchasing or leasing properties like office spaces, retail centers, or managed services coworking spaces to generate rental income or capital appreciation. It's a lucrative option in Gurgaon due to high demand for commercial property for rent and sale, offering stable returns and portfolio diversification."
  },
  {
    question: "How do your investment advisory services help me?",
    answer: "Our investment advisory services provide personalized strategies, including client profiling, market analysis, and risk-return assessments. We guide you through selecting the right investment property in Gurgaon, ensuring alignment with your financial goals and maximizing returns."
  },
  {
    question: "What types of commercial properties do you advise on?",
    answer: "We specialize in a range of Gurgaon commercial property types, including office spaces, coworking spaces, retail properties, and pre-leased properties. Whether you’re interested in commercial property for sale or lease, we tailor our advice to your needs."
  },
  {
    question: "How do you ensure the success of my commercial property investment?",
    answer: "Our commercial real estate agent team conducts thorough due diligence, deal evaluations, and market trend analysis. We also offer portfolio advisory and exit strategy planning to ensure your commercial property investment delivers long-term value and profitability."
  },
  {
    question: "What is involved in your transaction advisory process?",
    answer: "Our transaction advisory includes deal sourcing, investment appraisals, and risk assessments. We manage the entire process, from identifying high-potential commercial property for rent or sale to completing due diligence, ensuring a seamless and secure transaction."
  },
  {
    question: "Can you help me build a property portfolio?",
    answer: "Yes, our real estate advisory services include portfolio advisory, where we help you build a diversified property portfolio. We provide strategic guidance on asset selection and allocation to optimize growth in Gurgaon’s commercial real estate market."
  },
  {
    question: "How do you assist with exit strategies?",
    answer: "Our property advisor team designs exit strategies to maximize returns on your commercial property investment. We analyze market conditions and timing to recommend the best moment to sell or lease, ensuring you achieve optimal financial outcomes."
  },
  {
    question: "Why choose your firm for commercial real estate in Gurgaon?",
    answer: "As a trusted commercial real estate advisory firm, we combine deep market knowledge with a client-centric approach. Our expertise in Gurgaon’s commercial property market ensures you receive tailored solutions that drive success."
  },
  {
    question: "Have More Questions?",
    answer: "Contact our commercial real estate agent team to discuss your commercial real estate investment goals. We’re here to guide you every step of the way."
  }
]


const yourServicesData: ServiceItem[] = [
  {
    title: "Investment Strategy Advisory",
    content: "Our tailored approach ensures your investment property aligns with your financial goals. We begin with client profiling to understand your objectives, followed by in-depth market and micro-market analysis to identify high-potential opportunities in Gurgaon’s commercial property landscape. Our risk-return profiling helps you make informed decisions, balancing profitability with stability.",
    bulletPoints: [
      "Personalized client profiling for goal alignment",
      "Comprehensive market analysis for Gurgaon’s commercial real estate",
      "Risk-return profiling to optimize investment decisions"
    ]
  },
  {
    title: "Transaction Advisory",
    content: "Navigating commercial property investment requires precision. We source and evaluate deals, conduct thorough investment appraisals, and manage due diligence to ensure every transaction is secure and profitable. Whether you’re exploring commercial property for sale or lease, our expertise minimizes risks and enhances value.",
    bulletPoints: [
      "Deal sourcing tailored to your investment goals",
      "Investment appraisal and risk assessment",
      "End-to-end due diligence management"
    ]
  },
  {
    title: "Financial Structuring Advisory",
    content: "Optimize your investment advisory services with our financial structuring expertise. We design capital structures and financing strategies that align with your commercial real estate goals, ensuring cost efficiency and long-term growth in Gurgaon’s competitive market.",
    bulletPoints: [
      "Capital structure optimization for maximum returns",
      "Customized financing strategies"
    ]
  },
  {
    title: "Portfolio Advisory",
    content: "Building a robust property portfolio requires strategic foresight. Our real estate advisory services help you construct and manage a diversified portfolio of Gurgaon commercial property. From strategic decision-making to asset allocation, we ensure your investments are positioned for sustained growth.",
    bulletPoints: [
      "Strategic advisory for portfolio growth",
      "Portfolio building with diversified assets"
    ]
  },
  {
    title: "Exit Strategy Advisory",
    content: "Planning a successful exit is as critical as entering the market. Our property advisor team crafts exit strategies that maximize returns on your commercial property investment. We analyze market trends and timing to ensure you exit at the optimal moment.",
    bulletPoints: [
      "Strategic exit planning for maximum returns",
      "Market timing and trend analysis"
    ]
  }
];

function InvestmentAdvisory() {
  const [show, setShow] = useState(false);

  return (
    <>
    <Head>
          <title>Gurgaon Real Estate Investment Advisory Services | Realsta</title> 
          <meta name="description" content="Looking to invest in commercial property in Gurgaon? Our expert advisory team delivers market intelligence, portfolio planning, and investment solutions for maximum ROI." />
          <link rel="canonical" href="https://realsta.com/our-services/investment-advisory" />
      </Head>
      <section className="hero-section">
          <NavigationMenu />
        <div className="customContainer">
          <div className="row mt4 ia-cta-sction">
            <div className="col-9 col-md-7">
              <div className='ia-heading'>Investment<br />Advisory</div>
              <p className='ia-subtext mt-2'>
                Personalized Investment Management. Stable Returns.
              </p>
               <Row className="mt-3">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="ia-Marker" alt="list marker" /><span className="ia-List-text">HNIs</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="ia-Marker" alt="list marker" /><span className="ia-List-text">UHNIs</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="ia-Marker" alt="list marker" /><span className="ia-List-text">NRIs</span></li>
                        
                        </Container>
                    </Row>
                    <Row className="mt-2">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="ia-Marker" alt="list marker" /><span className="ia-List-text">Business Owners</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="ia-Marker" alt="list marker" /><span className="ia-List-text">Corporates</span></li>
                        </Container>
                    </Row>
              {/* <div className="d-flex">
                <ul className="ia-List">
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />HNIs & UHNIs</li>
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />NRIs</li>
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />HNIs & UHNIs</li>
                </ul>
                <ul className="ia-List">
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />HNIs & UHNIs</li>
                  <li className="d-flex gap-3 align-items-center" ><img src="/assets/icons/investmentAdvisoryListMarker.png" className="ia-Marker" alt="list marker" />NRIs</li>
                </ul>
              </div> */}

              <div className="col-md-5 ia-FundsUndrAdv mt-5">
                <div className="ia-FundsUndrAdvSubTxt">Funds under advice</div>
                <div className="ia-FundsUndrAdvTxt">₹1,360+ Cr</div>
              </div>
            </div>
            <div className="col-6 col-md-5 d-flex justify-content-end align-items-end gap-3">
              <button className='btn-secondary-custom mt-3' onClick={() => setShow(true)}>
                Start Investing<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
              </button>
              <FormModal show={show} onClose={() => setShow(false)} />
            </div>
          </div>
        </div>
      </section>
      <TextBrief data={BriefTextData} />
      <TableSection data={TableSectionData} />
      <IncludedServices servicesData={yourServicesData} />
      <FAQ data={faqData} />
      <ReadyToTalk />
    </>
  )
}

export default InvestmentAdvisory;