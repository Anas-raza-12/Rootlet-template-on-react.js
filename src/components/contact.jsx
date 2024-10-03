import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("access_key", "9ac766c1-5c8e-44ea-abd9-d9dac81ba441");
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("  Submitted Successfully");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setResult(data.message);
      }
    } catch (err) {
      setResult("Failed to send message. Please try again.");
      console.error("Error:", err);
    } finally {
      setFormSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ClipLoader color="#000000" loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
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
          alignItems: "center"
        }}
      >
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "13vh" }} className="container-fluid p-0 contact">
      {formSubmitting ? (
        <div className="text-center">
          <BeatLoader color="#000000" loading={formSubmitting} size={15} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <>
          <div className="row">
          <div
              style={{ backgroundColor: "#212529" }}
              className="col-lg-5 col-md-12 contact-info"
            >
              <div data-aos="fade-up" className="d-flex contact-item">
                <img src="/src/assets/image/it-icon1.png" alt="Head Office" />
                <div style={{ color: "white" }}>
                  <h1>Head Office Address</h1>
                  <h3>
                    5577 West 79th Ave, Apt 07, Arvada, <br /> CO 80003.
                  </h3>
                </div>
              </div>
              <div data-aos="fade-up" className="d-flex contact-item">
                <img src="/src/assets/image/phone-call.png" alt="Phone" />
                <div style={{ color: "white" }}>
                  <h1>Reach us at</h1>
                  <h3>+1 424 382 0299</h3>
                </div>
              </div>
              <div data-aos="fade-up" className="d-flex contact-item">
                <img src="/src/assets/image/it-icon1.png" alt="Regional Office" />
                <div style={{ color: "white" }}>
                  <h1>Regional Office Address</h1>
                  <h3>
                    Office #1515-1516, 15th Floor, Caesar's <br />
                    Tower, Opposite to Aisha Bawani <br /> Shahrah-e-Faisal,
                    Karachi, Pakistan
                  </h3>
                </div>
              </div>
              <div data-aos="fade-up" className="d-flex contact-item">
                <img src="/src/assets/image/phone-call.png" alt="Phone" />
                <div style={{ color: "white" }}>
                  <h1>Reach us at</h1>
                  <h3>
                    +92 336 2131205 <br /> +92 321 2369029
                  </h3>
                </div>
              </div>
              <hr data-aos="fade-right" style={{ color: "white" }} />
              <div data-aos="fade-up" className="d-flex contact-item">
                <img src="/src/assets/image/email.png" alt="Email" />
                <div style={{ color: "white" }}>
                  <h1>Email</h1>
                  <h3>
                    <a
                      href="mailto:info@rootletsolutions.com"
                      style={{ color: "white" }}
                    >
                      info@rootletsolutions.com
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="col-lg-7 col-md-12">
              <div className="map-container">
              <iframe
                  data-aos="fade-down"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Westminster,%20CO%2080003,%20USA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <iframe
                  data-aos="fade-up"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Caesar's%20Tower+(Rootlet%20solution)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="container my-5">
            <h3 className="text-center">GET IN TOUCH</h3>
            <h1 className="text-center">How Can We Help?</h1>
            <p className="text-center">
              Contact us to request a quote or to schedule a consultation with our team.
            </p>

            <div className="row">
              <form onSubmit={handleSubmit}>
                <input
                  className="col-lg-6 col-md-10 col-sm-10"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  className="col-lg-6 col-md-10 col-sm-10"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="col-lg-6 col-md-10 col-sm-10"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your E-mail"
                  required
                />
                <input
                  className="col-lg-6 col-md-10 col-sm-10"
                  type="text" name="" required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
                <textarea
                  className="form-control col-lg-10 col-md-10 col-sm-10"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit">SEND MESSAGE!</button>
              </form>
              {result && <h1>{result}</h1>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
