"use client";
import './WorkspaceSolutions.css';
import NavigationMenu from "./NavigationMenu";
import IncludedServices from "./IncludedServices";
import FAQ from "./FAQ";
import TextBrief from "./TextBrief";
import TableSection from "./TableSection";
<<<<<<< HEAD
import ReadyToTalk from './ReadyToTalk';
import { Row,Container } from 'react-bootstrap';
import { useState } from 'react';
import FormModal from './FormModal';
import Head from 'next/head';

=======
import { Row,Container } from 'react-bootstrap';
import { useState } from 'react';
import FormModal from './FormModal';
import dynamic from "next/dynamic";
>>>>>>> 7c3b30b (initial commit)

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  title: string;
  content?: string;
  bulletPoints?: string[];
  link?: string;
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

<<<<<<< HEAD
interface BriefTextItem{
=======
interface BriefTextItem {
>>>>>>> 7c3b30b (initial commit)
    text:string;
    image:string;
}

const BriefTextData: BriefTextItem = {
  text:"At Realsta, our Workspace Solutions deliver premium managed office and serviced office spaces with bespoke interior designs in Gurgaon. We create turnkey commercial real estate environments that boost productivity and reflect your brand, tailored to your business needs in Gurgaon’s top business hubs.",
  image:"Workplace_Solutions"
}
<<<<<<< HEAD
=======
 const ReadyToTalk = dynamic(() => import("./ReadyToTalk"), {
                      loading: () => null,
          });

>>>>>>> 7c3b30b (initial commit)
const TableSectionData: TableSectionItem = {
  titleNormal: "Why Businesses are choosing ",
  titleBold: "Managed Services?",
  tableContents: [
    {
      heading: "No Lock-In\nLease",
      content: "With Faster Market Entry that lets you focus on making money.",
      image: "/assets/servicesTable/No lock in lease - udner workspace solutions.webp"
    },
    {
      heading: "Better\nEmployee\nExperience",
      content: "With Custom Spaces for Branding and tailored environments.",
      image: "/assets/servicesTable/better employee experience - under workspace solutions.webp"
    },
    {
      heading: "One Bill for\nEverything",
      content: "All amenities and services under one bill , with one partner.",
      image: "/assets/servicesTable/one bill for everything - under workspace solutions.webp"
    },
    {
      heading: "Up to\n30% Cost\nSavings",
      content: "Bundled services that save on maintenance and management.",
      image: "/assets/servicesTable/upto 30_ cost savings - under workspace solutions.webp"
    },
    {
      heading: "Dedicated\nCRM\nManager",
      content: "A dedicated manager provides support for all your business needs.",
      image: "/assets/servicesTable/dedicated CRM manager - workspace solutions.webp"
    }
  ]
}

const faqData: FAQItem[] = [
  {
    question: "When can I move to a managed office?",
    answer: "Managed offices typically go live within 30 days with minimal downtime and faster go-live for your organization."
  },
  {
    question: "Are the lease terms negotiable?",
    answer: "Yes, managed offices offer flexible terms that are adjusted to your business needs, unlike the traditional long-term leases."
  },
  {
    question: "And initial capital spending (CAPEX)?",
    answer: "Zero initial CAPEX. The provider covers all the initial setup and infrastructure costs so that you can spend your budget on the operations of the business."
  },
  {
    question: "Can managed offices grow with my increasing team?",
    answer: "Absolutely. Managed offices are designed for seamless scalability, and you can scale up or scale down at will."
  },
  {
    question: "Will I have to deal with more than one vendor for services?",
    answer: "Not at all. Managed offices provide one point of contact and full control—from maintenance to IT—all in one package."
  },
  {
    question: "How effective is space use in a managed office?",
    answer: "Equipped offices optimize asset utilization, with room designed according to the needs of your staff to avoid wastage."
  },
  {
    question: "Are the offices technology-ready?",
    answer: "Yes, they do encompass intelligent, technology-enabled rooms that enhance your digital workflow and collaboration solutions."
  },
  {
    question: "What type of amenities am I entitled to?",
    answer: "Expect amenity-rich areas like lounges, breakout areas, meeting rooms, cafes, and so on—areas that foster the health and productivity of the employee."
  },
  {
    question: "Will I be stuck with a permanent office layout?",
    answer: "Not at all. Managed offices provide tailored designs and brand-centric layouts that mirror your identity and scale with your team's needs."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing is comprehensive, including rent, utilities, maintenance, and services—there are no surprises or variable secrets."
  },
  {
    question: "Are managed offices future-proof?",
    answer: "In fact, they are future-proof and scalable, designed to adjust to your changing business and workplace strategy."
  },
  {
    question: "Have more questions?",
    answer: "CTA: Visit www.goflexoffices.com "
  }
];

const yourServicesData: ServiceItem[] = [
  {
    title: "GoFlex Offices",
    content: "Move into a hassle-free workspace designed for efficiency. GoFlex managed office solutions provide fully equipped commercial office space in Gurgaon, complete with amenities like high-speed Wi-Fi, housekeeping, and pantry services. We handle all operational details, allowing you to focus on your business in prime locations like Golf Course Road, ensuring scalability and flexibility for your team.",
    bulletPoints: [
      "Fully equipped offices with all-inclusive amenities",
      "Scalable and flexible workspace solutions",
      "Operational management for seamless business focus"
    ],
    link: "http://www.goflexoffices.com"
  }
];

function WorkspaceSolutions() {
 const [show, setShow] = useState(false);

  return (
    <>
<<<<<<< HEAD
    <Head>
      <title>Serviced Office & Workspace Solutions | Realsta Gurgaon</title> 
          <meta name="description" content="Tailored workspace solutions in Gurgaon from Realsta: fully serviced offices, plug and play workspaces, and private suites —all designed for modern professional needs." />
          <link rel="canonical" href="https://realsta.com/our-services/workspace-solutions" />
    </Head>
=======
>>>>>>> 7c3b30b (initial commit)
      <section className="ws-hero-section">
          <NavigationMenu />
        <div className="customContainer">
          <div className="row mt4 ws-cta-sction">
            <div className="col-12 col-md-7">
              <div className='ws-heading'>Workspace<br />Solutions</div>
              <p className='ws-subtext mt-2 mb-0'>Flexible managed office and furnished office space in</p>
              <p className='ws-subtext'>Gurgaon for seamless business productivity</p>
              <Row className="mt-2">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="cl-Marker" alt="list marker" /><span className="cl-List-text">Business Owners</span></li>
                            <li className="d-flex gap-3 align-items-center" ><img loading="lazy" src="/assets/icons/lal_bindu.svg" className="cl-Marker" alt="list marker" /><span className="cl-List-text">Corporates</span></li>
                        </Container>
                    </Row>
              <div className="ws-fundsUndrAdv mt-5">
                <div className="ws-fundsUndrAdvSubTxt">
                  22+ lakh<br />sq. ft.
                  <div className='ws-box-subtext'>Commercial Space</div>
                </div>
                <div className="vertical-line"></div>
                <div className="ws-fundsUndrAdvTxt">
                  45+
                  <div className='ws-box-subtext'>Buildings</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-5 mt-3 d-flex justify-content-end align-items-end gap-3">
              <button className='btn-secondary-custom'onClick={() => setShow(true)}>
                Manage my office<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
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

export default WorkspaceSolutions;