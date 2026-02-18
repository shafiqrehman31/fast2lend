"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
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
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>Privacy Policy</h1>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
            <span className="text-white-50">/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
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
        {/* Shield Icon */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          opacity: 0.1,
          zIndex: 1
        }}>
          <i className="fas fa-shield-alt" style={{ fontSize: '120px', color: '#FFB944' }}></i>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {/* Table of Contents - Sidebar */}
            <div className="col-lg-3 mb-40">
              <div className="toc-sticky" style={{ position: 'sticky', top: '100px' }}>
                <div className="toc-card bg-white rounded-4 shadow-sm p-4">
                  <h5 className="mb-20" style={{ color: '#004a7c', fontWeight: '700' }}>
                    <i className="fas fa-list-ul me-2" style={{ color: '#FFB944' }}></i>
                    Quick Navigation
                  </h5>
                  <ul className="toc-list list-unstyled">
                    {[
                      { id: 'role', title: 'Our Role', icon: 'fa-info-circle' },
                      { id: 'information-collect', title: 'Information We Collect', icon: 'fa-database' },
                      { id: 'ping-tree', title: 'Ping-Tree Model', icon: 'fa-project-diagram' },
                      { id: 'use-info', title: 'How We Use Info', icon: 'fa-cog' },
                      { id: 'sharing', title: 'Information Sharing', icon: 'fa-share-alt' },
                      { id: 'tcpa', title: 'TCPA & Consent', icon: 'fa-phone-alt' },
                      { id: 'glba', title: 'GLBA Compliance', icon: 'fa-balance-scale' },
                      { id: 'cookies', title: 'Cookies & Tracking', icon: 'fa-cookie-bite' },
                      { id: 'retention', title: 'Data Retention', icon: 'fa-clock' },
                      { id: 'rights', title: 'Your Privacy Rights', icon: 'fa-user-shield' },
                      { id: 'security', title: 'Security Measures', icon: 'fa-lock' },
                    ].map((item) => (
                      <li key={item.id} className="mb-2">
                        <button
                          onClick={() => scrollToSection(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '8px 15px',
                            width: '100%',
                            textAlign: 'left',
                            borderRadius: '8px',
                            color: activeSection === item.id ? '#FFB944' : '#4a4a4a',
                            fontWeight: activeSection === item.id ? '600' : '400',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f8f9fa';
                            e.currentTarget.style.color = '#FFB944';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = activeSection === item.id ? '#FFB944' : '#4a4a4a';
                          }}
                        >
                          <i className={`fas ${item.icon} me-2`} style={{ width: '20px' }}></i>
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  <hr className="my-3" />
                  
                  <div className="effective-date small" style={{ color: '#6c757d' }}>
                    <p className="mb-1">
                      <i className="far fa-calendar-alt me-2" style={{ color: '#FFB944' }}></i>
                      <strong>Effective:</strong> 01/06/2026
                    </p>
                    <p className="mb-0">
                      <i className="far fa-edit me-2" style={{ color: '#FFB944' }}></i>
                      <strong>Updated:</strong> 01/06/2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              {/* Document Info Card */}
              <div className="doc-info-card bg-white rounded-4 shadow-sm p-4 mb-40" style={{ borderLeft: '4px solid #FFB944' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex gap-4">
                    <div>
                      <p className="mb-1" style={{ color: '#6c757d', fontSize: '14px' }}>
                        <i className="far fa-calendar-alt me-2" style={{ color: '#FFB944' }}></i>
                        <strong>Effective Date:</strong> January 06, 2026
                      </p>
                    </div>
                    <div>
                      <p className="mb-1" style={{ color: '#6c757d', fontSize: '14px' }}>
                        <i className="far fa-edit me-2" style={{ color: '#FFB944' }}></i>
                        <strong>Last Updated:</strong> January 06, 2026
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0">
                    <button 
                      onClick={() => window.print()}
                      className="btn"
                      style={{
                        background: '#004a7c',
                        color: 'white',
                        padding: '8px 20px',
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
              <div className="content-card bg-white rounded-4 shadow p-40">
                
                {/* Introduction */}
                <div className="mb-40" id="role">
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
                    Fast2Lend (<strong>"Company," "we," "us,"</strong> or <strong>"our"</strong>) operates a financial lead-generation platform 
                    that connects consumers seeking loan products with third-party lenders and financial service 
                    providers through a real-time distribution (ping-tree) model.
                  </p>
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
                    This Privacy Policy explains how we collect, use, share, and protect personal information when you 
                    visit <strong>www.fast2lend.com</strong> ("Website") or submit information through our forms.
                  </p>
                </div>

                {/* Section 1 - Our Role */}
                <div className="privacy-section mb-50" id="role">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    1. Our Role <span style={{ fontSize: '16px', color: '#FFB944', marginLeft: '10px' }}>(Important Disclosure)</span>
                  </h3>
                  
                  <div className="role-box p-4 mb-20" style={{ 
                    background: 'rgba(255, 185, 68, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 185, 68, 0.2)'
                  }}>
                    <p className="mb-3" style={{ color: '#004a7c', fontWeight: '600' }}>
                      <i className="fas fa-exclamation-triangle me-2" style={{ color: '#FFB944' }}></i>
                      We are not a lender and do not make credit decisions.
                    </p>
                    <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                      We operate as a lead generator / marketplace that matches consumers with potential lenders and financial partners.
                    </p>
                  </div>
                  
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>
                    When you submit information:
                  </p>
                  <ul style={{ color: '#4a4a4a', lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li className="mb-2">Your data may be shared with multiple lenders or buyers</li>
                    <li className="mb-2">Distribution occurs via automated decisioning (ping-tree technology)</li>
                    <li className="mb-2">Buyers may evaluate eligibility independently</li>
                  </ul>
                </div>

                {/* Section 2 - Information We Collect */}
                <div className="privacy-section mb-50" id="information-collect">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    2. Information We Collect
                  </h3>

                  <div className="info-grid">
                    <div className="info-category mb-30">
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600', fontSize: '18px' }}>
                        <i className="fas fa-user me-2" style={{ color: '#FFB944' }}></i>
                        A. Information You Provide
                      </h4>
                      <p style={{ color: '#4a4a4a', marginBottom: '10px' }}>When you submit a loan request or inquiry, we may collect:</p>
                      <div className="row">
                        {[
                          'Full name',
                          'Email address',
                          'Phone number',
                          'Mailing address',
                          'Date of birth',
                          'Loan amount requested',
                          'Employment and income details',
                          'Banking or financial indicators (as required)',
                          'Consent and authorization records'
                        ].map((item, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <i className="fas fa-check-circle me-2" style={{ color: '#FFB944', fontSize: '14px' }}></i>
                            <span style={{ color: '#4a4a4a' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="info-category mb-30">
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600', fontSize: '18px' }}>
                        <i className="fas fa-laptop me-2" style={{ color: '#FFB944' }}></i>
                        B. Automatically Collected Information
                      </h4>
                      <div className="row">
                        {[
                          'IP address',
                          'Device and browser data',
                          'Geolocation (approximate)',
                          'Time and date stamps',
                          'Referral and affiliate source data'
                        ].map((item, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <i className="fas fa-circle me-2" style={{ color: '#FFB944', fontSize: '8px', verticalAlign: 'middle' }}></i>
                            <span style={{ color: '#4a4a4a' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="info-category">
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600', fontSize: '18px' }}>
                        <i className="fas fa-handshake me-2" style={{ color: '#FFB944' }}></i>
                        C. Information From Third Parties
                      </h4>
                      <p style={{ color: '#4a4a4a' }}>We may receive data from:</p>
                      <div className="d-flex flex-wrap gap-3">
                        {[
                          'Affiliate publishers',
                          'Marketing partners',
                          'Data verification services',
                          'Fraud-prevention providers'
                        ].map((item, index) => (
                          <span key={index} style={{
                            background: '#f8f9fa',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            color: '#4a4a4a',
                            fontSize: '14px'
                          }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 - Ping-Tree Model */}
                <div className="privacy-section mb-50" id="ping-tree">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    3. How the Ping-Tree Model Uses Your Data
                  </h3>

                  <div className="ping-tree-visual mb-30 p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                    <div className="row align-items-center">
                      <div className="col-md-4 text-center mb-3 mb-md-0">
                        <div style={{ background: '#004a7c', color: 'white', padding: '15px', borderRadius: '8px' }}>
                          <i className="fas fa-user-edit fa-2x mb-2" style={{ color: '#FFB944' }}></i>
                          <h6 className="mb-0">1. Your Application</h6>
                        </div>
                      </div>
                      <div className="col-md-4 text-center mb-3 mb-md-0">
                        <div style={{ background: '#FFB944', color: '#004a7c', padding: '15px', borderRadius: '8px' }}>
                          <i className="fas fa-random fa-2x mb-2"></i>
                          <h6 className="mb-0">2. Ping-Tree Distribution</h6>
                        </div>
                      </div>
                      <div className="col-md-4 text-center">
                        <div style={{ background: '#004a7c', color: 'white', padding: '15px', borderRadius: '8px' }}>
                          <i className="fas fa-hand-holding-usd fa-2x mb-2" style={{ color: '#FFB944' }}></i>
                          <h6 className="mb-0">3. Lender Match</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', marginBottom: '15px' }}>
                    Your information may be used as follows:
                  </p>
                  
                  <div className="step-box mb-20 p-3" style={{ borderLeft: '3px solid #FFB944', background: '#f8f9fa' }}>
                    <h5 style={{ color: '#004a7c', fontWeight: '600' }}>1. Initial Evaluation (Ping)</h5>
                    <ul className="mb-0" style={{ color: '#4a4a4a' }}>
                      <li>Limited data is shared with multiple potential lenders</li>
                      <li>Used to determine eligibility and pricing</li>
                      <li>May occur simultaneously or sequentially</li>
                    </ul>
                  </div>
                  
                  <div className="step-box mb-20 p-3" style={{ borderLeft: '3px solid #FFB944', background: '#f8f9fa' }}>
                    <h5 style={{ color: '#004a7c', fontWeight: '600' }}>2. Lead Delivery (Post)</h5>
                    <ul className="mb-0" style={{ color: '#4a4a4a' }}>
                      <li>Full application data is sent to one or more matched lenders</li>
                      <li>Based on eligibility, availability, and business rules</li>
                    </ul>
                  </div>
                  
                  <div className="step-box p-3" style={{ borderLeft: '3px solid #FFB944', background: '#f8f9fa' }}>
                    <h5 style={{ color: '#004a7c', fontWeight: '600' }}>3. Fallback Distribution</h5>
                    <ul className="mb-0" style={{ color: '#4a4a4a' }}>
                      <li>If one lender declines, your information may be shared with others</li>
                      <li>Distribution may continue until a match is found or buyers are exhausted</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 - How We Use Your Information */}
                <div className="privacy-section mb-50" id="use-info">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    4. How We Use Your Information
                  </h3>

                  <div className="row">
                    {[
                      { icon: 'fa-handshake', text: 'Match consumers with lenders and financial partners' },
                      { icon: 'fa-cogs', text: 'Operate and optimize lead-distribution systems' },
                      { icon: 'fa-comments', text: 'Communicate with you regarding your request' },
                      { icon: 'fa-shield-alt', text: 'Verify identity and detect fraud' },
                      { icon: 'fa-file-alt', text: 'Maintain compliance records' },
                      { icon: 'fa-chart-line', text: 'Improve platform performance' },
                      { icon: 'fa-gavel', text: 'Comply with legal and regulatory obligations' },
                    ].map((item, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <i className={`fas ${item.icon} me-3`} style={{ color: '#FFB944', width: '20px' }}></i>
                          <span style={{ color: '#4a4a4a' }}>{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5 - Information Sharing */}
                <div className="privacy-section mb-50" id="sharing">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    5. Information Sharing & Sale Disclosure
                  </h3>

                  <div className="alert-box p-4 mb-30" style={{ background: '#FFF4E0', borderRadius: '12px' }}>
                    <i className="fas fa-exclamation-circle me-2" style={{ color: '#FFB944' }}></i>
                    <strong>Important:</strong> This sharing may be considered a "sale" or "sharing" under certain state privacy laws.
                  </div>

                  <h5 className="mb-15" style={{ color: '#004a7c' }}>A. Lenders & Financial Buyers</h5>
                  <p style={{ color: '#4a4a4a', marginBottom: '20px' }}>
                    We may share or sell your personal information to:
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-30">
                    {['Banks', 'Licensed lenders', 'Loan servicers', 'Financial service providers'].map((item, index) => (
                      <span key={index} style={{
                        background: '#004a7c',
                        color: 'white',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '14px'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <h5 className="mb-15" style={{ color: '#004a7c' }}>B. Service Providers</h5>
                  <p style={{ color: '#4a4a4a', marginBottom: '20px' }}>Including:</p>
                  <div className="row mb-30">
                    {[
                      'Lead-routing platforms',
                      'Hosting providers',
                      'Analytics services',
                      'CRM and call-tracking vendors',
                      'Compliance and audit partners'
                    ].map((item, index) => (
                      <div key={index} className="col-md-6 mb-2">
                        <i className="fas fa-angle-right me-2" style={{ color: '#FFB944' }}></i>
                        <span style={{ color: '#4a4a4a' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <h5 className="mb-15" style={{ color: '#004a7c' }}>C. Legal & Compliance</h5>
                  <p style={{ color: '#4a4a4a' }}>
                    We may disclose information to:
                  </p>
                  <ul style={{ color: '#4a4a4a' }}>
                    <li>Comply with law or court order</li>
                    <li>Respond to regulatory requests</li>
                    <li>Prevent fraud or abuse</li>
                    <li>Enforce agreements</li>
                  </ul>
                </div>

                {/* Section 6 - TCPA & Communication Consent */}
                <div className="privacy-section mb-50" id="tcpa">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    6. TCPA & Communication Consent
                  </h3>

                  <div className="consent-box p-4 mb-20" style={{ 
                    background: 'linear-gradient(135deg, #004a7c 0%, #1A1A3A 100%)',
                    borderRadius: '12px',
                    color: 'white'
                  }}>
                    <p className="mb-3">
                      By submitting your information, you expressly consent to receive communications from us and our partners, including:
                    </p>
                    <div className="d-flex gap-4 mb-3 flex-wrap">
                      <span><i className="fas fa-phone-alt me-2" style={{ color: '#FFB944' }}></i> Phone calls</span>
                      <span><i className="fas fa-sms me-2" style={{ color: '#FFB944' }}></i> Text messages (SMS)</span>
                      <span><i className="fas fa-envelope me-2" style={{ color: '#FFB944' }}></i> Emails</span>
                    </div>
                    <p className="small" style={{ color: '#B0B0C0' }}>
                      This may include automated dialing systems or prerecorded messages, as permitted by law.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="consent-note p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                        <i className="fas fa-times-circle me-2" style={{ color: '#FFB944' }}></i>
                        <span style={{ color: '#4a4a4a' }}>Consent is not required to obtain credit</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="consent-note p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                        <i className="fas fa-check-circle me-2" style={{ color: '#FFB944' }}></i>
                        <span style={{ color: '#4a4a4a' }}>Can be revoked at any time</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 7 - GLBA */}
                <div className="privacy-section mb-50" id="glba">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    7. Gramm-Leach-Bliley Act (GLBA)
                  </h3>

                  <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                    As a financial lead-generation entity, we comply with the GLBA by:
                  </p>
                  <ul style={{ color: '#4a4a4a' }}>
                    <li>Limiting access to consumer information</li>
                    <li>Implementing security safeguards</li>
                    <li>Sharing data only as permitted by law</li>
                  </ul>
                </div>

                {/* Section 8 - Cookies & Tracking */}
                <div className="privacy-section mb-50" id="cookies">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    8. Cookies & Tracking
                  </h3>

                  <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                    We use cookies and similar technologies to:
                  </p>
                  <ul style={{ color: '#4a4a4a', marginBottom: '20px' }}>
                    <li>Enable Website functionality</li>
                    <li>Track affiliate attribution</li>
                    <li>Measure performance</li>
                    <li>Detect fraud</li>
                  </ul>
                  <p style={{ color: '#4a4a4a' }}>
                    <i className="fas fa-info-circle me-2" style={{ color: '#FFB944' }}></i>
                    You may disable cookies in your browser settings.
                  </p>
                </div>

                {/* Section 9 - Data Retention */}
                <div className="privacy-section mb-50" id="retention">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    9. Data Retention
                  </h3>

                  <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                    We retain personal information only as long as necessary to:
                  </p>
                  <ul style={{ color: '#4a4a4a' }}>
                    <li>Fulfill lead-generation purposes</li>
                    <li>Meet regulatory requirements</li>
                    <li>Resolve disputes</li>
                    <li>Maintain audit and compliance records</li>
                  </ul>
                </div>

                {/* Section 10 - Your Privacy Rights */}
                <div className="privacy-section mb-50" id="rights">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    10. Your Privacy Rights (U.S.)
                  </h3>

                  <div className="ccpa-box p-4 mb-30" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                    <h5 className="mb-20" style={{ color: '#004a7c', fontWeight: '700' }}>
                      <i className="fas fa-calendar-star me-2" style={{ color: '#FFB944' }}></i>
                      California Residents (CCPA/CPRA)
                    </h5>
                    <p style={{ color: '#4a4a4a', marginBottom: '15px' }}>You have the right to:</p>
                    <div className="row">
                      {[
                        'Know what personal information we collect',
                        'Request deletion or correction',
                        'Opt out of the sale or sharing of personal information',
                        'Limit use of sensitive personal information',
                        'Not be discriminated against'
                      ].map((right, index) => (
                        <div key={index} className="col-12 mb-2">
                          <i className="fas fa-check-circle me-2" style={{ color: '#FFB944' }}></i>
                          <span style={{ color: '#4a4a4a' }}>{right}</span>
                        </div>
                      ))}
                    </div>
                    
                    <hr className="my-3" />
                    
                    <div className="opt-out-box">
                      <p className="mb-2"><strong>Opt-Out:</strong></p>
                      <a 
                        href="mailto:contact@fast2lend.com" 
                        style={{
                          background: '#004a7c',
                          color: 'white',
                          padding: '10px 25px',
                          borderRadius: '30px',
                          textDecoration: 'none',
                          display: 'inline-block',
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
                        <i className="fas fa-envelope me-2"></i>
                        contact@fast2lend.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sections 11-15 */}
                <div className="privacy-section mb-50">
                  <h4 className="mb-20" style={{ color: '#004a7c', fontWeight: '600' }}>11. Do Not Track Signals</h4>
                  <p style={{ color: '#4a4a4a' }}>We do not currently respond to "Do Not Track" signals.</p>

                  <h4 className="mb-20 mt-30" style={{ color: '#004a7c', fontWeight: '600' }}>12. Children's Privacy</h4>
                  <p style={{ color: '#4a4a4a' }}>Our Website is intended for individuals 18 years or older. We do not knowingly collect information from minors.</p>

                  <h4 className="mb-20 mt-30" style={{ color: '#004a7c', fontWeight: '600' }}>13. Security Measures</h4>
                  <p style={{ color: '#4a4a4a' }}>We use reasonable safeguards including:</p>
                  <ul style={{ color: '#4a4a4a' }}>
                    <li>SSL encryption</li>
                    <li>Access controls</li>
                    <li>Secure storage systems</li>
                    <li>Regular security reviews</li>
                  </ul>

                  <h4 className="mb-20 mt-30" style={{ color: '#004a7c', fontWeight: '600' }}>14. Policy Updates</h4>
                  <p style={{ color: '#4a4a4a' }}>We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date.</p>
                </div>

                {/* Contact Information */}
                <div className="contact-info-box p-4" style={{ 
                  background: '#004a7c',
                  borderRadius: '12px',
                  marginTop: '40px'
                }}>
                  <h5 style={{ color: '#FFB944', fontWeight: '600', marginBottom: '20px' }}>15. Contact Us</h5>
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
        .mb-50 {
          margin-bottom: 50px;
        }
        .toc-sticky {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 992px) {
          .toc-sticky {
            position: relative;
            top: 0;
          }
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