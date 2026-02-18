"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CaliforniaPrivacyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showOptOutModal, setShowOptOutModal] = useState(false);

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
      
      {/* Page Banner with California Theme */}
      <section className="page-banner" style={{ 
        background: 'linear-gradient(135deg, rgb(0, 152, 255) 0%, rgb(0, 74, 124) 100%)', 
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* California Bear Icon Decoration */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '30px',
          opacity: 0.1,
          zIndex: 1
        }}>
          <i className="fas fa-bear" style={{ fontSize: '100px', color: '#FFB944' }}></i>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '30px',
          opacity: 0.1,
          zIndex: 1
        }}>
          <i className="fas fa-calendar-star" style={{ fontSize: '80px', color: '#FFB944' }}></i>
        </div>
        
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>
            California Privacy Notice
          </h1>
          <p className="text-white-50 mb-3" style={{ fontSize: '18px' }}>CCPA / CPRA</p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
            <span className="text-white-50">/</span>
            <Link href="/privacy" className="text-white-50 text-decoration-none">Privacy Policy</Link>
            <span className="text-white-50">/</span>
            <span className="text-white">California Privacy Notice</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-content py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {/* Table of Contents - Sidebar */}
            <div className="col-lg-3 mb-40">
              <div className="toc-sticky" style={{ position: 'sticky', top: '100px' }}>
                <div className="toc-card bg-white rounded-4 shadow-sm p-4">
                  <h5 className="mb-20" style={{ color: '#004a7c', fontWeight: '700' }}>
                    <i className="fas fa-list-ul me-2" style={{ color: '#FFB944' }}></i>
                    California Privacy Rights
                  </h5>
                  
                  {/* California Bear Icon */}
                  <div className="text-center mb-20">
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#FFB944',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <i className="fas fa-bear" style={{ fontSize: '30px', color: '#004a7c' }}></i>
                    </div>
                    <p className="mt-2 small" style={{ color: '#6c757d' }}>Your Privacy Rights</p>
                  </div>

                  <ul className="toc-list list-unstyled">
                    {[
                      { id: 'role', title: 'Our Role', icon: 'fa-info-circle' },
                      { id: 'categories', title: 'Categories of Information', icon: 'fa-database' },
                      { id: 'sources', title: 'Sources', icon: 'fa-source' },
                      { id: 'purposes', title: 'Purposes', icon: 'fa-bullseye' },
                      { id: 'disclosure', title: 'Disclosure & Sale', icon: 'fa-share-alt' },
                      { id: 'sensitive', title: 'Sensitive Information', icon: 'fa-shield-heart' },
                      { id: 'rights', title: 'Your California Rights', icon: 'fa-gavel' },
                      { id: 'requests', title: 'Submit a Request', icon: 'fa-paper-plane' },
                      { id: 'agents', title: 'Authorized Agents', icon: 'fa-user-tie' },
                      { id: 'retention', title: 'Data Retention', icon: 'fa-clock' },
                      { id: 'minors', title: 'Minors', icon: 'fa-child' },
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
                  
                  {/* Do Not Sell Button */}
                  <button
                    onClick={() => setShowOptOutModal(true)}
                    style={{
                      background: '#FFB944',
                      color: '#004a7c',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '30px',
                      fontWeight: '600',
                      width: '100%',
                      cursor: 'pointer',
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
                    <i className="fas fa-ban me-2"></i>
                    Do Not Sell My Info
                  </button>
                  
                  <div className="effective-date small mt-3" style={{ color: '#6c757d' }}>
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
                  <div>
                    <p className="mb-1" style={{ color: '#6c757d', fontSize: '14px' }}>
                      <i className="far fa-calendar-alt me-2" style={{ color: '#FFB944' }}></i>
                      <strong>Effective Date:</strong> January 06, 2026
                    </p>
                    <p className="mb-0" style={{ color: '#6c757d', fontSize: '14px' }}>
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
                <div className="intro-box mb-40 p-4" style={{ 
                  background: 'rgba(255, 185, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 185, 68, 0.2)'
                }}>
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px', marginBottom: '0' }}>
                    This California Privacy Notice supplements the Privacy Policy of <strong>Fast2Lend</strong> ("Company," "we," "us," or "our") and applies solely to California residents ("Consumers") as defined by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
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
                    1. Our Role
                  </h3>
                  
                  <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                    Fast2Lend operates a financial lead-generation and distribution platform that connects consumers seeking loan products with third-party lenders and financial service providers through real-time routing and ping-tree technology.
                  </p>
                  
                  <div className="important-box p-3 mt-20" style={{ 
                    background: '#004a7c',
                    borderRadius: '8px',
                    color: 'white'
                  }}>
                    <i className="fas fa-exclamation-circle me-2" style={{ color: '#FFB944' }}></i>
                    <strong>Fast2Lend is not a lender, does not make credit decisions, and does not issue loans.</strong>
                  </div>
                </div>

                {/* Section 2 - Categories of Information */}
                <div className="privacy-section mb-50" id="categories">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    2. Categories of Personal Information Collected
                  </h3>
                  
                  <p style={{ color: '#4a4a4a', marginBottom: '20px' }}>
                    Within the last 12 months, we may have collected the following categories of personal information:
                  </p>

                  <div className="category-grid">
                    {/* A. Identifiers */}
                    <div className="category-card mb-30 p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600' }}>
                        <i className="fas fa-id-card me-2" style={{ color: '#FFB944' }}></i>
                        A. Identifiers
                      </h4>
                      <div className="row">
                        {[
                          'Full name',
                          'Email address',
                          'Phone number',
                          'IP address',
                          'Online identifiers'
                        ].map((item, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <i className="fas fa-check-circle me-2" style={{ color: '#FFB944', fontSize: '14px' }}></i>
                            <span style={{ color: '#4a4a4a' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* B. Personal Information */}
                    <div className="category-card mb-30 p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600' }}>
                        <i className="fas fa-address-card me-2" style={{ color: '#FFB944' }}></i>
                        B. Personal Information (Cal. Civ. Code §1798.80)
                      </h4>
                      <div className="row">
                        {[
                          'Mailing address',
                          'Date of birth',
                          'Employment information',
                          'Income-related indicators',
                          'Loan request details'
                        ].map((item, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <i className="fas fa-check-circle me-2" style={{ color: '#FFB944', fontSize: '14px' }}></i>
                            <span style={{ color: '#4a4a4a' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* C. Internet Activity */}
                    <div className="category-card mb-30 p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600' }}>
                        <i className="fas fa-globe me-2" style={{ color: '#FFB944' }}></i>
                        C. Internet or Network Activity
                      </h4>
                      <ul className="mb-0" style={{ color: '#4a4a4a' }}>
                        <li>Website interaction data</li>
                        <li>Browsing behavior</li>
                        <li>Referral and affiliate source data</li>
                      </ul>
                    </div>

                    {/* D. Geolocation */}
                    <div className="category-card mb-30 p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                      <h4 className="mb-15" style={{ color: '#004a7c', fontWeight: '600' }}>
                        <i className="fas fa-map-marker-alt me-2" style={{ color: '#FFB944' }}></i>
                        D. Geolocation Data
                      </h4>
                      <p style={{ color: '#4a4a4a' }}>Approximate location derived from IP address</p>
                    </div>

                    {/* E. Sensitive Information */}
                    <div className="category-card p-4" style={{ 
                      background: 'linear-gradient(135deg, #004a7c 0%, #1A1A3A 100%)',
                      borderRadius: '12px',
                      color: 'white'
                    }}>
                      <h4 className="mb-15" style={{ color: '#FFB944', fontWeight: '600' }}>
                        <i className="fas fa-shield-heart me-2"></i>
                        E. Sensitive Personal Information
                      </h4>
                      <ul className="mb-0 text-white-50">
                        <li>Financial information provided in connection with a loan request</li>
                        <li>Authentication or verification data (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 - Sources */}
                <div className="privacy-section mb-50" id="sources">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    3. Sources of Personal Information
                  </h3>

                  <div className="sources-cloud">
                    {[
                      'Consumers directly',
                      'Affiliate publishers',
                      'Marketing partners',
                      'Lead generators',
                      'Data verification services',
                      'Fraud-prevention providers',
                      'Cookies & tracking technologies'
                    ].map((source, index) => (
                      <span key={index} style={{
                        display: 'inline-block',
                        background: '#f8f9fa',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        margin: '0 10px 10px 0',
                        color: '#4a4a4a',
                        border: '1px solid #e0e0e0'
                      }}>
                        <i className="fas fa-arrow-right me-2" style={{ color: '#FFB944' }}></i>
                        {source}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 4 - Purposes */}
                <div className="privacy-section mb-50" id="purposes">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    4. Purposes for Collection and Use
                  </h3>

                  <div className="row">
                    {[
                      'Match consumers with potential lenders',
                      'Operate ping-tree lead-distribution systems',
                      'Communicate regarding loan inquiries',
                      'Verify identity and prevent fraud',
                      'Maintain compliance and audit records',
                      'Improve website performance',
                      'Comply with legal obligations'
                    ].map((purpose, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="d-flex align-items-start">
                          <i className="fas fa-circle me-3" style={{ color: '#FFB944', fontSize: '10px', marginTop: '6px' }}></i>
                          <span style={{ color: '#4a4a4a' }}>{purpose}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5 - Disclosure & Sale */}
                <div className="privacy-section mb-50" id="disclosure">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    5. Disclosure, Sale, and Sharing of Personal Information
                  </h3>

                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="disclosure-card h-100 p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                        <h5 className="mb-20" style={{ color: '#004a7c', fontWeight: '600' }}>
                          <i className="fas fa-briefcase me-2" style={{ color: '#FFB944' }}></i>
                          A. Disclosure for Business Purposes
                        </h5>
                        <p style={{ color: '#4a4a4a', marginBottom: '15px' }}>We may disclose personal information to:</p>
                        <ul className="mb-0" style={{ color: '#4a4a4a' }}>
                          <li>Service providers</li>
                          <li>Technology and lead-routing platforms</li>
                          <li>Hosting, analytics, and compliance vendors</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6 mb-30">
                      <div className="disclosure-card h-100 p-4" style={{ 
                        background: '#004a7c', 
                        borderRadius: '12px',
                        color: 'white'
                      }}>
                        <h5 className="mb-20" style={{ color: '#FFB944', fontWeight: '600' }}>
                          <i className="fas fa-dollar-sign me-2"></i>
                          B. Sale or Sharing of Personal Information
                        </h5>
                        <p className="text-white-50 mb-15">
                          Fast2Lend may sell or share personal information to third-party lenders and financial buyers in exchange for monetary or other valuable consideration.
                        </p>
                        <p className="text-white-50 mb-2">This may include:</p>
                        <ul className="text-white-50 mb-0">
                          <li>Identifiers</li>
                          <li>Financial and loan-related information</li>
                          <li>Internet or network activity data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 - Sensitive Information */}
                <div className="privacy-section mb-50" id="sensitive">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    6. Sensitive Personal Information
                  </h3>

                  <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                    Sensitive personal information is used only as reasonably necessary to:
                  </p>
                  <ul style={{ color: '#4a4a4a', marginBottom: '15px' }}>
                    <li>Provide requested services</li>
                    <li>Match consumers with lenders</li>
                    <li>Maintain platform security</li>
                    <li>Meet compliance obligations</li>
                  </ul>
                  <div className="important-note p-3" style={{ 
                    background: '#FFF4E0',
                    borderRadius: '8px',
                    borderLeft: '3px solid #FFB944'
                  }}>
                    <i className="fas fa-check-circle me-2" style={{ color: '#FFB944' }}></i>
                    <span style={{ color: '#4a4a4a' }}>We do not use sensitive personal information for unrelated purposes.</span>
                  </div>
                </div>

                {/* Section 7 - Your California Rights */}
                <div className="privacy-section mb-50" id="rights">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    7. Your California Privacy Rights
                  </h3>

                  <div className="rights-grid">
                    {[
                      {
                        letter: 'A',
                        title: 'Right to Know',
                        description: 'Request disclosure of categories and sources of personal information, business purposes, and third parties with whom information is shared.',
                        icon: 'fa-eye'
                      },
                      {
                        letter: 'B',
                        title: 'Right to Delete',
                        description: 'Request deletion of personal information, subject to legal exceptions.',
                        icon: 'fa-trash-alt'
                      },
                      {
                        letter: 'C',
                        title: 'Right to Correct',
                        description: 'Request correction of inaccurate personal information.',
                        icon: 'fa-pen'
                      },
                      {
                        letter: 'D',
                        title: 'Right to Opt Out of Sale or Sharing',
                        description: 'Opt out of the sale or sharing of your personal information at any time.',
                        icon: 'fa-ban',
                        highlight: true
                      },
                      {
                        letter: 'E',
                        title: 'Right to Limit Use of Sensitive Information',
                        description: 'Request limitations on how sensitive personal information is used.',
                        icon: 'fa-shield-alt'
                      },
                      {
                        letter: 'F',
                        title: 'Right to Non-Discrimination',
                        description: 'We will not discriminate against you for exercising your privacy rights.',
                        icon: 'fa-balance-scale'
                      }
                    ].map((right, index) => (
                      <div key={index} className="right-card mb-20 p-4" style={{ 
                        background: right.highlight ? 'rgba(255, 185, 68, 0.1)' : '#f8f9fa',
                        borderRadius: '12px',
                        border: right.highlight ? '2px solid #FFB944' : 'none'
                      }}>
                        <div className="d-flex">
                          <div style={{
                            width: '40px',
                            height: '40px',
                            background: right.highlight ? '#FFB944' : '#004a7c',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            flexShrink: 0
                          }}>
                            <span style={{ color: 'white', fontWeight: '700' }}>{right.letter}</span>
                          </div>
                          <div>
                            <h5 style={{ color: '#004a7c', fontWeight: '600', marginBottom: '8px' }}>
                              {right.title}
                              {right.highlight && (
                                <span className="ms-2 badge" style={{ background: '#FFB944', color: '#004a7c' }}>Opt-Out Available</span>
                              )}
                            </h5>
                            <p style={{ color: '#4a4a4a', marginBottom: '0' }}>{right.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 8 - Submit a Request */}
                <div className="privacy-section mb-50" id="requests">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    8. How to Submit a Privacy Request
                  </h3>

                  <div className="request-box p-4 text-center" style={{ 
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                    borderRadius: '12px',
                    border: '2px dashed #FFB944'
                  }}>
                    <p className="mb-3" style={{ color: '#4a4a4a' }}>You may submit a request by contacting us at:</p>
                    <a 
                      href="mailto:contact@fast2lend.com" 
                      style={{
                        background: '#004a7c',
                        color: 'white',
                        padding: '15px 40px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '18px',
                        fontWeight: '600',
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
                    <p className="mt-3 small" style={{ color: '#6c757d' }}>
                      We may verify your identity before processing your request.
                    </p>
                  </div>
                </div>

                {/* Section 9 - Authorized Agents */}
                <div className="privacy-section mb-50" id="agents">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    9. Authorized Agents
                  </h3>
                  
                  <p style={{ color: '#4a4a4a' }}>
                    You may designate an authorized agent to submit a request on your behalf. Proof of authorization may be required.
                  </p>
                </div>

                {/* Section 10 - Data Retention */}
                <div className="privacy-section mb-50" id="retention">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    10. Data Retention
                  </h3>

                  <p style={{ color: '#4a4a4a' }}>We retain personal information only as long as necessary to:</p>
                  <ul style={{ color: '#4a4a4a' }}>
                    <li>Fulfill lead-generation purposes</li>
                    <li>Meet legal and regulatory obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce agreements</li>
                  </ul>
                </div>

                {/* Section 11 - Minors */}
                <div className="privacy-section mb-50" id="minors">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    11. Minors
                  </h3>

                  <p style={{ color: '#4a4a4a' }}>
                    Fast2Lend does not knowingly sell or share the personal information of individuals under 16 years of age.
                  </p>
                </div>

                {/* Section 12 - Updates */}
                <div className="privacy-section mb-50">
                  <h3 className="section-title mb-25" style={{ 
                    color: '#004a7c', 
                    fontWeight: '700',
                    fontSize: '24px',
                    borderBottom: '2px solid #FFB944',
                    paddingBottom: '10px',
                    display: 'inline-block'
                  }}>
                    12. Updates to This Notice
                  </h3>

                  <p style={{ color: '#4a4a4a' }}>
                    We may update this California Privacy Notice from time to time. Any updates will be posted on this page with a revised effective date.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="contact-info-box p-4" style={{ 
                  background: '#004a7c',
                  borderRadius: '12px',
                  marginTop: '40px'
                }}>
                  <h5 style={{ color: '#FFB944', fontWeight: '600', marginBottom: '20px' }}>13. Contact Information</h5>
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

      {/* Opt-Out Modal */}
      {showOptOutModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            maxWidth: '500px',
            width: '90%',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowOptOutModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="text-center mb-30">
              <div style={{
                width: '80px',
                height: '80px',
                background: '#FFB944',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <i className="fas fa-ban" style={{ fontSize: '40px', color: '#004a7c' }}></i>
              </div>
              <h3 style={{ color: '#004a7c', fontWeight: '700' }}>Do Not Sell My Info</h3>
              <p style={{ color: '#6c757d' }}>Click below to opt out of the sale of your personal information.</p>
            </div>
            
            <a 
              href="mailto:contact@fast2lend.com?subject=Do%20Not%20Sell%20My%20Personal%20Information&body=I%20hereby%20request%20to%20opt%20out%20of%20the%20sale%20of%20my%20personal%20information%20under%20the%20CCPA."
              style={{
                background: '#FFB944',
                color: '#004a7c',
                padding: '15px',
                borderRadius: '30px',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                fontWeight: '600',
                marginBottom: '15px'
              }}
            >
              <i className="fas fa-envelope me-2"></i>
              Send Opt-Out Email
            </a>
            
            <button
              onClick={() => setShowOptOutModal(false)}
              style={{
                background: 'none',
                border: '1px solid #e0e0e0',
                padding: '10px',
                borderRadius: '30px',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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