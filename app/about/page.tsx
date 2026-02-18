"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner" style={{ background: 'linear-gradient(135deg, rgb(0, 152, 255) 0%, rgb(0, 74, 124) 100%)', padding: '100px 0' }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700' }}>About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
              <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content py-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-40">
              <img src="/assets/images/about/WEbsite-graphics (1).png" alt="About Fast2Lend" className="img-fluid rounded-4 shadow" />
            </div>
            <div className="col-lg-6 mb-40">
              <span className="sub-title" style={{ color: '#FFB944', fontWeight: '600' }}>Who We Are</span>
              <h2 className="mb-30" style={{ fontSize: '36px', fontWeight: '700', color: '#0A0A1A' }}>Your Trusted Partner in Fast Loans</h2>
              <p className="mb-30" style={{ color: '#6c757d', lineHeight: '1.8' }}>
                Fast2Lend is a leading loan search platform dedicated to connecting borrowers with trusted lenders across the United States. Since our founding, we've helped thousands of customers access the funds they need quickly and securely.
              </p>
              <p className="mb-40" style={{ color: '#6c757d', lineHeight: '1.8' }}>
                Our mission is simple: to make borrowing transparent, accessible, and stress-free. We believe everyone deserves fair access to credit, regardless of their financial history.
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="stat-box" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3 style={{ color: '#FFB944', fontSize: '32px', fontWeight: '700' }}>50K+</h3>
                    <p style={{ color: '#6c757d' }}>Happy Customers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3 style={{ color: '#FFB944', fontSize: '32px', fontWeight: '700' }}>$100M+</h3>
                    <p style={{ color: '#6c757d' }}>Funds Disbursed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="values-section py-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-60">
            <span className="sub-title" style={{ color: '#FFB944', fontWeight: '600' }}>Our Values</span>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0A0A1A' }}>What Drives Us Forward</h2>
          </div>
          <div className="row">
            {[
              { icon: 'fa-shield-alt', title: 'Transparency', desc: 'We believe in clear, honest communication about rates and terms.' },
              { icon: 'fa-bolt', title: 'Speed', desc: 'Fast approvals and quick funding when you need it most.' },
              { icon: 'fa-hand-holding-heart', title: 'Accessibility', desc: 'Loans available for all credit types and backgrounds.' },
              { icon: 'fa-lock', title: 'Security', desc: 'Your data is protected with bank-level encryption.' }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6 mb-30" key={index}>
                <div className="value-card text-center p-4 bg-white rounded-4 shadow-sm" style={{ transition: 'all 0.3s' }}>
                  <div className="icon mb-20">
                    <i className={`fas ${item.icon}`} style={{ fontSize: '40px', color: '#FFB944' }}></i>
                  </div>
                  <h4 className="mb-15">{item.title}</h4>
                  <p style={{ color: '#6c757d' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}