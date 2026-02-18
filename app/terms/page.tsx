"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>Terms and Conditions</h1>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
            <span className="text-white-50">/</span>
            <span className="text-white">Terms and Conditions</span>
          </div>
        </div>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 185, 68, 0.1)',
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
          background: 'rgba(255, 185, 68, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1
        }}></div>
      </section>

      {/* Terms Content */}
      <section className="terms-content py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Document Info Card */}
              <div className="doc-info-card bg-white rounded-4 shadow-sm p-4 mb-40" style={{ borderLeft: '4px solid #FFB944' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <p className="mb-1" style={{ color: '#6c757d' }}>
                      <i className="far fa-calendar-alt me-2" style={{ color: '#FFB944' }}></i>
                      <strong>Effective Date:</strong> January 06, 2026
                    </p>
                    <p className="mb-0" style={{ color: '#6c757d' }}>
                      <i className="far fa-edit me-2" style={{ color: '#FFB944' }}></i>
                      <strong>Last Updated:</strong> January 06, 2026
                    </p>
                  </div>
                  <div className="mt-3 mt-sm-0">
                    <button 
                      onClick={() => window.print()}
                      className="btn"
                      style={{
                        background: '#004a7c',
                        color: 'white',
                        padding: '10px 25px',
                        borderRadius: '30px',
                        fontSize: '14px',
                        border: 'none',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFB944';
                        e.currentTarget.style.color = '#004a7c';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#004a7c';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      <i className="fas fa-print me-2"></i> Print / Save PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="content-card bg-white rounded-4 shadow p-50">
                
                {/* Introduction */}
                <div className="mb-40">
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
                    Fast2Lend.com and its owner and operator (<strong>"Fast2Lend," "we," "us,"</strong> or <strong>"our"</strong>) 
                    provide loan referral and lead-generation services (described below), related content, and 
                    technology through our website located at <strong>www.fast2lend.com</strong> (the <strong>"Site"</strong>) and any related 
                    applications, tools, features, or technologies (collectively, the <strong>"Service"</strong>).
                  </p>
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
                    By accessing, browsing, or using any part of the Service, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms and Conditions of Use (<strong>"Terms"</strong>).
                  </p>
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
                    If you do not agree to these Terms, you must not use the Service.
                  </p>
                </div>

                {/* Important Notice - Arbitration */}
                <div className="notice-box p-4 mb-40" style={{ 
                  background: 'rgba(255, 185, 68, 0.05)',
                  border: '1px solid rgba(255, 185, 68, 0.2)',
                  borderRadius: '12px'
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="icon" style={{ 
                      background: '#FFB944',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fas fa-gavel" style={{ color: '#004a7c' }}></i>
                    </div>
                    <div>
                      <h5 style={{ color: '#004a7c', fontWeight: '700', marginBottom: '10px' }}>
                        IMPORTANT NOTICE REGARDING ARBITRATION
                      </h5>
                      <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '0' }}>
                        PLEASE READ THESE TERMS CAREFULLY. They include a binding arbitration agreement, 
                        a class-action waiver, and limitations on your legal rights. By using the Service, 
                        you agree that disputes will be resolved individually through arbitration, not in court, 
                        and not as part of a class action.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms Sections */}
                {[
                  {
                    number: "1",
                    title: "Loan Referral & Lead Generation Service",
                    content: [
                      "Fast2Lend operates an online loan referral and lead-distribution platform that connects consumers with third-party lenders, lender networks, and financial service providers (\"Lender Partners\").",
                      "To use the Service, you must complete an online request form (\"Request Form\") that may require personal information, including but not limited to:",
                    ],
                    list: [
                      "Name",
                      "Address",
                      "Phone number",
                      "Email address",
                      "Employment and income information",
                      "Banking or financial details",
                      "Social Security number (where required by lenders)"
                    ],
                    note: "Our Privacy Policy governs how we collect and use this information and is incorporated into these Terms by reference."
                  },
                  {
                    number: "2",
                    title: "No Lending or Credit Decisions",
                    content: [
                      "Fast2Lend is not a lender, does not issue loans, and does not make credit decisions. We do not guarantee:"
                    ],
                    list: [
                      "That you will receive a loan offer",
                      "That you will be matched with a lender",
                      "Any specific loan amount, rate, fee, or term"
                    ],
                    note: "All lending decisions are made solely by Lender Partners."
                  },
                  {
                    number: "3",
                    title: "Information Sharing & Contact Consent",
                    content: [
                      "By submitting a Request Form, you:"
                    ],
                    list: [
                      "Authorize Fast2Lend to share your information with multiple Lender Partners",
                      "Acknowledge that you are requesting loan offers from third parties",
                      "Agree that Fast2Lend and Lender Partners may contact you via:",
                      "  • Phone calls",
                      "  • Text messages (SMS)",
                      "  • Emails",
                      "  • Automated dialing systems or prerecorded messages (where permitted by law)"
                    ],
                    note: "Consent is not required to purchase goods or services."
                  },
                  {
                    number: "4",
                    title: "Credit Checks",
                    content: [
                      "Lender Partners may review your information in real time and may perform:"
                    ],
                    list: [
                      "Soft credit checks (which do not affect credit scores), or",
                      "Hard credit inquiries (which may affect your credit score)"
                    ],
                    sublist: [
                      "These checks may be conducted through:",
                      "• Experian",
                      "• Equifax",
                      "• TransUnion",
                      "• Alternative credit bureaus or data providers (e.g., DataX, MicroBilt, Teletrack)"
                    ],
                    note: "By submitting a Request Form, you authorize such reviews."
                  },
                  {
                    number: "5",
                    title: "Redirection to Lender Websites",
                    content: [
                      "If a Lender Partner determines that your information meets its criteria, you may be redirected to the lender's website. Once redirected:"
                    ],
                    list: [
                      "Fast2Lend is no longer involved",
                      "The lender's own terms and privacy policies apply",
                      "Fast2Lend is not responsible for lender actions or decisions"
                    ]
                  },
                  {
                    number: "6",
                    title: "Electronic Disclosures & E-Sign Consent",
                    content: [
                      "By using the Service, you consent to receive:"
                    ],
                    list: [
                      "Electronic disclosures",
                      "Notices",
                      "Agreements",
                      "Communications"
                    ],
                    note: "Lender Partners may require electronic signatures, which are legally binding and equivalent to handwritten signatures. You may withdraw electronic consent directly with the lender, though doing so may affect your ability to obtain a loan."
                  },
                  {
                    number: "7",
                    title: "Accuracy of Information",
                    content: [
                      "You represent that all information you submit is accurate, current, and truthful. Providing false or misleading information may result in:"
                    ],
                    list: [
                      "Rejection of your request",
                      "Suspension or termination of access to the Service"
                    ]
                  },
                  {
                    number: "8",
                    title: "Changes to the Service",
                    content: [
                      "Fast2Lend may modify, suspend, or discontinue any part of the Service at any time without notice. We are not responsible for delays or failures caused by:"
                    ],
                    list: [
                      "Incorrect user information",
                      "Internet or system issues beyond our control"
                    ]
                  },
                  {
                    number: "9",
                    title: "Disclaimers",
                    content: [
                      "THE SERVICE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE.\" Fast2Lend DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:"
                    ],
                    list: [
                      "MERCHANTABILITY",
                      "FITNESS FOR A PARTICULAR PURPOSE",
                      "NON-INFRINGEMENT"
                    ],
                    note: "USE OF THE SERVICE IS AT YOUR OWN RISK."
                  },
                  {
                    number: "10",
                    title: "Limitation of Liability",
                    content: [
                      "To the maximum extent permitted by law, Fast2Lend, its partners, affiliates, and service providers are not liable for:"
                    ],
                    list: [
                      "Indirect or consequential damages",
                      "Credit decisions or lender actions",
                      "Loss of data or business",
                      "Unauthorized access beyond reasonable security measures"
                    ],
                    note: "Some states may not allow these limitations; rights may vary."
                  },
                  {
                    number: "11",
                    title: "Indemnification",
                    content: [
                      "You agree to indemnify and hold harmless Fast2Lend and its partners from any claims, damages, or expenses arising from:"
                    ],
                    list: [
                      "Your use of the Service",
                      "Your violation of these Terms",
                      "Your violation of any law or third-party rights"
                    ]
                  },
                  {
                    number: "12",
                    title: "Third-Party Links",
                    content: [
                      "The Service may include links to third-party websites. Fast2Lend does not control or endorse third-party content or services."
                    ]
                  },
                  {
                    number: "13",
                    title: "Binding Arbitration & Class Action Waiver",
                    content: [
                      "Any dispute arising from or relating to these Terms or the Service shall be resolved exclusively through binding arbitration, governed by the Federal Arbitration Act, administered by the American Arbitration Association (AAA)."
                    ],
                    list: [
                      "You agree:",
                      "• No class actions",
                      "• No representative claims",
                      "• Arbitration on an individual basis only"
                    ],
                    note: "You may pursue qualifying claims in small-claims court."
                  },
                  {
                    number: "14",
                    title: "Governing Law",
                    content: [
                      "These Terms are governed by the laws of the United States and the applicable state, without regard to conflict-of-law principles."
                    ]
                  },
                  {
                    number: "15",
                    title: "Changes to These Terms",
                    content: [
                      "We may update these Terms at any time by posting changes on the Site. Continued use of the Service constitutes acceptance of the revised Terms."
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="terms-section mb-40">
                    <h4 style={{ 
                      color: '#004a7c', 
                      fontWeight: '700',
                      fontSize: '20px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        background: '#FFB944',
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#004a7c'
                      }}>{section.number}</span>
                      {section.title}
                    </h4>
                    <div style={{ paddingLeft: '42px' }}>
                      {section.content && section.content.map((text, i) => (
                        <p key={i} style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>{text}</p>
                      ))}
                      {section.list && (
                        <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                          {section.list.map((item, i) => (
                            <li key={i} style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '8px', listStyleType: item.startsWith('  •') ? 'circle' : 'disc' }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.sublist && (
                        <div style={{ marginBottom: '15px' }}>
                          {section.sublist.map((item, i) => (
                            <p key={i} style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '5px' }}>{item}</p>
                          ))}
                        </div>
                      )}
                      {section.note && (
                        <p style={{ 
                          color: '#6c757d',
                          lineHeight: '1.8',
                          marginBottom: '15px',
                          padding: '15px',
                          background: '#f8f9fa',
                          borderRadius: '8px',
                          borderLeft: '3px solid #FFB944'
                        }}>
                          <i className="fas fa-info-circle me-2" style={{ color: '#FFB944' }}></i>
                          {section.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Contact Information */}
                <div className="contact-info-box p-4" style={{ 
                  background: '#004a7c',
                  borderRadius: '12px',
                  marginTop: '40px'
                }}>
                  <h5 style={{ color: '#FFB944', fontWeight: '600', marginBottom: '20px' }}>Contact Information</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <p className="mb-2">
                        <i className="fas fa-globe me-2" style={{ color: '#FFB944' }}></i>
                        <span style={{ color: 'white' }}>Website: </span>
                        <a href="https://www.fast2lend.com" style={{ color: '#FFB944', textDecoration: 'none' }}>www.fast2lend.com</a>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-0">
                        <i className="fas fa-envelope me-2" style={{ color: '#FFB944' }}></i>
                        <span style={{ color: 'white' }}>Email: </span>
                        <a href="mailto:contact@fast2lend.com" style={{ color: '#FFB944', textDecoration: 'none' }}>contact@fast2lend.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Acceptance Note */}
                <div className="text-center mt-40">
                  <p style={{ color: '#6c757d', fontSize: '14px' }}>
                    By continuing to use Fast2Lend, you acknowledge that you have read and understood these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .py-80 {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .p-50 {
          padding: 50px;
        }
        .mb-40 {
          margin-bottom: 40px;
        }
        .mt-40 {
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .py-80 {
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .p-50 {
            padding: 25px;
          }
        }
      `}</style>
    </>
  );
}