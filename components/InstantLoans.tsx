"use client";

import { useEffect } from "react";
import Link from "next/link";

const InstantLoans = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="about-section about_area-one pt-120 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-one_image-box mb-50 wow fadeInLeft">
              <img src="/assets/images/hero/Main-Slider.png" alt="Instant Loans" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-one_content-box pl-lg-70 mb-50 wow fadeInRight">
              <div className="section-title mb-35">
                <span className="sub-title">Instant Loans, No Waiting</span>
                <h2 className="h2-tc">Get Your Cash Fast When You Need It Most</h2>
              </div>
              <p className="mb-30" style={{ color: '#FFF' }}>Our network includes lenders that may offer options based on your needs. Fast2Lend is your ideal partner in finding loans when you need them.</p>
              <p className="mb-30" style={{ color: '#FFF' }}>Compare lenders, understand costs, and choose the offer that fits you best.</p>
              
              <div className="row mt-40">
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li style={{ color: '#FFF' }}><i className="fas fa-check-circle text-success me-2" style={{ color: '#FFF' }}></i> <strong style={{ color: '#FFF' }}>Bad credit OK</strong> - Options for many credit profiles</li>
                    <li style={{ color: '#FFF' }}><i className="fas fa-check-circle text-success me-2" style={{ color: '#FFF' }}></i> <strong style={{ color: '#FFF' }}>Start online</strong> - Apply quickly, compare offers</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li style={{ color: '#FFF' }}><i className="fas fa-check-circle text-success me-2" style={{ color: '#FFF' }}></i> <strong style={{ color: '#FFF' }}>Withdraw cash in your A/c</strong> - Fast funding options available</li>
                    <li style={{ color: '#FFF' }}><i className="fas fa-check-circle text-success me-2" style={{ color: '#FFF' }}></i> <strong style={{ color: '#FFF' }}>Global Presence</strong> - Wide lender network coverage</li>
                  </ul>
                </div>
              </div>
              
              <div className="hero-button mt-40">
                <Link href="/apply" className="main-btn primary-btn">
                  Get Started <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantLoans;