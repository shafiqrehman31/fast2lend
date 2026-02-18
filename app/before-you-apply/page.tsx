"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BeforeYouApplyPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
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
        
        {/* Warning Icon Decoration */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          opacity: 0.1,
          zIndex: 1
        }}>
          <i className="fas fa-exclamation-triangle" style={{ fontSize: '120px', color: '#FFB944' }}></i>
        </div>
        
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>
            Before You Apply
          </h1>
          <p className="text-white-50 mb-3" style={{ fontSize: '18px' }}>
            Important things to know before taking out a loan
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
            <span className="text-white-50">/</span>
            <span className="text-white">Before You Apply</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="before-apply-content py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Important Notice Card */}
              <div className="important-notice-card bg-white rounded-4 shadow-sm p-40 mb-40 text-center" style={{
                borderBottom: '4px solid #FFB944'
              }}>
                <div className="icon-circle mb-30" style={{
                  width: '80px',
                  height: '80px',
                  background: '#FFB944',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <i className="fas fa-exclamation-triangle" style={{ fontSize: '40px', color: '#004a7c' }}></i>
                </div>
                <h2 className="mb-20" style={{ color: '#004a7c', fontWeight: '700', fontSize: '28px' }}>
                  Important Things to Know Before You Apply
                </h2>
                <p style={{ color: '#4a4a4a', fontSize: '18px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                  Taking out a loan is a serious financial decision. Before you accept any loan offer, make sure you understand how it works and what could happen if you don't follow the loan terms.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="row">
                {/* Late Payments Card */}
                <div className="col-md-6 mb-30">
                  <div className="info-card bg-white rounded-4 shadow-sm h-100 p-40" style={{
                    transition: 'all 0.3s',
                    borderTop: '4px solid #FFB944'
                  }}>
                    <div className="card-icon mb-20">
                      <i className="fas fa-clock" style={{ fontSize: '40px', color: '#FFB944' }}></i>
                    </div>
                    <h3 className="mb-20" style={{ color: '#004a7c', fontWeight: '700', fontSize: '22px' }}>
                      If You Pay Late or Miss Payments
                    </h3>
                    <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>
                      When you accept a loan, you agree to pay it back:
                    </p>
                    <ul className="mb-20" style={{ color: '#4a4a4a', paddingLeft: '20px' }}>
                      <li className="mb-2">✓ On time</li>
                      <li className="mb-2">✓ With interest</li>
                      <li className="mb-2">✓ According to the repayment schedule set by the lender</li>
                    </ul>
                    <div className="warning-box p-3" style={{
                      background: '#FFF4E0',
                      borderRadius: '8px',
                      borderLeft: '3px solid #FFB944'
                    }}>
                      <p className="mb-0" style={{ color: '#4a4a4a', fontSize: '14px' }}>
                        <strong className="d-block mb-2" style={{ color: '#004a7c' }}>
                          <i className="fas fa-exclamation-circle me-2" style={{ color: '#FFB944' }}></i>
                          If you pay late, miss a payment, or don't repay the loan, the lender may charge:
                        </strong>
                        • Late fees<br />
                        • Penalties<br />
                        • Additional interest
                      </p>
                    </div>
                    <div className="note-box mt-20 p-3" style={{
                      background: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      <p className="mb-0 small" style={{ color: '#6c757d' }}>
                        <i className="fas fa-info-circle me-2" style={{ color: '#FFB944' }}></i>
                        <strong>Fast2Lend</strong> is not a lender, and we do not control loan fees, penalties, or repayment rules. Always read the lender's loan agreement carefully so you know what happens if a payment is late or missed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Credit Score Card */}
                <div className="col-md-6 mb-30">
                  <div className="info-card bg-white rounded-4 shadow-sm h-100 p-40" style={{
                    transition: 'all 0.3s',
                    borderTop: '4px solid #FFB944'
                  }}>
                    <div className="card-icon mb-20">
                      <i className="fas fa-chart-line" style={{ fontSize: '40px', color: '#FFB944' }}></i>
                    </div>
                    <h3 className="mb-20" style={{ color: '#004a7c', fontWeight: '700', fontSize: '22px' }}>
                      How Your Credit Score May Be Affected
                    </h3>
                    <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>
                      Lenders may check your credit to decide whether to offer you a loan.
                    </p>
                    <div className="credit-boxes mb-20">
                      <div className="soft-check p-3 mb-3" style={{
                        background: '#e8f5e8',
                        borderRadius: '8px',
                        borderLeft: '3px solid #4CAF50'
                      }}>
                        <p className="mb-0" style={{ color: '#2e7d32' }}>
                          <strong>Soft Credit Check</strong> — Does not affect your credit score
                        </p>
                      </div>
                      <div className="hard-check p-3" style={{
                        background: '#ffebee',
                        borderRadius: '8px',
                        borderLeft: '3px solid #f44336'
                      }}>
                        <p className="mb-0" style={{ color: '#c62828' }}>
                          <strong>Hard Credit Check</strong> — Can affect your credit score
                        </p>
                      </div>
                    </div>
                    <div className="warning-box p-3" style={{
                      background: '#FFF4E0',
                      borderRadius: '8px'
                    }}>
                      <p className="mb-0" style={{ color: '#4a4a4a', fontSize: '14px' }}>
                        <i className="fas fa-exclamation-triangle me-2" style={{ color: '#FFB944' }}></i>
                        Missing or late payments can also hurt your credit score and stay on your credit report.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Debt Collection Card */}
                <div className="col-md-6 mb-30">
                  <div className="info-card bg-white rounded-4 shadow-sm h-100 p-40" style={{
                    transition: 'all 0.3s',
                    borderTop: '4px solid #FFB944'
                  }}>
                    <div className="card-icon mb-20">
                      <i className="fas fa-phone-alt" style={{ fontSize: '40px', color: '#FFB944' }}></i>
                    </div>
                    <h3 className="mb-20" style={{ color: '#004a7c', fontWeight: '700', fontSize: '22px' }}>
                      Debt Collection
                    </h3>
                    <div className="important-box p-3 mb-20" style={{
                      background: '#004a7c',
                      borderRadius: '8px',
                      color: 'white'
                    }}>
                      <p className="mb-0">
                        <i className="fas fa-times-circle me-2" style={{ color: '#FFB944' }}></i>
                        <strong>Fast2Lend does not collect payments and does not handle debt collection.</strong>
                      </p>
                    </div>
                    <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                      If you do not repay your loan, the lender may contact you to collect the debt. The lender's collection rules will be explained in your loan agreement.
                    </p>
                    <div className="note-box mt-20 p-3" style={{
                      background: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      <p className="mb-0 small" style={{ color: '#6c757d' }}>
                        <i className="fas fa-lightbulb me-2" style={{ color: '#FFB944' }}></i>
                        If you have questions about payments or collections, contact your lender directly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Funding Time Card */}
                <div className="col-md-6 mb-30">
                  <div className="info-card bg-white rounded-4 shadow-sm h-100 p-40" style={{
                    transition: 'all 0.3s',
                    borderTop: '4px solid #FFB944'
                  }}>
                    <div className="card-icon mb-20">
                      <i className="fas fa-hourglass-half" style={{ fontSize: '40px', color: '#FFB944' }}></i>
                    </div>
                    <h3 className="mb-20" style={{ color: '#004a7c', fontWeight: '700', fontSize: '22px' }}>
                      How Long It Takes to Get Your Money
                    </h3>
                    <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>
                      If a lender approves your loan, the time it takes to receive funds can vary.
                    </p>
                    <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>
                      It depends on:
                    </p>
                    <ul className="mb-20" style={{ color: '#4a4a4a', paddingLeft: '20px' }}>
                      <li className="mb-2">• The lender</li>
                      <li className="mb-2">• Your bank</li>
                      <li className="mb-2">• The day and time of approval</li>
                    </ul>
                    <div className="note-box p-3" style={{
                      background: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      <p className="mb-0" style={{ color: '#6c757d' }}>
                        <i className="fas fa-info-circle me-2" style={{ color: '#FFB944' }}></i>
                        <strong>Fast2Lend</strong> does not control funding times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Role Section */}
              <div className="our-role-card bg-white rounded-4 shadow-sm p-40 mt-30" style={{
                background: 'linear-gradient(135deg, #004a7c 0%, #1A1A3A 100%)',
                color: 'white'
              }}>
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="mb-20" style={{ color: '#FFB944', fontWeight: '700', fontSize: '28px' }}>
                      Our Role
                    </h3>
                    <p className="mb-30" style={{ color: '#B0B0C0', fontSize: '18px', lineHeight: '1.8' }}>
                      <strong>Fast2Lend</strong> helps connect you with lenders — we do not provide loans.
                    </p>
                    
                    <div className="role-list">
                      <div className="role-item d-flex align-items-center mb-3">
                        <div style={{
                          width: '30px',
                          height: '30px',
                          background: '#FFB944',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0
                        }}>
                          <i className="fas fa-times" style={{ color: '#004a7c', fontSize: '16px' }}></i>
                        </div>
                        <span style={{ color: 'white' }}>We do not decide who gets approved</span>
                      </div>
                      
                      <div className="role-item d-flex align-items-center mb-3">
                        <div style={{
                          width: '30px',
                          height: '30px',
                          background: '#FFB944',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0
                        }}>
                          <i className="fas fa-times" style={{ color: '#004a7c', fontSize: '16px' }}></i>
                        </div>
                        <span style={{ color: 'white' }}>We do not set loan terms</span>
                      </div>
                      
                      <div className="role-item d-flex align-items-center">
                        <div style={{
                          width: '30px',
                          height: '30px',
                          background: '#FFB944',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0
                        }}>
                          <i className="fas fa-times" style={{ color: '#004a7c', fontSize: '16px' }}></i>
                        </div>
                        <span style={{ color: 'white' }}>We do not control interest rates or fees</span>
                      </div>
                    </div>
                    
                    <p className="mt-30" style={{ color: '#FFB944', fontWeight: '600', fontSize: '16px' }}>
                      All loan decisions and terms come directly from the lender.
                    </p>
                  </div>
                  
                  <div className="col-lg-4 text-center mt-4 mt-lg-0">
                    <div style={{
                      background: 'rgba(255, 185, 68, 0.1)',
                      borderRadius: '50%',
                      width: '200px',
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <i className="fas fa-handshake" style={{ fontSize: '80px', color: '#FFB944' }}></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist Card */}
              <div className="checklist-card bg-white rounded-4 shadow-sm p-40 mt-40">
                <h3 className="mb-30 text-center" style={{ color: '#004a7c', fontWeight: '700' }}>
                  <i className="fas fa-clipboard-check me-2" style={{ color: '#FFB944' }}></i>
                  Your Pre-Application Checklist
                </h3>
                
                <div className="row">
                  {[
                    'Read the lender\'s loan agreement carefully',
                    'Understand the interest rate and APR',
                    'Know all fees and penalties',
                    'Check the repayment schedule',
                    'Understand what happens if you miss a payment',
                    'Know how to contact your lender',
                    'Verify the lender is licensed in your state',
                    'Keep a copy of all loan documents'
                  ].map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle me-3" style={{ color: '#FFB944', fontSize: '20px', marginTop: '2px' }}></i>
                        <span style={{ color: '#4a4a4a' }}>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-30">
                  <Link 
                    href="/apply" 
                    style={{
                      background: '#FFB944',
                      color: '#004a7c',
                      padding: '15px 40px',
                      borderRadius: '30px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'inline-block',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#004a7c';
                      e.currentTarget.style.color = '#FFB944';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFB944';
                      e.currentTarget.style.color = '#004a7c';
                    }}
                  >
                    I Understand — Continue to Application
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="disclaimer-box text-center mt-40">
                <p className="small" style={{ color: '#6c757d' }}>
                  <i className="fas fa-info-circle me-2" style={{ color: '#FFB944' }}></i>
                  This information is for educational purposes only. <strong>Fast2Lend</strong> is not a financial advisor. 
                  Always read and understand your loan agreement before accepting any offer.
                </p>
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
        .p-40 {
          padding: 40px;
        }
        .info-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        @media (max-width: 768px) {
          .py-80 {
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .p-40 {
            padding: 25px;
          }
        }
      `}</style>
    </>
  );
}