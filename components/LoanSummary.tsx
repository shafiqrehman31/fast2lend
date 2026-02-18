"use client";

import { useEffect } from "react";

const LoanSummary = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="features-section pt-70 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title" style={{ color: '#0F0F2D' }}>Loan Summary</span>
              <h2>Transparent Pricing Examples</h2>
              <p className="mt-20">We are not a lender, but we believe in transparency. Below is an example of what a loan might cost.</p>
            </div>
          </div>
        </div>
        
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Loan Amount</th>
                    <th>$500</th>
                    <th>$1,000</th>
                    <th>$2,500</th>
                    <th>$5,000</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Interest Rate</strong></td>
                    <td>24.00%</td>
                    <td>19.00%</td>
                    <td>16.00%</td>
                    <td>13.00%</td>
                  </tr>
                  <tr>
                    <td><strong>Loan Term</strong></td>
                    <td>6 months</td>
                    <td>12 months</td>
                    <td>24 months</td>
                    <td>36 months</td>
                  </tr>
                  <tr>
                    <td><strong>Fee</strong></td>
                    <td>3.00%</td>
                    <td>5.00%</td>
                    <td>10.00%</td>
                    <td>12.00%</td>
                  </tr>
                  <tr>
                    <td><strong>Monthly Payment</strong></td>
                    <td>$89.26</td>
                    <td>$94.56</td>
                    <td>$126.89</td>
                    <td>$168.33</td>
                  </tr>
                  <tr>
                    <td><strong>APR</strong></td>
                    <td>29.82%</td>
                    <td>24.12%</td>
                    <td>22.93%</td>
                    <td>18.23%</td>
                  </tr>
                  <tr>
                    <td><strong>Total Payback</strong></td>
                    <td>$535.56</td>
                    <td>$1,134.72</td>
                    <td>$3,045.36</td>
                    <td>$6,059.88</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="alert alert-info mt-30 text-center">
              <p className="mb-0"><strong>Consumer Advisory:</strong> Rates range from 5.99% to 35.99% APR for qualified consumers. Actual terms vary by lender.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSummary;