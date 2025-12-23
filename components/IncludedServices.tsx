import React, { useState } from 'react';
import './IncludedServices.css';
import FormModal from './FormModal';

interface ServiceItem {
  title: string;
  content?: string;
  bulletPoints?: string[];
  link?:string;
}

interface IncludedServicesProps {
  servicesData: ServiceItem[];
}

const IncludedServices: React.FC<IncludedServicesProps> = ({ servicesData }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>();

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [show, setShow] = useState(false);

  return (
    <section className="servicesSection">
      <div className="customContainer">
        <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="servicesSectionTitle">OUR SERVICES</h2>
          <h3 className="servicesMainTitle mt-2">Included <span className='servicesHeadingText'>Services</span></h3>
          <button className='btn-secondary-alternative-custom mt-4' onClick={() => setShow(true)}>
                Leave an Enquiry<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
              </button>
              <FormModal show={show} onClose={() => setShow(false)} />
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <div className="servicesAccordionContainer">
            {servicesData.map((service, index) => (
              <div key={index} className="servicesAccordionItem">
                <button
                  className={`servicesAccordionHeader${expandedIndex === index ? ' expanded' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{service.title}</span>
                  <span className="servicesIcon">
                  <i className={`fa-solid ${expandedIndex === index ? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                  </span>
                </button>
                {/* {expandedIndex === index && service.content && ( */}
                  <div className={`mt-2 servicesAccordionContent${expandedIndex === index ? ' servicesAccordionContentOpen' : ' servicesAccordionContentClosed'}`}>
                    
                    <p>{service.content}</p>
                    {service.bulletPoints && (
                      <ul className="servicesBulletPoints">
                        {service.bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {service.link &&(<a href={service.link} target="_blank" rel="noopener noreferrer" className='is_link mx-2'>{service.link}</a>)}
                  </div>
                {/* )} */}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedServices; 