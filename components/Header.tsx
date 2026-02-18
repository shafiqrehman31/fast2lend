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

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [pathname, isMobileMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`header-area ${isScrolled ? 'sticky-header' : ''}`}>
      {/* Header Top Bar - Hide on mobile */}
      <div className="header-top-bar d-none d-md-block" style={{ background: 'linear-gradient(90deg, #004a7c 0%, #1A1A3A 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="top-left d-flex flex-wrap gap-4">
                <span className="d-flex align-items-center">
                  <i className="far fa-envelope" style={{ color: '#FFB944', marginRight: '8px' }}></i>
                  <a href="mailto:support@fast2lend.com" className="text-white" style={{ fontSize: '14px', textDecoration: 'none' }}>support@fast2lend.com</a>
                </span>
                <span className="d-flex align-items-center">
                  <i className="far fa-clock" style={{ color: '#FFB944', marginRight: '8px' }}></i>
                  <span style={{ fontSize: '14px', color: '#B0B0C0' }}>24/7 Support</span>
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-right d-flex justify-content-end align-items-center">
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

      {/* Header Navigation */}
      <div className="header-navigation" style={{ 
        background: isScrolled ? 'rgba(255,255,255,0.98)' : '#fff', 
        boxShadow: isScrolled ? '0 5px 20px rgba(0,0,0,0.1)' : 'none', 
        transition: 'all 0.3s ease',
        padding: '10px 0'
      }}>
        <div className="nav-overlay"></div>
        <div className="container">
          <div className="primary-menu d-flex align-items-center justify-content-between">
            {/* Site Branding - Adjusted for mobile */}
            <div className="site-branding">
              <Link href="/" className="brand-logo d-flex align-items-center">
                <img 
                  src="/assets/images/logo/fast2Lend.png" 
                  alt="Fast2Lend Logo" 
                  style={{ 
                    height: isScrolled ? '40px' : '50px',
                    width: 'auto', 
                    transition: 'all 0.3s',
                    maxWidth: '150px'
                  }} 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="main-menu d-none d-xl-block">
              <ul className="d-flex gap-4 mb-0">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/about', label: 'About Us' },
                  { path: '/how-it-works', label: 'How it Works' },
                  { path: '/faq', label: 'FAQ' },
                  { path: '/contact', label: 'Contact Us' },
                ].map((item) => (
                  <li key={item.path} className="menu-item">
                    <Link 
                      href={item.path} 
                      style={{ 
                        padding: '20px 0', 
                        display: 'inline-block',
                        color: isActive(item.path) ? '#FFB944' : '#004a7c',
                        fontWeight: '600',
                        fontSize: '16px',
                        position: 'relative',
                        transition: 'color 0.3s',
                        textDecoration: 'none'
                      }}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <span style={{ 
                          position: 'absolute', 
                          bottom: '10px', 
                          left: '0', 
                          width: '100%', 
                          height: '2px', 
                          background: '#FFB944' 
                        }}></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Navigation Items - Desktop */}
            <div className="nav-right-item d-none d-xl-flex align-items-center gap-3">
              <div className="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal" style={{ cursor: 'pointer' }}>
                <i className="fas fa-search" style={{ color: '#004a7c', fontSize: '18px' }}></i>
              </div>
              <Link href="/apply" className="main-btn" style={{ 
                background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                color: '#004a7c',
                padding: '10px 25px',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 5px 15px rgba(255, 185, 68, 0.3)',
                transition: 'all 0.3s',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}>
                Apply Now <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>

            {/* Mobile Header Actions */}
            <div className="d-flex d-xl-none align-items-center gap-2">
              <Link href="/apply" className="main-btn" style={{ 
                background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                color: '#004a7c',
                padding: '8px 15px',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '14px',
                boxShadow: '0 5px 15px rgba(255, 185, 68, 0.3)',
                transition: 'all 0.3s',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}>
                Apply <i className="fas fa-arrow-right ms-1"></i>
              </Link>
              <div className="search-btn me-2" data-bs-toggle="modal" data-bs-target="#search-modal" style={{ cursor: 'pointer' }}>
                <i className="fas fa-search" style={{ color: '#004a7c', fontSize: '18px' }}></i>
              </div>
              <button 
                className="navbar-toggler" 
                onClick={() => setIsMobileMenuOpen(true)} 
                style={{ 
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '5px'
                }}
              >
                <span style={{ display: 'block', width: '25px', height: '2px', background: '#004a7c', margin: '5px 0' }}></span>
                <span style={{ display: 'block', width: '25px', height: '2px', background: '#004a7c', margin: '5px 0' }}></span>
                <span style={{ display: 'block', width: '25px', height: '2px', background: '#004a7c', margin: '5px 0' }}></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease'
          }}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} style={{
        position: 'fixed',
        top: 0,
        right: isMobileMenuOpen ? '0' : '-100%',
        width: '85%',
        maxWidth: '350px',
        height: '100vh',
        background: 'white',
        zIndex: 1001,
        transition: 'right 0.3s ease',
        boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
        overflowY: 'auto'
      }}>
        {/* Mobile Menu Header */}
        <div className="mobile-menu-header p-4 d-flex justify-content-between align-items-center border-bottom">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/assets/images/logo/fast2Lend.png" alt="Fast2Lend Logo" style={{ height: '40px', width: 'auto' }} />
          </Link>
          <button 
            className="close-menu-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#004a7c'
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="mobile-nav p-4">
          <ul className="list-unstyled">
            {[
              { path: '/', label: 'Home', icon: 'fa-home' },
              { path: '/about', label: 'About Us', icon: 'fa-info-circle' },
              { path: '/how-it-works', label: 'How it Works', icon: 'fa-gear' },
              { path: '/faq', label: 'FAQ', icon: 'fa-question-circle' },
              { path: '/contact', label: 'Contact Us', icon: 'fa-envelope' },
            ].map((item) => (
              <li key={item.path} className="mb-3">
                <Link 
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 15px',
                    background: isActive(item.path) ? '#FFF4E0' : 'transparent',
                    color: isActive(item.path) ? '#FFB944' : '#004a7c',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: isActive(item.path) ? '600' : '400',
                    transition: 'all 0.3s'
                  }}
                >
                  <i className={`fas ${item.icon} me-3`} style={{ width: '20px', color: '#FFB944' }}></i>
                  {item.label}
                  {isActive(item.path) && (
                    <i className="fas fa-check ms-auto" style={{ color: '#FFB944' }}></i>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Info */}
          <div className="mobile-contact mt-5 p-3" style={{ background: '#f8f9fa', borderRadius: '10px' }}>
            <h6 className="mb-3" style={{ color: '#004a7c', fontWeight: '600' }}>Contact Info</h6>
            <p className="mb-2 d-flex align-items-center">
              <i className="fas fa-envelope me-2" style={{ color: '#FFB944' }}></i>
              <a href="mailto:support@fast2lend.com" style={{ color: '#4a4a4a', textDecoration: 'none', fontSize: '14px' }}>support@fast2lend.com</a>
            </p>
            <p className="mb-2 d-flex align-items-center">
              <i className="fas fa-phone me-2" style={{ color: '#FFB944' }}></i>
              <a href="tel:+18001234567" style={{ color: '#4a4a4a', textDecoration: 'none', fontSize: '14px' }}>+1 (800) 123-4567</a>
            </p>
            <p className="mb-0 d-flex align-items-center">
              <i className="fas fa-clock me-2" style={{ color: '#FFB944' }}></i>
              <span style={{ color: '#4a4a4a', fontSize: '14px' }}>24/7 Customer Support</span>
            </p>
          </div>

          {/* Mobile Social Links */}
          <div className="mobile-social mt-4 text-center">
            <ul className="d-flex justify-content-center gap-3 list-unstyled mb-0">
              <li><a href="#" style={{ color: '#B0B0C0', fontSize: '20px' }}><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" style={{ color: '#B0B0C0', fontSize: '20px' }}><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" style={{ color: '#B0B0C0', fontSize: '20px' }}><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#" style={{ color: '#B0B0C0', fontSize: '20px' }}><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </nav>
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
        
        .mobile-menu ul li a:hover {
          background: #f8f9fa;
        }
        
        @media (max-width: 1200px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .navbar-toggler span {
            width: 22px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;