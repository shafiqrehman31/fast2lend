"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const steps = [
    {
      number: "01",
      title: "Fill Out Application",
      description: "Complete our simple online form. It takes just 2 minutes and requires basic personal and financial information.",
      icon: "fa-file-alt"
    },
    {
      number: "02",
      title: "Review Offers",
      description: "Compare loan options from our network of trusted lenders. Review rates, terms, and choose what works best for you.",
      icon: "fa-search"
    },
    {
      number: "03",
      title: "Get Your Cash",
      description: "Once approved, funds are deposited directly into your account. Many lenders offer next-day funding.",
      icon: "fa-dollar-sign"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner" style={{ background: 'linear-gradient(135deg, rgb(0, 152, 255) 0%, rgb(0, 74, 124) 100%)', padding: '100px 0' }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700' }}>How It Works</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
              <li className="breadcrumb-item active text-white" aria-current="page">How It Works</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section py-120">
        <div className="container">
          <div className="text-center mb-60">
            <span className="sub-title" style={{ color: '#FFB944', fontWeight: '600' }}>Simple Process</span>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0A0A1A' }}>Get Your Loan in 3 Easy Steps</h2>
            <p className="mt-20" style={{ color: '#6c757d', maxWidth: '600px', margin: '20px auto 0' }}>
              We've simplified the loan process so you can get the funds you need without the hassle.
            </p>
          </div>

          <div className="row">
            {steps.map((step, index) => (
              <div className="col-lg-4 mb-40" key={index}>
                <div className="step-card text-center p-40" style={{ 
                  background: '#fff', 
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  transition: 'all 0.3s'
                }}>
                  <div className="step-number" style={{
                    width: '60px',
                    height: '60px',
                    background: '#FFB944',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 30px',
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#004a7c'
                  }}>
                    {step.number}
                  </div>
                  <div className="icon mb-20">
                    <i className={`fas ${step.icon}`} style={{ fontSize: '48px', color: '#0A0A1A' }}></i>
                  </div>
                  <h4 className="mb-20">{step.title}</h4>
                  <p style={{ color: '#6c757d' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="faq-teaser py-120" style={{ background: '#f8f9fa' }}>
        <div className="container text-center">
          <h3 className="mb-30" style={{ fontSize: '28px', fontWeight: '600' }}>Still Have Questions?</h3>
          <p className="mb-40" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
            Check out our FAQ page for answers to common questions about loans, applications, and more.
          </p>
          <Link href="/faq" className="main-btn" style={{ 
            background: '#004a7c',
            color: '#fff',
            padding: '15px 40px',
            borderRadius: '30px',
            fontWeight: '600',
            display: 'inline-block',
            textDecoration: 'none'
          }}>
            Visit FAQ <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}