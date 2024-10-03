import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader"; 

const Pricing_Plan = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
 
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setError(null);
      } catch (error) {
        setError("An error occurred while fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ClipLoader
          color="#000000"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "13vh " }} className="container Pricing_Plan">
      <h3 data-aos="fade-down" className="text-center">OUR PRICES</h3>
      <h1 data-aos="fade-down" className="text-center">Best Price Guarantee</h1>
      <p data-aos="fade-up" className="text-center">
        Experience the epitome of product excellence with our unparalleled
        quality and unmatched durability. Our commitment to superior
        craftsmanship ensures products that exceed expectations, providing
        lasting value and reliability.
      </p>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-11 col1" data-aos="fade-right">
          <div className="h2">
            <h2 className="text-center">BASIC PLAN</h2>
          </div>
          <div className="text-center">
            <h1>$499</h1>
            <p>ORIGINAL PRICE $600.00</p>
          </div>
          <div className="li">
            <li> <i className="fa-solid fa-check"></i> 1 to 20 page SEO friendly website</li>
            <li> <i className="fa-solid fa-check"></i> Dedicated Designer</li>
            <li> <i className="fa-solid fa-check"></i> Logo Creation</li>
            <li> <i className="fa-solid fa-check"></i> Powered by WordPress - Industry Trusted and Award Winning SEO Friendly Content Management System</li>
            <li> <i className="fa-solid fa-check"></i> Keyword Research</li>
            <li> <i className="fa-solid fa-check"></i> Mobile Responsive</li>
            <li> <i className="fa-solid fa-check"></i> Integrated and Highly Secure Enquiry/Contact Form</li>
            <li> <i className="fa-solid fa-check"></i> Social Media integration</li>
            <li> <i className="fa-solid fa-check"></i> SEO Coding</li>
            <li> <i className="fa-solid fa-check"></i> Your Visitors don’t get bored! Also Assists your Google Ranking.</li>
          </div>
          <button>
            <Link to="/Contact">GET STARTED</Link>
          </button>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11 col2" data-aos="fade-up">
          <div style={{ backgroundColor: "#F1F3F7" }}>
            <h2 className="text-center">STANDARD PLAN</h2>
          </div>
          <div className="text-center">
            <h1>$1200</h1>
            <p>ORIGINAL PRICE $1500.00</p>
          </div>
          <div className="li">
            <li> <i className="fa-solid fa-check"></i> 1 to 20 page SEO friendly website</li>
            <li> <i className="fa-solid fa-check"></i> Dedicated Designer</li>
            <li> <i className="fa-solid fa-check"></i> Logo Creation</li>
            <li> <i className="fa-solid fa-check"></i> Bootstrap</li>
            <li> <i className="fa-solid fa-check"></i> Powered by WordPress - Industry Trusted and Award Winning SEO Friendly Content Management System</li>
            <li> <i className="fa-solid fa-check"></i> Complete Online Store Integrated</li>
            <li> <i className="fa-solid fa-check"></i> Mobile Responsive</li>
            <li> <i className="fa-solid fa-check"></i> Integrated and Highly Secure Enquiry/Contact Form</li>
            <li> <i className="fa-solid fa-check"></i> Social Media integration</li>
            <li> <i className="fa-solid fa-check"></i> SEO Coding</li>
            <li> <i className="fa-solid fa-check"></i> 100 Products Entry</li>
            <li> <i className="fa-solid fa-check"></i> Get More Customers to your website from Google(SEO)</li>
          </div>
          <button>
            <Link to="/Contact">GET STARTED</Link>
          </button>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11 col3" data-aos="fade-left">
          <div style={{ backgroundColor: "#504BFD" }}>
            <h2 className="text-center">ADVANCED PLAN</h2>
          </div>
          <div className="text-center">
            <h1>$1890</h1>
            <p>ORIGINAL PRICE $2000.00</p>
          </div>
          <div className="li">
            <li><i className="fa-solid fa-check"></i> OUR BESPOKE - GOOGLE FRIENDLY - WEBSITE QUOTATION – BOOK + PAY</li>
            <li> <i className="fa-solid fa-check"></i> 1 to 20 page SEO friendly website</li>
            <li> <i className="fa-solid fa-check"></i> Dedicated Designer</li>
            <li> <i className="fa-solid fa-check"></i> Logo Creation</li>
            <li> <i className="fa-solid fa-check"></i> Powered by WordPress - Industry Trusted and Award Winning SEO Friendly Content Management System</li>
            <li> <i className="fa-solid fa-check"></i> Complete Online Store Integrated</li>
            <li> <i className="fa-solid fa-check"></i> We integrate well-known payment processors like PayPal to provide you with a smooth checkout process.</li>
            <li> <i className="fa-solid fa-check"></i> Mobile Responsive</li>
            <li> <i className="fa-solid fa-check"></i> Integrated and Highly Secure Enquiry/Contact Form</li>
            <li> <i className="fa-solid fa-check"></i> Social Media integration</li>
            <li> <i className="fa-solid fa-check"></i> Bespoke SEO Coding and friendly URLs</li>
            <li> <i className="fa-solid fa-check"></i> Get More Customers to your website from Google(SEO)</li>
          </div>
          <button>
            <Link to="/Contact">GET STARTED</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing_Plan;
