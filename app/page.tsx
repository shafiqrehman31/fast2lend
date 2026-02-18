"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StepProcess from "@/components/StepProcess";
import InstantLoans from "@/components/InstantLoans";
import LoanSummary from "@/components/LoanSummary";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize WOW.js if available
      if (window.WOW) {
        new window.WOW().init();
      }
    }
  }, []);

  return (
    <>
      {/* Offcanvas Panel */}
      <div className="offcanvas-panel">
        <div className="panel-overlay"></div>
        <div className="offcanvas-panel-inner">
          <div className="panel-logo">
            <a href="/"><img src="/assets/images/logo/logo-black.png" alt="Fast2Lend Logo" /></a>
          </div>
          <div className="about-us">
            <h5 className="panel-widget-title">About Fast2Lend</h5>
            <p>
              We provide fast and reliable loan solutions from $100 to $5000 with minimal documentation and instant approval.
            </p>
          </div>
          <div className="contact-us">
            <h5 className="panel-widget-title">Quick Contact</h5>
            <form>
              <div className="form_group">
                <input type="text" className="form_control" placeholder="Your Name" name="name" required />
              </div>
              <div className="form_group">
                <input type="email" className="form_control" placeholder="Your Email" name="email" required />
              </div>
              <div className="form_group">
                <textarea className="form_control" placeholder="Message" name="message" rows={3}></textarea>
              </div>
              <div className="form_group">
                <button className="main-btn secondary-btn">Send Message</button>
              </div>
            </form>
          </div>
          <a href="#" className="panel-close"><i className="fal fa-times"></i></a>
        </div>
      </div>

      <Header />
      <HeroSection />
      <StepProcess />
      <InstantLoans />
      <LoanSummary />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <Footer />
      
      {/* Back to Top Button */}
      <a href="#" className="back-to-top"><i className="far fa-angle-up"></i></a>
    </>
  );
}