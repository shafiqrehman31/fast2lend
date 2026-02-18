"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for contacting us! We\'ll get back to you soon.');
  };

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner" style={{ background: 'linear-gradient(135deg, rgb(0, 152, 255) 0%, rgb(0, 74, 124) 100%)', padding: '100px 0' }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '48px', fontWeight: '700' }}>Contact Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link href="/" className="text-white-50">Home</Link></li>
              <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info py-120">
        <div className="container">
          <div className="row">
            {[
              { icon: 'fa-map-marker-alt', title: 'Visit Us', info: '17 Hanover Square, Londen, England, W1s 1BN ' },
              { icon: 'fa-envelope', title: 'Email Us', info: 'support@fast2lend.com', sub: 'We reply within 24 hours' }
            ].map((item, index) => (
              <div className="col-lg-6 col-md-6 mb-30" key={index}>
                <div className="contact-card text-center p-4" style={{ 
                  background: '#fff',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  padding: '40px 20px'
                }}>
                  <div className="icon mb-20">
                    <i className={`fas ${item.icon}`} style={{ fontSize: '40px', color: '#FFB944' }}></i>
                  </div>
                  <h5 className="mb-15">{item.title}</h5>
                  <p className="mb-0" style={{ color: '#6c757d' }}>{item.info}</p>
                  {item.sub && <small style={{ color: '#FFB944' }}>{item.sub}</small>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section py-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-40">
              <div className="contact-form-wrapper bg-white p-50 rounded-4 shadow">
                <h3 className="mb-30">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-20">
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 20px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-20">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 20px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="col-12 mb-20">
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 20px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="col-12 mb-30">
                      <textarea 
                        name="message"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{
                          width: '100%',
                          padding: '12px 20px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          resize: 'vertical'
                        }}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit"
                        style={{
                          background: 'linear-gradient(45deg, #FFB944, #FFA500)',
                          color: '#004a7c',
                          padding: '15px 40px',
                          borderRadius: '30px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                          width: '100%'
                        }}
                      >
                        Send Message <i className="fas fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}