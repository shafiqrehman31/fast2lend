"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`header-area ${isScrolled ? 'sticky-header' : ''}`}>
      {/* Header Top Bar */}
      <div className="header-top-bar" style={{ background: 'linear-gradient(90deg, #0A0A1A 0%, #1A1A3A 100%)' }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="top-left d-flex flex-wrap gap-4">
                <span className="d-flex align-items-center">
                  <i className="far fa-envelope" style={{ color: '#FFB944', marginRight: '8px' }}></i>
                  <a href="mailto:support@fast2lend.com" className="text-white" style={{ fontSize: '14px', textDecoration: 'none' }}>support@fast2lend.com</a>
                </span>
                <span className="d-flex align-items-center">
                  <i className="far fa-clock" style={{ color: '#FFB944', marginRight: '8px' }}></i>
                  <span style={{ fontSize: '14px', color: '#B0B0C0' }}>Mon-Fri: 24/7 Support</span>
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="top-right d-flex justify-content-end align-items-center gap-4">
                <ul className="social-link d-flex gap-3 mb-0">
                  <li><a href="#" style={{ color: '#B0B0C0', transition: 'all 0.3s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" style={{ color: '#B0B0C0', transition: 'all 0.3s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" style={{ color: '#B0B0C0', transition: 'all 0.3s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#" style={{ color: '#B0B0C0', transition: 'all 0.3s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFB944'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#B0B0C0'}><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="header-navigation" style={{ 
        background: isScrolled ? 'rgba(255,255,255,0.98)' : '#fff', 
        boxShadow: isScrolled ? '0 5px 20px rgba(0,0,0,0.1)' : 'none', 
        transition: 'all 0.3s ease',
        position: 'relative',
        zIndex: 1000
      }}>
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between" style={{ height: '100px' }}>
            {/* Logo */}
            <div className="site-branding">
              <Link href="/">
                <img src="/assets/images/logo/fast2Lend.png" alt="Fast2Lend Logo" style={{ height: '80px', width: 'auto' }} />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="d-none d-xl-block">
              <nav className="main-menu">
                <ul className="d-flex gap-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  <li>
                    <Link href="/" style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      position: 'relative',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}>
                      Home
                      {isActive('/') && <span style={{ position: 'absolute', bottom: '20px', left: '0', width: '100%', height: '2px', background: '#FFB944' }}></span>}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/about') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/how-it-works') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}>
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/faq') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/contact') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Desktop Right Items */}
            <div className="d-none d-xl-flex align-items-center gap-4">
              <div className="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal" style={{ cursor: 'pointer' }}>
                <i className="fas fa-search" style={{ color: '#0A0A1A', fontSize: '18px' }}></i>
              </div>
              <Link href="/apply" className="main-btn" style={{ 
                background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                color: '#0A0A1A',
                padding: '12px 30px',
                borderRadius: '30px',
                fontWeight: '600',
                fontFamily: '"Syne", sans-serif',
                boxShadow: '0 5px 15px rgba(255, 185, 68, 0.3)',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}>
                Apply Now <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>

            {/* Mobile Right Items */}
            <div className="d-xl-none d-flex align-items-center gap-3">
              <Link href="/apply" className="main-btn" style={{ 
                background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                color: '#0A0A1A',
                padding: '8px 16px',
                borderRadius: '30px',
                fontWeight: '600',
                fontFamily: '"Syne", sans-serif',
                fontSize: '14px',
                textDecoration: 'none'
              }}>
                Apply
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                style={{ 
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
                aria-label="Toggle mobile menu"
              >
                <span style={{ width: '25px', height: '2px', background: '#0A0A1A', display: 'block' }}></span>
                <span style={{ width: '25px', height: '2px', background: '#0A0A1A', display: 'block' }}></span>
                <span style={{ width: '25px', height: '2px', background: '#0A0A1A', display: 'block' }}></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998,
            animation: 'fadeIn 0.3s ease'
          }}
        />
      )}

      {/* Mobile Menu - Always rendered but positioned off-screen when closed */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isMobileMenuOpen ? '0' : '-100%',
        width: '320px',
        height: '100vh',
        background: '#fff',
        zIndex: 9999,
        transition: 'right 0.3s ease-in-out',
        boxShadow: '-5px 0 30px rgba(0,0,0,0.15)',
        overflowY: 'auto',
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
      }}>
        {/* Mobile Menu Header */}
        <div style={{
          padding: '25px 20px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fff'
        }}>
          <img src="/assets/images/logo/fast2Lend.png" alt="Fast2Lend" style={{ height: '40px', width: 'auto' }} />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              color: '#0A0A1A',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
          >
            ×
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div style={{ padding: '20px' }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '5px' }}>
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '15px 20px',
                    color: isActive('/') ? '#FFB944' : '#0A0A1A',
                    textDecoration: 'none',
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: isActive('/') ? '600' : '500',
                    fontSize: '16px',
                    background: isActive('/') ? '#FFF4E0' : 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    borderLeft: isActive('/') ? '4px solid #FFB944' : '4px solid transparent'
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '15px 20px',
                    color: isActive('/about') ? '#FFB944' : '#0A0A1A',
                    textDecoration: 'none',
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: isActive('/about') ? '600' : '500',
                    fontSize: '16px',
                    background: isActive('/about') ? '#FFF4E0' : 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    borderLeft: isActive('/about') ? '4px solid #FFB944' : '4px solid transparent'
                  }}
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <Link 
                  href="/how-it-works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '15px 20px',
                    color: isActive('/how-it-works') ? '#FFB944' : '#0A0A1A',
                    textDecoration: 'none',
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: isActive('/how-it-works') ? '600' : '500',
                    fontSize: '16px',
                    background: isActive('/how-it-works') ? '#FFF4E0' : 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    borderLeft: isActive('/how-it-works') ? '4px solid #FFB944' : '4px solid transparent'
                  }}
                >
                  How it Works
                </Link>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <Link 
                  href="/faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '15px 20px',
                    color: isActive('/faq') ? '#FFB944' : '#0A0A1A',
                    textDecoration: 'none',
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: isActive('/faq') ? '600' : '500',
                    fontSize: '16px',
                    background: isActive('/faq') ? '#FFF4E0' : 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    borderLeft: isActive('/faq') ? '4px solid #FFB944' : '4px solid transparent'
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '15px 20px',
                    color: isActive('/contact') ? '#FFB944' : '#0A0A1A',
                    textDecoration: 'none',
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: isActive('/contact') ? '600' : '500',
                    fontSize: '16px',
                    background: isActive('/contact') ? '#FFF4E0' : 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    borderLeft: isActive('/contact') ? '4px solid #FFB944' : '4px solid transparent'
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Apply Button */}
          <div style={{ marginTop: '30px' }}>
            <Link 
              href="/apply" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 20px',
                background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                color: '#0A0A1A',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontFamily: '"Syne", sans-serif',
                textAlign: 'center',
                fontSize: '16px',
                transition: 'all 0.3s',
                boxShadow: '0 5px 15px rgba(255, 185, 68, 0.3)'
              }}
            >
              Apply Now
            </Link>
          </div>

          {/* Contact Info */}
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '12px'
          }}>
            <h6 style={{ 
              marginBottom: '15px', 
              color: '#0A0A1A',
              fontFamily: '"Syne", sans-serif',
              fontWeight: '600',
              fontSize: '16px'
            }}>
              Contact Info
            </h6>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-envelope" style={{ color: '#FFB944', width: '20px' }}></i>
              <a href="mailto:support@fast2lend.com" style={{ 
                color: '#4a4a4a', 
                textDecoration: 'none',
                fontFamily: '"Syne", sans-serif',
                fontSize: '14px'
              }}>
                support@fast2lend.com
              </a>
            </div>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-phone" style={{ color: '#FFB944', width: '20px' }}></i>
              <a href="tel:+18001234567" style={{ 
                color: '#4a4a4a', 
                textDecoration: 'none',
                fontFamily: '"Syne", sans-serif',
                fontSize: '14px'
              }}>
                +1 (800) 123-4567
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-clock" style={{ color: '#FFB944', width: '20px' }}></i>
              <span style={{ 
                color: '#4a4a4a',
                fontFamily: '"Syne", sans-serif',
                fontSize: '14px'
              }}>
                24/7 Customer Support
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div style={{
            marginTop: '30px',
            padding: '20px 0',
            textAlign: 'center',
            borderTop: '1px solid #e0e0e0'
          }}>
            <p style={{ 
              marginBottom: '15px',
              color: '#6c757d',
              fontFamily: '"Syne", sans-serif',
              fontSize: '14px'
            }}>
              Follow Us
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: '25px'
            }}>
              <li>
                <a href="#" style={{ color: '#B0B0C0', fontSize: '20px', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#FFB944'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0C0'}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#B0B0C0', fontSize: '20px', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#FFB944'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0C0'}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#B0B0C0', fontSize: '20px', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#FFB944'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0C0'}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#B0B0C0', fontSize: '20px', transition: 'color 0.3s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#FFB944'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0C0'}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <div className="modal fade search-modal" id="search-modal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ background: 'transparent', border: 'none' }}>
            <div className="modal-body">
              <form className="position-relative">
                <input 
                  type="search" 
                  className="form-control" 
                  placeholder="Search here..." 
                  name="search"
                  style={{ 
                    padding: '15px 30px',
                    borderRadius: '50px',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                />
                <button type="submit" style={{ 
                  position: 'absolute', 
                  right: '15px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#FFB944'
                }}>
                  <i className="fas fa-search fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-area.sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .main-menu ul li a:hover {
          color: #FFB944 !important;
        }
        
        .main-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 185, 68, 0.4) !important;
        }
        
        @media (max-width: 1200px) {
          .header-navigation {
            padding: 10px 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;