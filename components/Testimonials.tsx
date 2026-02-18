"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "California, CA",
      rating: 5,
      review: "Fast2Lend helped me get a loan when I needed it most. The process was quick and easy. I received my funds the next day! Highly recommend their service.",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "New York, NY",
      rating: 5,
      review: "I was skeptical at first, but Fast2Lend connected me with a great lender. The rates were competitive and the customer service was excellent. 5 stars!",
      initials: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      review: "Amazing service! I needed emergency funds and Fast2Lend made it happen. The whole process took less than 24 hours. Will definitely use again.",
      initials: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Austin, TX",
      rating: 5,
      review: "Very professional and transparent. They explained all the terms clearly and I got multiple offers to choose from. Saved me so much time!",
      initials: "DT"
    },
    {
      id: 5,
      name: "Lisa Williams",
      location: "Chicago, IL",
      rating: 5,
      review: "Fast2Lend is a lifesaver! My credit isn't perfect but they still found lenders willing to work with me. The funds came through quickly. Thank you!",
      initials: "LW"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Render stars
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'text-warning' : 'text-secondary'}`}
        style={{ color: i < rating ? '#FFB944' : '#e0e0e0' }}
      ></i>
    ));
  };

  return (
    <section className="testimonial-section py-80" style={{ background: '#f8f9fa' }}>
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-8 text-center">
            <span className="sub-title" style={{ 
              color: '#FFB944', 
              fontWeight: '600',
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Testimonials
            </span>
            <h2 style={{ 
              color: '#0A0A1A', 
              fontWeight: '700',
              fontSize: '36px',
              marginTop: '10px',
              fontFamily: 'Syne, sans-serif'
            }}>
              What Our Customers Say
            </h2>
            <p style={{ 
              color: '#6c757d',
              fontSize: '16px',
              marginTop: '15px'
            }}>
              Join thousands of satisfied customers who found the right loan through Fast2Lend
            </p>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="row justify-content-center mb-40">
          <div className="col-lg-4 col-md-6">
            <div className="rating-summary bg-white rounded-4 p-4 text-center shadow-sm">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div>
                  <span style={{ fontSize: '48px', fontWeight: '700', color: '#0A0A1A' }}>4.9</span>
                  <span style={{ color: '#6c757d', fontSize: '16px' }}>/5</span>
                </div>
                <div>
                  <div className="stars mb-2">
                    {renderStars(5)}
                  </div>
                  <p style={{ color: '#6c757d', margin: 0 }}>Based on 2,500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="position-relative">
          {/* Main Testimonial Card */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div 
                className="testimonial-card bg-white rounded-4 shadow-lg p-50"
                style={{
                  animation: 'fadeIn 0.5s ease',
                  minHeight: '350px'
                }}
              >
                <div className="text-center mb-30">
                  {/* Quote Icon */}
                  <i className="fas fa-quote-right" style={{ 
                    fontSize: '40px', 
                    color: '#FFB944',
                    opacity: 0.3
                  }}></i>
                </div>

                {/* Rating */}
                <div className="stars mb-30 text-center">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>

                {/* Review Text */}
                <p className="review-text text-center mb-30" style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#4a4a4a',
                  fontStyle: 'italic',
                  minHeight: '100px'
                }}>
                  "{testimonials[currentSlide].review}"
                </p>

                {/* Author Info */}
                <div className="author-info d-flex align-items-center justify-content-center">

                  <div>
                    <h5 style={{ 
                      color: '#0A0A1A', 
                      fontWeight: '600',
                      marginBottom: '5px',
                      fontFamily: 'Syne, sans-serif'
                    }}>
                      {testimonials[currentSlide].name}
                    </h5>
                    <p style={{ color: '#6c757d', margin: 0, fontSize: '14px' }}>
                      {testimonials[currentSlide].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="btn position-absolute"
            style={{
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <i className="fas fa-chevron-left" style={{ color: '#0A0A1A' }}></i>
          </button>
          <button 
            onClick={nextSlide}
            className="btn position-absolute"
            style={{
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <i className="fas fa-chevron-right" style={{ color: '#0A0A1A' }}></i>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="dots-container text-center mt-40">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSlide ? '#FFB944' : '#e0e0e0',
                margin: '0 5px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0
              }}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="row justify-content-center mt-50">
          <div className="col-lg-8">
            <div className="trust-badges d-flex justify-content-center gap-5 flex-wrap">
              <div className="text-center">
                <i className="fas fa-shield-alt fa-2x" style={{ color: '#FFB944' }}></i>
                <p style={{ color: '#6c757d', fontSize: '14px', marginTop: '5px' }}>Secure & Private</p>
              </div>
              <div className="text-center">
                <i className="fas fa-bolt fa-2x" style={{ color: '#FFB944' }}></i>
                <p style={{ color: '#6c757d', fontSize: '14px', marginTop: '5px' }}>Fast Approval</p>
              </div>
              <div className="text-center">
                <i className="fas fa-hand-holding-heart fa-2x" style={{ color: '#FFB944' }}></i>
                <p style={{ color: '#6c757d', fontSize: '14px', marginTop: '5px' }}>Customer First</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .py-80 {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .p-50 {
          padding: 50px;
        }
        .mb-40 {
          margin-bottom: 40px;
        }
        .mt-40 {
          margin-top: 40px;
        }
        .mt-50 {
          margin-top: 50px;
        }
        .mb-50 {
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .py-80 {
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .p-50 {
            padding: 30px;
          }
          .review-text {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;