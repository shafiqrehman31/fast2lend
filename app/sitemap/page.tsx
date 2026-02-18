"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>(["main", "pages", "legal"]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const filteredPages = (pages: Array<{ href: string; title: string; description?: string }>) => {
    if (!searchTerm) return pages;
    return pages.filter(page => 
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.href.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (page.description && page.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const mainPages = [
    { href: "/", title: "Home", description: "Fast loan provider USA - Get quick loans from $100 to $5000" },
    { href: "/about", title: "About Us", description: "Learn about Fast2Lend and our mission" },
    { href: "/how-it-works", title: "How It Works", description: "3 simple steps to your funds" },
    { href: "/faq", title: "FAQ", description: "Frequently asked questions about loans" },
    { href: "/contact", title: "Contact Us", description: "Get in touch with our support team" },
    { href: "/apply", title: "Apply Now", description: "Start your loan application today" },
  ];

  const legalPages = [
    { href: "/terms", title: "Terms and Conditions", description: "Terms of use for Fast2Lend services" },
    { href: "/privacy", title: "Privacy Policy", description: "How we collect and protect your data" },
    { href: "/california-privacy", title: "California Privacy Notice", description: "CCPA/CPRA rights for California residents" },
    { href: "/before-you-apply", title: "Before You Apply", description: "Important information before taking out a loan" },
  ];

  const resources = [
    { href: "/blog", title: "Blog", description: "Financial tips and loan advice" },
    { href: "/loan-calculator", title: "Loan Calculator", description: "Calculate your monthly payments" },
    { href: "/lenders", title: "Our Lenders", description: "Information about our lender network" },
    { href: "/rates", title: "Rates & Terms", description: "Understanding loan rates and terms" },
  ];

  const supportPages = [
    { href: "/contact", title: "Contact Support", description: "24/7 customer support" },
    { href: "/faq#general", title: "General Questions", description: "Common questions about Fast2Lend" },
    { href: "/faq#application", title: "Application FAQs", description: "Questions about the application process" },
    { href: "/faq#rates", title: "Rates & Terms FAQs", description: "Questions about loan rates and terms" },
    { href: "/faq#security", title: "Security FAQs", description: "Questions about data security" },
  ];

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
        
        {/* Sitemap Icon Decoration */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          opacity: 0.1,
          zIndex: 1
        }}>
          <i className="fas fa-sitemap" style={{ fontSize: '120px', color: '#FFB944' }}></i>
        </div>
        
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>
            Sitemap
          </h1>
          <p className="text-white-50 mb-3" style={{ fontSize: '18px' }}>
            Navigate through all pages of Fast2Lend
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
            <span className="text-white-50">/</span>
            <span className="text-white">Sitemap</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="sitemap-content py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          
          {/* Search Bar */}
          <div className="search-section mb-50">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="search-box position-relative">
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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

          {/* Quick Stats */}
          <div className="stats-row row mb-50">
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-card bg-white rounded-4 shadow-sm p-4 text-center">
                <h3 style={{ color: '#FFB944', fontSize: '32px', fontWeight: '700' }}>16+</h3>
                <p style={{ color: '#6c757d', marginBottom: '0' }}>Total Pages</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-card bg-white rounded-4 shadow-sm p-4 text-center">
                <h3 style={{ color: '#FFB944', fontSize: '32px', fontWeight: '700' }}>4</h3>
                <p style={{ color: '#6c757d', marginBottom: '0' }}>Legal Pages</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-card bg-white rounded-4 shadow-sm p-4 text-center">
                <h3 style={{ color: '#FFB944', fontSize: '32px', fontWeight: '700' }}>5</h3>
                <p style={{ color: '#6c757d', marginBottom: '0' }}>Main Sections</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-card bg-white rounded-4 shadow-sm p-4 text-center">
                <h3 style={{ color: '#FFB944', fontSize: '32px', fontWeight: '700' }}>24/7</h3>
                <p style={{ color: '#6c757d', marginBottom: '0' }}>Support Available</p>
              </div>
            </div>
          </div>

          {/* Sitemap Grid */}
          <div className="sitemap-grid">
            {/* Main Pages */}
            <div className="sitemap-section mb-40">
              <div 
                className="section-header d-flex justify-content-between align-items-center p-4 bg-white rounded-4 shadow-sm mb-20"
                onClick={() => toggleSection('main')}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#FFB944',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px'
                  }}>
                    <i className="fas fa-home" style={{ fontSize: '24px', color: '#004a7c' }}></i>
                  </div>
                  <div>
                    <h3 style={{ color: '#004a7c', fontWeight: '700', marginBottom: '5px' }}>Main Pages</h3>
                    <p style={{ color: '#6c757d', marginBottom: '0' }}>Core pages of the website</p>
                  </div>
                </div>
                <i className={`fas fa-chevron-${expandedSections.includes('main') ? 'up' : 'down'}`} style={{ color: '#FFB944', fontSize: '20px' }}></i>
              </div>

              {expandedSections.includes('main') && (
                <div className="section-content row">
                  {filteredPages(mainPages).map((page, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-20">
                      <Link href={page.href} style={{ textDecoration: 'none' }}>
                        <div className="page-card bg-white p-4 rounded-3" style={{
                          transition: 'all 0.3s',
                          border: '1px solid #e0e0e0',
                          height: '100%'
                        }}>
                          <h5 style={{ color: '#004a7c', fontWeight: '600', marginBottom: '10px' }}>
                            <i className="fas fa-arrow-right me-2" style={{ color: '#FFB944' }}></i>
                            {page.title}
                          </h5>
                          <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '0' }}>{page.description}</p>
                          <small style={{ color: '#FFB944' }}>{page.href}</small>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Legal Pages */}
            <div className="sitemap-section mb-40">
              <div 
                className="section-header d-flex justify-content-between align-items-center p-4 bg-white rounded-4 shadow-sm mb-20"
                onClick={() => toggleSection('legal')}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#FFB944',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px'
                  }}>
                    <i className="fas fa-gavel" style={{ fontSize: '24px', color: '#004a7c' }}></i>
                  </div>
                  <div>
                    <h3 style={{ color: '#004a7c', fontWeight: '700', marginBottom: '5px' }}>Legal & Privacy</h3>
                    <p style={{ color: '#6c757d', marginBottom: '0' }}>Terms, policies, and disclosures</p>
                  </div>
                </div>
                <i className={`fas fa-chevron-${expandedSections.includes('legal') ? 'up' : 'down'}`} style={{ color: '#FFB944', fontSize: '20px' }}></i>
              </div>

              {expandedSections.includes('legal') && (
                <div className="section-content row">
                  {filteredPages(legalPages).map((page, index) => (
                    <div key={index} className="col-lg-6 mb-20">
                      <Link href={page.href} style={{ textDecoration: 'none' }}>
                        <div className="page-card bg-white p-4 rounded-3" style={{
                          transition: 'all 0.3s',
                          border: '1px solid #e0e0e0',
                          height: '100%'
                        }}>
                          <h5 style={{ color: '#004a7c', fontWeight: '600', marginBottom: '10px' }}>
                            <i className="fas fa-arrow-right me-2" style={{ color: '#FFB944' }}></i>
                            {page.title}
                          </h5>
                          <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '0' }}>{page.description}</p>
                          <small style={{ color: '#FFB944' }}>{page.href}</small>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}

          </div>

          {/* XML Sitemap Note */}
          <div className="xml-note mt-50 p-4 bg-white rounded-4 shadow-sm">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h5 style={{ color: '#004a7c', fontWeight: '600', marginBottom: '10px' }}>
                  <i className="fas fa-code me-2" style={{ color: '#FFB944' }}></i>
                  XML Sitemap
                </h5>
                <p style={{ color: '#6c757d', marginBottom: '0' }}>
                  This is an HTML sitemap for users. We also have an XML sitemap for search engines to help index our pages.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                <a 
                  href="/sitemap.xml" 
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
                  <i className="fas fa-file-code me-2"></i>
                  View XML Sitemap
                </a>
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
        .page-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          border-color: #FFB944 !important;
        }
        .quick-link-card:hover {
          transform: translateY(-5px);
          background: #FFB944 !important;
          border-color: #FFB944 !important;
        }
        .quick-link-card:hover i,
        .quick-link-card:hover p {
          color: #004a7c !important;
        }
        .section-header:hover {
          background: #f8f9fa !important;
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