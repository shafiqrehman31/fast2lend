"use client";

import { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="testimonial-section pt-120 blue-bg pb-130" style={{ backgroundColor: '#004a7c' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center text-white mb-70 wow fadeInDown">
              <span className="sub-title">By The Numbers</span>
              <h2>Why Thousands Choose Fast2Lend</h2>
              <p className="text-white-50">Built to help you compare options quickly, safely, and with confidence.</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="single-features-item text-center text-white wow fadeInUp" style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
              <div className="icon mb-20">
                <i className="fas fa-shield-alt fa-3x text-warning"></i>
              </div>
              <h4 className="title text-white">Secure & Private</h4>
              <p className="text-white-50">Bank-Level Encryption</p>
              <p className="mt-10">Your data is protected by 256-bit SSL security and never sold to unauthorized parties.</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="single-features-item text-center text-white wow fadeInUp" data-wow-delay=".2s" style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
              <div className="icon mb-20">
                <i className="fas fa-clock fa-3x text-warning"></i>
              </div>
              <h4 className="title text-white">Fast Funding</h4>
              <p className="text-white-50">Next-Day Availability</p>
              <p className="mt-10">Many lenders in our network can deposit funds directly to your account by the next business day.</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="single-features-item text-center text-white wow fadeInUp" data-wow-delay=".4s" style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
              <div className="icon mb-20">
                <i className="fas fa-users fa-3x text-warning"></i>
              </div>
              <h4 className="title text-white">All Credit Types</h4>
              <p className="text-white-50">Fair Consideration</p>
              <p className="mt-10">Our lenders look beyond just your credit score. We accept requests from all credit backgrounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;