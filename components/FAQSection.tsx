"use client";

import { useEffect, useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default
  
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const faqs = [
    {
      question: "How does Fast2Lend work?",
      answer: "Submit one secure request and get matched with lenders so you can compare offers. It's free, fast, and doesn't affect your credit score."
    },
    {
      question: "Do you run a hard credit check when I apply?",
      answer: "We perform a soft credit check that won't affect your credit score. Lenders may perform a hard check when you accept an offer."
    },
    {
      question: "Can I get a loan with bad credit or no credit history?",
      answer: "Yes! Our network includes lenders who consider applicants with all credit types. Bad credit or no credit history may still qualify."
    },
    {
      question: "How fast can I get funds?",
      answer: "Many lenders in our network can deposit funds directly to your account by the next business day after approval."
    },
    {
      question: "What fees should I expect?",
      answer: "Fees vary by lender and loan terms. We provide transparent pricing examples and encourage you to review all terms before accepting."
    },
    {
      question: "Is applying secure? What do you do with my data?",
      answer: "Absolutely. We use 256-bit SSL encryption and never sell your data to unauthorized parties. Your privacy and security are our top priorities."
    },
    {
      question: "Will applying affect my credit score?",
      answer: "No. Submitting a request through Fast2Lend uses a soft credit pull that does not impact your credit score."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section pt-120 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title" style={{ color: '#0F0F2D' }}>FAQ</span>
              <h2>Our FAQ</h2>
              <p>Have a Question? Look Here</p>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="faq-content-box wow fadeInUp">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div className="accordion-card mb-25" key={index}>
                    <div className="accordion-header">
                      <h6 
                        className={`accordion-title ${openIndex !== index ? 'collapsed' : ''}`}
                        onClick={() => toggleFAQ(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="number">{String(index + 1).padStart(2, '0')}.</span>
                        {faq.question}
                        <span className="float-end">
                          {openIndex === index ? '▴' : '▾'}
                        </span>
                      </h6>
                    </div>
                    {openIndex === index && (
                      <div className="accordion-body p-3">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;