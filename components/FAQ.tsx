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
            <div
              key={`${item.question}-${index}`}
              className="faqAccordionItem"
            >
              <button
                className={`faqAccordionHeader${expandedIndex === index ? ' faqExpanded' : ''
                  }`}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                {item.question}
              </button>

              {expandedIndex === index && (
                <div className="faqAccordionContent">
                  {item.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ; 