"use client";
import './AssetManagement.css';
import NavigationMenu from "./NavigationMenu";
import IncludedServices from "./IncludedServices";
import FAQ from "./FAQ";
import TextBrief from "./TextBrief";
import TableSection from "./TableSection";
import { Row,Container } from 'react-bootstrap';
import { useState } from 'react';
import FormModal from './FormModal';
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

interface BriefTextItem{
    text:string;
    image:string;
}

const BriefTextData: BriefTextItem = {
    text:"At Realsta, we don't just manage assets — we optimize, enhance, and future-proof your commercial real estate investments. Our proactive asset management approach drives operational excellence and ensures sustainable value creation across your portfolio.",
    image:"Asset_Managment"
}

const ReadyToTalk = dynamic(() => import("./ReadyToTalk"), {
    loading: () => null,
});


const TableSectionData: TableSectionItem = {
    titleNormal: "Why we ",
    titleBold: "excel?",
    tableContents: [
        {
            heading: "Data-Driven\nWealth Creation",
            content: "Optimizing your property portfolio with analytics-driven strategies for maximum returns.",
            image: "/assets/servicesTable/Data driven wealth creation - under asset mangement.webp"
        },
        {
            heading: "Ethics &\nTransparency",
            content: "Managing your Gurgaon commercial property and more with integrity and full transparency.",
            image: "/assets/servicesTable/Ethics and Transparency - under asset management.webp"
        },
        {
            heading: "14+ Years\nof Expertise",
            content: "Managing real estate assets for global brands and UHNIs.",
            image: "/assets/servicesTable/14 years of expertise - under asset management.webp"
        }
    ]
}

const faqData: FAQItem[] = [
    {
        question: "What is commercial real estate asset management?",
        answer: "Commercial real estate asset management involves strategically overseeing properties like office spaces, retail centers, and coworking spaces to maximize their value and returns. Our services enhance your investment property in Gurgaon through performance optimization, tenant management, and risk mitigation."
    },
    {
        question: "How do your asset management services benefit my investments?",
        answer: "Our property management services boost the financial performance of your commercial property by increasing rental income, reducing costs, and diversifying your property portfolio. We use data-driven strategies to ensure your Gurgaon assets align with your financial goals and deliver consistent returns."
    },
    {
        question: "What types of commercial properties do you manage?",
        answer: "We manage a wide range of Gurgaon commercial property types, including office spaces, retail properties, coworking spaces, and pre-leased assets. Whether it’s commercial property for rent or sale, we tailor our approach to enhance asset performance and tenant satisfaction."
    },
    {
        question: "How do you ensure stable rental income for my commercial property?",
        answer: "Our tenant and lease management services focus on securing high-caliber tenants, such as corporate leaders, and negotiating favorable lease terms. This ensures recurring income from commercial property for rent in Gurgaon while minimizing vacancies and maintaining asset value."
    },
    {
        question: "Can you help diversify my property portfolio?",
        answer: "Yes, our real estate advisory team designs diversified property portfolio strategies by selecting high-potential commercial real estate investment opportunities across Gurgaon’s office, retail, and coworking sectors. We balance risk and returns to meet your investment objectives."
    },
    {
        question: "What does property operations and facilities management involve?",
        answer: "Our property management services include maintenance, facilities oversight, and compliance with safety regulations to keep your commercial property in top condition. We also provide customized fit-outs to enhance tenant experience and asset appeal in Gurgaon’s market."
    },
    {
        question: "How do you plan for a profitable exit from my commercial property?",
        answer: "Our property advisor team analyzes market trends to time your exit strategically, positioning your commercial property for sale to maximize value. We manage the entire sale process, ensuring a smooth and profitable disposition of your Gurgaon asset."
    },
    {
        question: "How do you protect my wealth and manage risks?",
        answer: "We safeguard your commercial real estate investment by mitigating risks from market volatility and tenant issues. Our wealth management strategies, including tax optimization and co-investment, align your Gurgaon commercial property with long-term financial security and growth."
    },
    {
        question: "Have More Questions?",
        answer: "Contact our commercial real estate agent team to discuss how we can enhance your commercial real estate portfolio in Gurgaon. Let us help you achieve your investment goals."
    }
]


