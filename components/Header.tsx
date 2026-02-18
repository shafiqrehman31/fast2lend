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

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <header className={`header-area ${isScrolled ? 'sticky-header' : ''}`}>
        {/* Header Top Bar */}
        <div className="header-top-bar" style={{ background: '#004a7c', padding: '0px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-start col-md-6">
                <span style={{ color: '#B0B0C0', fontSize: '14px' }}>
                  <i className="far fa-envelope" style={{ color: '#FFB944', marginRight: '5px' }}></i>
                  <a href="mailto:support@fast2lend.com" style={{ color: '#fff', textDecoration: 'none' }}>support@fast2lend.com</a>
                </span>
              </div>
              <div className="col-12 text-center text-md-end col-md-6 d-none d-md-block">
                <span style={{ color: '#B0B0C0', fontSize: '14px' }}>
                  <i className="far fa-clock" style={{ color: '#FFB944', marginRight: '5px' }}></i>
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="main-header" style={{ 
          background: '#fff', 
          padding: '15px 0',
          boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
        }}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              {/* Logo */}
              <Link href="/">
                <img 
                  src="/assets/images/logo/fast2Lend.png" 
                  alt="Fast2Lend" 
                  style={{ height: '120px', width: 'auto' }}
                />
              </Link>

              {/* Desktop Menu - Updated with Syne font */}
              <div className="d-none d-lg-flex align-items-center">
                <ul className="d-flex list-unstyled mb-0 me-4">
                  <li className="mx-3">
                    <Link href="/" style={{ 
                      color: isActive('/') ? '#FFB944' : '#004a7c',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '20px'
                    }}>Home</Link>
                  </li>
                  <li className="mx-3">
                    <Link href="/about" style={{ 
                      color: isActive('/about') ? '#FFB944' : '#004a7c',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '20px'
                    }}>About</Link>
                  </li>
                  <li className="mx-3">
                    <Link href="/how-it-works" style={{ 
                      color: isActive('/how-it-works') ? '#FFB944' : '#004a7c',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '20px'
                    }}>How it Works</Link>
                  </li>
                  <li className="mx-3">
                    <Link href="/faq" style={{ 
                      color: isActive('/faq') ? '#FFB944' : '#004a7c',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '20px'
                    }}>FAQ</Link>
                  </li>
                  <li className="mx-3">
                    <Link href="/contact" style={{ 
                      color: isActive('/contact') ? '#FFB944' : '#004a7c',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '20px'
                    }}>Contact</Link>
                  </li>
                </ul>
                <Link href="/apply" className="btn" style={{
                  background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                  color: '#004a7c',
                  padding: '10px 25px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Apply Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="d-lg-none btn"
                onClick={() => setIsMobileMenuOpen(true)}
                style={{
                  background: 'none',
                  border: '1px solid #e0e0e0',
                  padding: '10px 15px',
                  fontSize: '20px'
                }}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isMobileMenuOpen ? '0' : '-100%',
        width: '300px',
        height: '100%',
        background: '#fff',
        zIndex: 9999,
        transition: 'left 0.3s ease',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        overflowY: 'auto'
      }}>
        {/* Mobile Menu Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <img src="/assets/images/logo/fast2Lend.png" alt="Fast2Lend" style={{ height: '40px' }} />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        {/* Mobile Menu Links - Updated with Syne font */}
        <div style={{ padding: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{
                display: 'block',
                padding: '12px 15px',
                background: isActive('/') ? '#FFF4E0' : 'transparent',
                color: isActive('/') ? '#FFB944' : '#004a7c',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: isActive('/') ? '600' : '400',
                fontFamily: '"Syne", sans-serif'
              }}>
                🏠 Home
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{
                display: 'block',
                padding: '12px 15px',
                background: isActive('/about') ? '#FFF4E0' : 'transparent',
                color: isActive('/about') ? '#FFB944' : '#004a7c',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: isActive('/about') ? '600' : '400',
                fontFamily: '"Syne", sans-serif'
              }}>
                ℹ️ About Us
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} style={{
                display: 'block',
                padding: '12px 15px',
                background: isActive('/how-it-works') ? '#FFF4E0' : 'transparent',
                color: isActive('/how-it-works') ? '#FFB944' : '#004a7c',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: isActive('/how-it-works') ? '600' : '400',
                fontFamily: '"Syne", sans-serif'
              }}>
                ⚙️ How it Works
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} style={{
                display: 'block',
                padding: '12px 15px',
                background: isActive('/faq') ? '#FFF4E0' : 'transparent',
                color: isActive('/faq') ? '#FFB944' : '#004a7c',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: isActive('/faq') ? '600' : '400',
                fontFamily: '"Syne", sans-serif'
              }}>
                ❓ FAQ
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{
                display: 'block',
                padding: '12px 15px',
                background: isActive('/contact') ? '#FFF4E0' : 'transparent',
                color: isActive('/contact') ? '#FFB944' : '#004a7c',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: isActive('/contact') ? '600' : '400',
                fontFamily: '"Syne", sans-serif'
              }}>
                📧 Contact Us
              </Link>
            </li>
          </ul>

          <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{
            display: 'block',
            padding: '15px',
            background: 'linear-gradient(45deg, #FFB944, #FFA500)',
            color: '#004a7c',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            textAlign: 'center',
            marginTop: '20px',
            fontFamily: '"Syne", sans-serif'
          }}>
            ⚡ Apply Now
          </Link>

          {/* Contact Info */}
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <h6 style={{ marginBottom: '15px', color: '#004a7c', fontFamily: '"Syne", sans-serif' }}>Contact Info</h6>
            <p style={{ marginBottom: '10px', fontSize: '14px', fontFamily: '"Syne", sans-serif' }}>
              📧 support@fast2lend.com
            </p>
            <p style={{ marginBottom: 0, fontSize: '14px', fontFamily: '"Syne", sans-serif' }}>
              🕒 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;