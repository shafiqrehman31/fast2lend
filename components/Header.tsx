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
    
    // Initialize any header-related JavaScript
    if (typeof window !== "undefined") {
      // Trigger any header initialization if needed
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`header-area ${isScrolled ? 'sticky-header' : ''}`}>
      {/* Header Top Bar - Compact and Stylish */}
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

      {/* Header Navigation - Modern Design */}
      <div className="header-navigation" style={{ background: isScrolled ? 'rgba(255,255,255,0.98)' : '#fff', boxShadow: isScrolled ? '0 5px 20px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.3s ease' }}>
        <div className="nav-overlay"></div>
        <div className="container-fluid">
          <div className="primary-menu d-flex align-items-center justify-content-between">
            {/* Site Branding with Animation */}
            <div className="site-branding">
              <Link href="/" className="brand-logo d-flex align-items-center">
                <img src="/assets/images/logo/fast2Lend.png" alt="Fast2Lend Logo" style={{ height: '150px', width: 'auto', transition: 'all 0.3s' }} />
     
              </Link>
            </div>

            {/* Navigation Menu - Modern Style */}
            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <div className="mobile-logo mb-30 d-block d-xl-none d-flex justify-content-between align-items-center">
                <Link href="/" className="brand-logo">
                  <img src="/assets/images/logo/fast2Lend.png" alt="Fast2Lend Logo" style={{ height: '100px' }} />
                </Link>
                <button className="close-mobile-menu" onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px' }}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <nav className="main-menu">
                <ul className="d-flex gap-4">
                  <li className="menu-item">
                    <Link href="/" className={isActive('/') ? 'active' : ''} style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      position: 'relative',
                      transition: 'color 0.3s'
                    }}>
                      Home
                      {isActive('/') && <span style={{ position: 'absolute', bottom: '20px', left: '0', width: '100%', height: '2px', background: '#FFB944' }}></span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/about" className={isActive('/about') ? 'active' : ''} style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/about') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      transition: 'color 0.3s'
                    }}>
                      About Us
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/how-it-works" className={isActive('/how-it-works') ? 'active' : ''} style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/how-it-works') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      transition: 'color 0.3s'
                    }}>
                      How it Works
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/faq" className={isActive('/faq') ? 'active' : ''} style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/faq') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      transition: 'color 0.3s'
                    }}>
                      FAQ
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/contact" className={isActive('/contact') ? 'active' : ''} style={{ 
                      padding: '30px 0', 
                      display: 'inline-block',
                      color: isActive('/contact') ? '#FFB944' : '#0A0A1A',
                      fontWeight: '600',
                      transition: 'color 0.3s'
                    }}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Navigation Items */}
            <div className="nav-right-item d-flex align-items-center gap-4">
              <div className="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal" style={{ cursor: 'pointer' }}>
                <i className="fas fa-search" style={{ color: '#0A0A1A', fontSize: '18px' }}></i>
              </div>
              <div className="menu-button">
                <Link href="/cotact" className="main-btn" style={{ 
                  background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                  color: '#0A0A1A',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  boxShadow: '0 5px 15px rgba(255, 185, 68, 0.3)',
                  transition: 'all 0.3s'
                }}>
                  Apply Now <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
              <div className="navbar-toggler d-xl-none" onClick={() => setIsMobileMenuOpen(true)} style={{ cursor: 'pointer' }}>
                <span style={{ display: 'block', width: '25px', height: '2px', background: '#0A0A1A', margin: '5px 0' }}></span>
                <span style={{ display: 'block', width: '25px', height: '2px', background: '#0A0A1A', margin: '5px 0' }}></span>
                <span style={{ display: 'block', width: '25px', height: '2px', background: '#0A0A1A', margin: '5px 0' }}></span>
              </div>
            </div>
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
        .nav-menu {
          transition: all 0.3s ease;
        }
        @media (max-width: 1200px) {
          .nav-menu {
            position: fixed;
            top: 0;
            left: -100%;
            width: 300px;
            height: 100vh;
            background: white;
            z-index: 1001;
            padding: 30px;
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
            overflow-y: auto;
          }
          .nav-menu.active {
            left: 0;
          }
          .main-menu ul {
            flex-direction: column;
            gap: 0 !important;
          }
          .main-menu ul li a {
            padding: 15px 0 !important;
            display: block !important;
          }
        }
        .main-menu ul li a:hover {
          color: #FFB944 !important;
        }
        .main-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 185, 68, 0.4) !important;
        }
        .close-mobile-menu {
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;