const yourServicesData: ServiceItem[] = [
    {
        title: "Asset Performance Optimization",
        content: "Our team enhances the financial and operational performance of your commercial property. Through detailed property management analysis, we identify opportunities to boost rental income and reduce costs. Strategic upgrades and lease restructuring ensure your investment property in Gurgaon delivers consistent returns and long-term value.",
        bulletPoints: [
            "Regular performance analysis of rental income and expenses",
            "Value-enhancing upgrades to attract high-quality tenants",
            "Cost optimization for improved net operating income",
            "Lease restructuring for favorable terms"
        ]
    },
    {
        title: "Tenant and Lease Management",
        content: "Stable tenancy is key to a successful Gurgaon commercial property. We source high-caliber tenants, such as corporate CXOs, and manage lease agreements to secure recurring commercial property for rent income. Our tenancy services ensure tenant satisfaction, minimizing vacancies and enhancing asset desirability.",
        bulletPoints: [
            "Acquisition and retention of premium tenants",
            "Comprehensive lease administration and compliance",
            "Tenant support for fit-outs and maintenance",
            "Corporate leasing strategies for long-term stability"
        ]
    },
    {
        title: "Portfolio Strategy and Diversification",
        content: "Building a resilient property portfolio requires strategic planning. We use data-driven insights to diversify your commercial real estate investment across Gurgaon’s office spaces, retail, and coworking properties. Our portfolio analysis aligns assets with your risk tolerance and financial goals for balanced growth.",
        bulletPoints: [
            "Portfolio analysis for optimized asset allocation",
            "Diversification across property types and locations",
            "Data-driven selection of high-potential assets",
            "Performance benchmarking against market standards"
        ]
    },
    {
        title: "Property Operations and Facilities Management",
        content: "Our property management services ensure your commercial property operates seamlessly. From routine maintenance to compliance with safety regulations, we maintain asset functionality and tenant satisfaction. Customized fit-outs and facilities management enhance the appeal of your commercial real estate in Gurgaon.",
        bulletPoints: [
            "Proactive maintenance to preserve asset condition",
            "Efficient facilities management for tenant comfort",
            "Compliance with safety and environmental standards",
            "Custom furnishing and fit-out solutions"
        ]
    },
    {
        title: "Exit Strategy and Disposition Planning",
        content: "A well-planned exit maximizes returns on your commercial property investment. We analyze market trends to time your asset sale perfectly, positioning your commercial property for sale to attract buyers. Our transaction management ensures a smooth and profitable exit from Gurgaon’s market.",
        bulletPoints: [
            "Market analysis for optimal exit timing",
            "Asset positioning to maximize sale value",
            "End-to-end transaction management",
            "Post-exit reinvestment advisory"
        ]
    },
    {
        title: "Wealth and Risk Management",
        content: "Protect and grow your wealth with our tailored real estate advisory services. We mitigate risks from market volatility and tenant issues while aligning your commercial real estate assets with long-term financial goals. Tax optimization and co-investment strategies ensure your investment property delivers secure returns.",
        bulletPoints: [
            "Risk assessment and mitigation strategies",
            "Customized wealth management plans",
            "Tax-efficient asset ownership and disposal",
            "Co-investment to align interests"
        ]
    }
];

function AssetManagement() { 
const [show, setShow] = useState(false);

    return (
        <>
            <section className="hero-section">
                    <NavigationMenu />
                <div className="customContainer">
                    <div className="row mt4 am-cta-sction">
                        <div className="col-9 col-md-7">
                            <div className='am-heading'>Asset<br />Management</div>
                            <div className='am-subheading mt-3'>Turn Assets into Long-Term Wealth</div>
                           <Row className="mt-3">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><Image  src="/assets/icons/lal_bindu.svg" className="am-Marker" alt="list marker" width={12} height={12} /><span className="am-List-text">HNIs</span></li>
                            <li className="d-flex gap-3 align-items-center" ><Image src="/assets/icons/lal_bindu.svg" className="am-Marker" alt="list marker" width={12} height={12} /><span className="am-List-text">UHNIs</span></li>
                            <li className="d-flex gap-3 align-items-center" ><Image src="/assets/icons/lal_bindu.svg" className="am-Marker" alt="list marker" width={12} height={12} /><span className="am-List-text">NRIs</span></li>
                        </Container>
                    </Row>
                    <Row className="mt-2">
                        <Container>
                            <li className="d-flex gap-3 align-items-center" ><Image src="/assets/icons/lal_bindu.svg" className="am-Marker" alt="list marker" width={12} height={12} /><span className="am-List-text">Business Owners</span></li>
                            <li className="d-flex gap-3 align-items-center" ><Image src="/assets/icons/lal_bindu.svg" className="am-Marker" alt="list marker" width={12} height={12} /><span className="am-List-text">Corporates</span></li>
                        </Container>
                    </Row>
                            <div className="col-md-5 am-FundsUndrAdv mt-5">
                                <div className="am-FundsUndrAdvSubTxt">Assets under management</div>
                                <div className="am-FundsUndrAdvTxt">2.86 Lakh SQ. FT.</div>
                            </div>
                        </div>
                        <div className="col-8 col-md-5 mt-5 d-flex justify-content-end align-items-end gap-3">
                            <button className='btn-secondary-custom'onClick={() => setShow(true)}>
                            Manage my property<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
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

export default AssetManagement;