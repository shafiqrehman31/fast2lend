"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-wrapper-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 order-2 order-xl-1">
              <div className="hero-content">
                <span className="tag-line wow fadeInDown" data-wow-delay=".3s">
                  <i className="far fa-arrow-right"></i>Fast Loan Provider USA
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  Get Quick Loans from <span className="text-primary">$100 to $5000</span> Instantly
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Fast2Lend provides instant loan solutions across the United States with minimal documentation and quick approval.
                </p>
                <div className="hero-button mb-40 wow fadeInDown" data-wow-delay=".7s">
                  <Link href="/contact" className="main-btn primary-btn">
                    Apply Now <i className="far fa-arrow-right"></i>
                  </Link>
                  <Link href="/about" className="main-btn secondary-btn">
                    Learn More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="award-box wow fadeInUp" data-wow-delay=".8s">
                  <h6>Trusted by 50,000+ Customers</h6>
                  <ul>
                    <li><Image src="/assets/images/gallery/n-awards-1.png" alt="Trust Badge 1" width={60} height={60} /></li>
                    <li><Image src="/assets/images/gallery/n-awards-2.png" alt="Trust Badge 2" width={60} height={60} /></li>
                    <li><Image src="/assets/images/gallery/n-awards-3.png" alt="Trust Badge 3" width={60} height={60} /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-1 order-xl-2">
              <div className="hero-one-image wow fadeInRight" data-wow-delay=".8s">
                <Image 
                  src="/assets/images/about/WEbsite-graphics-2.png" 
                  alt="Fast Loan Hero" 
                  width={600} 
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;