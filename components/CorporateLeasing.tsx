"use client";
import './CorporateLeasing.css';
import NavigationMenu from "./NavigationMenu";
import IncludedServices from "./IncludedServices";
import FAQ from "./FAQ";
import TextBrief from "./TextBrief";
import TableSection from "./TableSection";
import { Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import FormModal from './FormModal';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import Image from "next/image";

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
    image: string;
  }[]

}

interface BriefTextItem {
  text: string;
  image: string;
}

const BriefTextData: BriefTextItem = {
  text: "At Realsta, we lease premium office space for rent in Gurgaon, designed to elevate your business operations. Our corporate leasing services deliver customized commercial real estate solutions, ensuring your workspace aligns with your brand and operational goals in Gurgaon’s top business districts.",
  image: "Corporate_Leasing"
}
 const ReadyToTalk = dynamic(() => import("./ReadyToTalk"), {
                      loading: () => null,
          });

const TableSectionData: TableSectionItem = {
  titleNormal: "Why Brands ",
  titleBold: "Prefer Us?",
  tableContents: [
    {
      heading: "Grade A\nOffices",
      content: "to gain a privileged address at prestigious locations in Gurugram.",
      image: "/assets/servicesTable/Grade A Offices - under corporate leasing.webp"
    },
    {
      heading: "Branding and\nCustomization",
      content: "to reflect your corporate identity and generate brand awareness.",
      image: "/assets/servicesTable/Branding and customisation - under corporate leasing.webp"
    },
    {
      heading: "Optional\nManaged Offices",
      content: "to suit your business needs across the board for all requirements.",
      image: "/assets/servicesTable/Optional Managed Offices - under corporate leasing.webp"
    },
    {
      heading: "14+ Years\nof Expertise",
      content: "With brands like Vistara, Sebia and many other leading corporate entities.",
      image: "/assets/servicesTable/14 years of expertise - under corporate leasing.webp"
    },
    {
      heading: "Micro Market\nExpertise",
      content: "In Gurgaon’s Micro Markets that make a huge impact at targeted locations.",
      image: "/assets/servicesTable/Micro market expertise - under corporate leasing.webp"
    }
  ]
}

const faqData: FAQItem[] = [
  {
    question: "What is Realsta’s corporate leasing service?",
    answer: "We lease premium office space in Gurgaon from our portfolio, tailored to your business needs with customized commercial real estate solutions for productivity and brand alignment."
  },
  {
    question: "How do you help me select the right office space?",
    answer: "We assess your business requirements and curate commercial office space in Gurgaon from our portfolio, offering personalized tours to find the perfect commercial property."
  },
  {
    question: "What types of office spaces are available?",
    answer: "Our portfolio offers furnished office space in Gurgaon and flexible office space for lease in prime areas like Emaar Digital Greens, AIPL Business Club etc. tailored to your operational needs."
  },
  {
    question: "Can I customize my office space?",
    answer: "Yes, we have expert interior designers in Gurgaon to personalize furnished office space in Gurgaon, ensuring your commercial property reflects your brand identity."
  },
  {
    question: "What lease terms can I expect?",
    answer: "We have optional flexible commercial lease agreements and managed offices for our commercial property for rent, tailored to your business with options for short-term or long-term leases."
  },
  {
    question: "How do you ensure a smooth leasing process?",
    answer: "Our leasing support includes expert guidance and regulatory compliance for commercial office space in Gurgaon, making your leasing experience seamless and secure."
  },
  {
    question: "What support do you provide for customization?",
    answer: "We work with interior designers in Gurgaon to integrate technology and custom layouts into our office space for lease, ensuring a workspace that enhances productivity."
  },
  {
    question: "Why choose Realsta for corporate leasing?",
    answer: "Trusted by leading brands like ITC and McKinsey, our commercial real estate agent team delivers premium office space in Gurgaon with tailored leasing and customization services."
  },
  {
    question: "Have more questions?",
    answer: "Get in touch"
  }
]

const yourServicesData: ServiceItem[] = [
  {
    title: "Office Space Selection",
    content: "Finding the perfect workspace starts with understanding your business needs. We assess your operational and strategic requirements to curate premium commercial office space in Gurgaon from our portfolio. Our personalized tours and market insights guide you to office space for lease in prime locations like Golf Course Road, ensuring your business thrives in an environment tailored to your vision.",
    bulletPoints: [
      "Personalized assessment of business requirements",
      "Curated selection of premium commercial property",
      "Guided tours of Gurgaon’s top business hubs"
    ]
  },
  {
    title: "Leasing Support and Legal Services",
    content: "Leasing premium office space should be seamless and secure. We provide end-to-end support, crafting tailored commercial lease agreements that align with your business goals. Our team ensures regulatory compliance and offers expert guidance throughout the leasing process, making your transition to a new commercial property for rent in Gurgaon effortless and worry-free.",
    bulletPoints: [
      "Tailored lease agreements for business flexibility",
      "Comprehensive regulatory compliance support",
      "Expert guidance for a seamless leasing experience"
    ]
  },
  {
    title: "Branding and Customization",
    content: "Your workspace should reflect your brand’s identity. We have expert interior designers in Gurgaon to create furnished office space in Gurgaon tailored to your aesthetic and functional needs. From advanced technology integration to custom layouts, we transform our commercial real estate into a space that enhances productivity and showcases your corporate vision.",
    bulletPoints: [
      "Custom designs reflecting your brand identity",
      "Advanced technology and layout integration",
      "Expert interior designers in Gurgaon",
      "Co-investment to align interests"
    ]
  }
];

function CorporateLeasing() {
  const [show, setShow] = useState(false);

  const router = useRouter(); 
   const navigateTo = (path: string) => {
     router.push(path);
   };

  return (
    <>
    {/* <Head>
      <title>Corporate Leasing in Gurgaon | Office Space Experts – Realsta</title> 
                <meta name="description" content="Need flexible, high-quality office space in Gurgaon? Realsta’s corporate leasing team offers tailored solutions. Contact us for office space leasing services." />
                <link rel="canonical" href="https://realsta.com/our-services/corporate-leasing" />
    </Head> */}
      <section className="cl-hero-section">
        <NavigationMenu />
        <div className="customContainer">
          <div className="row mt4 cl-cta-sction" >
            <div className="col-12 col-md-7">
              <div className='cl-heading'>Corporate<br />Leasing</div>
              <p className='cl-subtext mt-2'>
                Premium Office Spaces Tailored for Your Business
              </p>
              <Row className="mt-2">
                <Container>
                  <li className="d-flex gap-3 align-items-center" ><Image loading="lazy" src="/assets/icons/lal_bindu.svg" className="cl-Marker" alt="list marker" width={12} height={12}/><span className="cl-List-text">Business Owners</span></li>
                  <li className="d-flex gap-3 align-items-center" ><Image loading="lazy" src="/assets/icons/lal_bindu.svg" className="cl-Marker" alt="list marker" width={12} height={12}/><span className="cl-List-text">Corporates</span></li>
                </Container>
              </Row>
              <div className="cl-fundsUndrAdv mt-5">
                <div className="cl-fundsUndrAdvSubTxt">
                  22+ lakh<br />sq. ft.
                  <div className='cl-box-subtext'>Commercial Space Leased</div>
                </div>
                <div className="cl-vertical-line"></div>
                <div className="cl-fundsUndrAdvTxt">
                  45+
                  <div className='cl-box-subtext'>Buildings</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-5 mt-5 d-flex justify-content-end align-items-end gap-3">
              <button className='btn-secondary-custom' onClick={() => navigateTo('/property')}>
                View properties<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
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
  );
}

export default CorporateLeasing;