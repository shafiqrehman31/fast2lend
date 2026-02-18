"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0"); // First item open by default

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "How does Fast2Lend work?",
          a: "Fast2Lend is a loan search platform that connects you with a network of trusted lenders. You submit one simple form, and we match you with lenders who may offer loans based on your needs. You can then compare offers and choose the best one for you."
        },
        {
          q: "Is Fast2Lend a direct lender?",
          a: "No, Fast2Lend is not a direct lender. We are a loan search platform that connects borrowers with a network of participating lenders. We do not make credit decisions or provide loans directly."
        },
        {
          q: "How much can I borrow through Fast2Lend?",
          a: "Our network of lenders offers loans ranging from $100 to $5,000. The actual amount you qualify for depends on your credit profile, income, and the lender's criteria."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          q: "How long does the application take?",
          a: "Our online form takes just 2-3 minutes to complete. Once submitted, lenders typically review your information quickly, and you may receive offers within minutes."
        },
        {
          q: "What information do I need to apply?",
          a: "You'll need to provide basic personal information (name, address, date of birth), contact details, employment information, and bank account information for funding."
        },
        {
          q: "Can I apply with bad credit?",
          a: "Yes! Our network includes lenders who consider applicants with all credit types. Having bad credit or no credit history doesn't automatically disqualify you."
        }
      ]
    },
    {
      category: "Rates & Terms",
      questions: [
        {
          q: "What interest rates can I expect?",
          a: "Representative APRs range from 5.99% to 35.99%, depending on your credit profile, income, and loan terms. Your actual rate will be provided by the lender in your loan offer."
        },
        {
          q: "How long do I have to repay the loan?",
          a: "Repayment terms vary by lender and loan type, typically ranging from 61 days to 72 months. You can choose a term that fits your budget when comparing offers."
        },
        {
          q: "Are there any fees?",
          a: "Fees vary by lender and loan type. Some lenders may charge origination fees, late payment fees, or other charges. All fees will be disclosed in your loan offer before you accept."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "Is my information secure?",
          a: "Absolutely. We use 256-bit SSL encryption to protect your data. We never sell your personal information to unauthorized third parties."
        },
        {
          q: "Will applying affect my credit score?",
          a: "Submitting a request through Fast2Lend uses a soft credit pull, which does not affect your credit score. However, if you accept a loan offer, the lender may perform a hard inquiry which could temporarily impact your score."
        }
      ]
    }
  ];

  const toggleFAQ = (catIndex: number, qIndex: number) => {
    const newIndex = `${catIndex}-${qIndex}`;
    setOpenIndex(openIndex === newIndex ? null : newIndex);
  };

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner" style={{ 
        background: 'linear-gradient(135deg, rgb(0, 152, 255) 0%, rgb(0, 74, 124) 100%)', 
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>
            Frequently Asked Questions
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
              <li className="breadcrumb-item active text-white" aria-current="page">FAQ</li>
            </ol>
          </nav>
        </div>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 185, 68, 0.15)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 185, 68, 0.15)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1
        }}></div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          {/* Search Bar */}
          <div className="search-section mb-50">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="search-box position-relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    style={{
                      width: '100%',
                      padding: '15px 50px 15px 25px',
                      borderRadius: '50px',
                      border: '2px solid #e0e0e0',
                      fontSize: '16px',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FFB944'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                  <i className="fas fa-search" style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#FFB944',
                    fontSize: '20px'
                  }}></i>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="categories-row row mb-40">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="col-lg-3 col-md-6 mb-20">
                <button
                  onClick={() => {
                    const element = document.getElementById(`category-${catIndex}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFB944';
                    e.currentTarget.style.borderColor = '#FFB944';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }}
                >
                  <h5 style={{ color: '#004a7c', fontWeight: '600', marginBottom: '5px' }}>{category.category}</h5>
                  <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '0' }}>
                    {category.questions.length} Questions
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Categories */}
          {faqs.map((category, catIndex) => (
            <div key={catIndex} id={`category-${catIndex}`} className="faq-category mb-60">
              <div className="category-header mb-30">
                <h3 style={{ color: '#004a7c', fontWeight: '700', fontSize: '28px' }}>
                  {category.category}
                </h3>
                <div style={{ width: '80px', height: '4px', background: '#FFB944', marginTop: '10px' }}></div>
              </div>
              
              <div className="accordion" id={`accordion-${catIndex}`}>
                {category.questions.map((faq, qIndex) => {
                  const currentIndex = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === currentIndex;
                  
                  return (
                    <div key={qIndex} className="accordion-item mb-20" style={{ 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '12px', 
                      overflow: 'hidden',
                      background: isOpen ? '#ffffff' : '#ffffff'
                    }}>
                      <div 
                        className="accordion-header p-4" 
                        onClick={() => toggleFAQ(catIndex, qIndex)}
                        style={{ 
                          background: isOpen ? '#f8f9fa' : '#ffffff',
                          cursor: 'pointer',
                          borderBottom: isOpen ? '1px solid #e0e0e0' : 'none',
                          transition: 'all 0.3s'
                        }}
                      >
                        <h5 className="mb-0 d-flex justify-content-between align-items-center">
                          <span style={{ color: '#004a7c', fontWeight: '600' }}>{faq.q}</span>
                          <span style={{ 
                            color: '#FFB944',
                            fontSize: '24px',
                            fontWeight: '600'
                          }}>
                            {isOpen ? '−' : '+'}
                          </span>
                        </h5>
                      </div>
                      {isOpen && (
                        <div className="accordion-body p-4" style={{ background: '#fff' }}>
                          <p className="mb-0" style={{ color: '#4a4a4a', lineHeight: '1.8' }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="contact-cta py-80" style={{ background: 'linear-gradient(135deg, #004a7c 0%, #1A1A3A 100%)' }}>
        <div className="container text-center">
          <h3 className="mb-30" style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF' }}>
            Still Have Questions?
          </h3>
          <p className="mb-40" style={{ color: '#B0B0C0', fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Can't find the answer you're looking for? Please reach out to our friendly support team.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Link 
              href="/contact" 
              style={{
                background: '#FFB944',
                color: '#004a7c',
                padding: '15px 40px',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFB944';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-envelope me-2"></i>
              Contact Us
            </Link>
            <Link 
              href="/how-it-works" 
              style={{
                background: 'transparent',
                color: '#ffffff',
                padding: '15px 40px',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid #FFB944',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFB944';
                e.currentTarget.style.color = '#004a7c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <i className="fas fa-arrow-right me-2"></i>
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .py-80 {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        @media (max-width: 768px) {
          .py-80 {
            padding-top: 40px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </>
  );
}