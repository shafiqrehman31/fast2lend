"use client";

import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <footer className="footer-area  p-r z-1" style={{ backgroundColor: '#004a7c' }}>
      <div className="container">
        {/* Footer Top with Menu */}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-lg-4 col-md-12 mb-40">
              <div className="footer-widget about-widget pr-lg-50 wow fadeInUp">
                <div className="footer-logo mb-20">
                  <img src="/assets/images/logo/Fast2Lend-White-Logo.png" alt="Fast2Lend Logo" style={{ maxWidth: '180px' }} onError={(e) => {
                    // Fallback if white logo doesn't exist
                    (e.target as HTMLImageElement).src = '/assets/images/logo/logo-black.png';
                  }} />
                </div>
                <p className="mb-30" style={{ color: '#B0B0C0', lineHeight: '1.8' }}>
                  Fast2Lend connects you with trusted lenders for quick loans from $100 to $5,000. Fast, secure, and transparent.
                </p>
                <div className="social-box">
                  <ul className="social-link d-flex gap-3">
                    <li><a href="#" className="social-icon" style={{ color: '#B0B0C0', fontSize: '18px', transition: 'color 0.3s' }}
                           onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                           onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>
                      <i className="fab fa-facebook-f"></i>
                    </a></li>
                    <li><a href="#" className="social-icon" style={{ color: '#B0B0C0', fontSize: '18px', transition: 'color 0.3s' }}
                           onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                           onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>
                      <i className="fab fa-twitter"></i>
                    </a></li>
                    <li><a href="#" className="social-icon" style={{ color: '#B0B0C0', fontSize: '18px', transition: 'color 0.3s' }}
                           onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                           onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>
                      <i className="fab fa-linkedin-in"></i>
                    </a></li>
                    <li><a href="#" className="social-icon" style={{ color: '#B0B0C0', fontSize: '18px', transition: 'color 0.3s' }}
                           onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                           onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>
                      <i className="fab fa-instagram"></i>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4 col-sm-6 mb-40">
              <div className="footer-widget quick-links wow fadeInUp" data-wow-delay=".1s">
                <h4 className="widget-title mb-25" style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '600' }}>Quick Links</h4>
                <ul className="footer-links list-unstyled">
                  <li className="mb-2"><Link href="/" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Home</Link></li>
                  <li className="mb-2"><Link href="/about" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>About Us</Link></li>
                  <li className="mb-2"><Link href="/how-it-works" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>How It Works</Link></li>
                  <li className="mb-2"><Link href="/apply" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Apply Now</Link></li>
                  <li className="mb-2"><Link href="/contact" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Legal Links */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
              <div className="footer-widget legal-links wow fadeInUp" data-wow-delay=".2s">
                <h4 className="widget-title mb-25" style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '600' }}>Legal</h4>
                <ul className="footer-links list-unstyled">
                  <li className="mb-2"><Link href="/terms" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Terms and Conditions</Link></li>
                  <li className="mb-2"><Link href="/privacy" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Privacy Policy</Link></li>
                  <li className="mb-2"><Link href="/california-privacy" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>California Privacy Notice</Link></li>
                  <li className="mb-2"><Link href="/before-you-apply" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Before you Apply</Link></li>
                  <li className="mb-2"><Link href="/faq" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>FAQ</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-4 mb-40">
              <div className="footer-widget contact-info wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title mb-25" style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '600' }}>Contact</h4>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <i className="fas fa-map-marker-alt me-3 mt-1" style={{ color: '#FFB944' }}></i>
                    <span style={{ color: '#B0B0C0', lineHeight: '1.6' }}>17 Hanover Square, Londen,<br /> England, W1S 1BN </span>
                  </li>

                  <li className="mb-3 d-flex">
                    <i className="fas fa-envelope me-3" style={{ color: '#FFB944' }}></i>
                    <a href="mailto:support@fast2lend.com" className="text-decoration-none" style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                       onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                       onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>support@fast2lend.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosures Section */}
        <div className="disclosures-area py-40 border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="row">
            <div className="col-12">
              <div className="disclosure-content">
                <h5 className="mb-3" style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600' }}>Important Disclosures</h5>
                
                <div className="disclosure-item mb-3">
                  <p className="small mb-1" style={{ color: '#9A9AB0', lineHeight: '1.7' }}>
                    <strong style={{ color: '#FFB944' }}>Material Disclosure:</strong> Fast2Lend is a loan search platform, not a lender. We do not make credit decisions. We connect you with a network of lenders who may offer loans between $100 and $5,000.
                  </p>
                </div>
                
                <div className="disclosure-item mb-3">
                  <p className="small mb-1" style={{ color: '#9A9AB0', lineHeight: '1.7' }}>
                    <strong style={{ color: '#FFB944' }}>APR Disclosure:</strong> Representative APRs range from 5.99% to 35.99%. Repayment terms range from 61 days to 72 months. Your actual APR depends on your credit profile, income, and loan terms.
                  </p>
                </div>
                
                <div className="disclosure-item">
                  <p className="small mb-0" style={{ color: '#9A9AB0', lineHeight: '1.7' }}>
                    <strong style={{ color: '#FFB944' }}>Credit Check:</strong> Participating lenders may verify your social security number and review your credit worthiness through national databases like Equifax, Transunion, and Experian. This may affect your credit score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright py-30">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-text wow fadeInLeft">
                <p className="small mb-0" style={{ color: '#9A9AB0' }}>
                  © {new Date().getFullYear()} Fast2Lend. All rights reserved.
                </p>
              </div>
            </div>
               <div className="col-lg-4">
              <div className="footer-text wow fadeInLeft">
                <p className="small mb-0" style={{ color: '#9A9AB0' }}>
                 Fast2Leand is a trading style of ALOHA Private LIMITED. 
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-nav text-lg-end wow fadeInRight">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <Link href="/terms" className="text-decoration-none small" 
                          style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Terms</Link>
                  </li>
                  <li className="list-inline-item me-3">
                    <Link href="/privacy" className="text-decoration-none small"
                          style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Privacy</Link>
                  </li>
                  <li className="list-inline-item me-3">
                    <Link href="/california-privacy" className="text-decoration-none small"
                          style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>CA Notice</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/sitemap" className="text-decoration-none small"
                          style={{ color: '#B0B0C0', transition: 'color 0.3s' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}>Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-area {
          position: relative;
          z-index: 1;
        }
        .border-top, .border-bottom {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .py-30 {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .py-40 {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        a {
          transition: color 0.3s ease;
        }
        a:hover {
          color: #FFB944 !important;
        }
        .widget-title {
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }
        .list-unstyled li {
          margin-bottom: 12px;
        }
        .disclosure-item {
          background: rgba(255, 255, 255, 0.02);
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid #FFB944;
        }
        .disclosure-item p {
          margin-bottom: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;