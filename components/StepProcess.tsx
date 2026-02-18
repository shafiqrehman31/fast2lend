"use client";

import { useEffect } from "react";
import Link from "next/link";

const StepProcess = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="process-section pt-120">
      <div className="process-wrapper p-r z-1">
        <div className="shape line-shape wow fadeInUp">
          <span><img src="/assets/images/shape/line.png" alt="Line Shape" /></span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-65 wow fadeInDown">
                <span className="sub-title" style={{ backgroundColor: '#004a7c' }}>Simple Process</span>
                <h2>3 Simple Steps to Your Funds</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-process-item mb-60 wow fadeInUp">
                <div className="process-inner-content" style={{ backgroundColor: '#E1EEDD' }}>
                  <div className="step"><img src="/assets/images/shape/step1.png" alt="Step 1" /></div>
                  <div className="icon">
                    <img src="/assets/images/icon/icon-7.png" alt="Apply Icon" />
                  </div>
                  <div className="content">
                    <h5>Fill Out Application</h5>
                    <p>Complete our simple online form – it takes just 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-process-item mb-60 wow fadeInUp">
                <div className="process-inner-content" style={{ backgroundColor: '#004a7c', color: 'white' }}>
                  <div className="step"><img src="/assets/images/shape/step2.png" alt="Step 2" /></div>
                  <div className="icon">
                    <img src="/assets/images/icon/icon-8.png" alt="Review Icon" />
                  </div>
                  <div className="content">
                    <h5 style={{ color: '#FFF' }}>Review Offers</h5>
                    <p style={{ color: '#FFF' }}>Compare loan options from our network of trusted lenders</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-process-item mb-60 wow fadeInUp">
                <div className="process-inner-content" style={{ backgroundColor: '#FFB966' }}>
                  <div className="step"><img src="/assets/images/shape/step3.png" alt="Step 3" /></div>
                  <div className="icon">
                    <img src="/assets/images/icon/icon-9.png" alt="Funds Icon" />
                  </div>
                  <div className="content">
                    <h5>Get Your Cash</h5>
                    <p>Receive funds directly in your account as fast as next day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepProcess;