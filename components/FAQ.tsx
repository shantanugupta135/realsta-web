"use client";
import React, { useState } from 'react';
import './FAQ.css';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className='faqSection'>
      <div className="customContainer">
        <h1 className="faqTitle">Frequently Asked <span className='faqQuestionsText'>Questions</span></h1>
        <div className="faqAccordionContainer">
          {data.map((item, index) => (
            <>
              <div key={index} className="faqAccordionItem">
                <button
                  className={`faqAccordionHeader${expandedIndex === index ? ' faqExpanded' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <i className={`fa-solid ${expandedIndex === index ? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                </button>
                {/* {expandedIndex === index && ( */}
                  <div className={`mt-2 px-2 faqAccordionContent${expandedIndex === index ? ' faqAccordionContentOpen' : ' faqAccordionContentClosed'}`}>
                    {item.answer}
                  </div>
                {/* )} */}
              </div>
              <hr className='faqDivider'></hr>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 