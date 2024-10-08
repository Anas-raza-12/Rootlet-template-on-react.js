import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/image/ROOTLET_LOGO_WHITE_-2048x809.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul>
              <h1>USEFUL LINKS</h1>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Pricing_Plan">Pricing Plan</Link>
              </li>
              <li>
                <Link to="/BLog">BLogs</Link>
              </li>
              <li>
                <Link to="/FAQs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul>
              <h1>OUR SERVICES</h1>
              <li>
                <Link to="/Web_Development">Website Development</Link>
              </li>
              <li>
                <Link to="/App_Development">App Development</Link>
              </li>
              <li>
                <Link to="/Graphic_designe">Graphic Designing</Link>
              </li>
              <li>
                <Link to="/UIUX_Design">UI/UX Designing</Link>
              </li>
              <li>
                <Link to="/SEO">SEO</Link>
              </li>
              <li>
                <Link to="/Content_Writing">Content Writing</Link>
              </li>
              <li>
                <Link to="/Video_Animation">Video Animation</Link>
              </li>
              <li>
                <Link to="/Digital_marketing">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul>
              <h1>CONTACT US</h1>
              <li>
                <Link to="/Contact">Contact us</Link>
              </li>
              <li>
                <Link to="/Contact">EMAIL</Link>
              </li>
              <li>
                <Link to="https://rootletsolutions.com/">
                  info@rootletsolutions.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h1> SOCIAL MEDIA</h1>
            <div>
              <Link to="https://www.facebook.com/rootletsolutions7">
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="https://www.youtube.com/channel/UCSfBjMMfKqP3T9KAs1VfZbA">
                {" "}
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link to="https://www.instagram.com/rootlet_solutions7/">
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="https://www.linkedin.com/company/rootlet-solutions/">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
            <form action="">
              <label htmlFor="Emial">Email</label>
              <br />
              <input type="email" placeholder="Enter your email" />
              <br />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Link to="/">
              <img width={"20%"} src={logo} alt="logo " />
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-8 last_line">
            {" "}
            <p
              style={{ color: "white", textAlign: "right", fontSize: "15px" }}
              className="text-end"
            >
              <Link to="https://rootletsolutions.com">Rootlet Solutions.</Link>{" "}
              © 2024
              <Link
                style={{ cursor: "auto" }}
                to="https://www.instagram.com/ar_anas_23/"
              >
                .
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
