import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/image/logo.png"

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    services: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownEnter = (dropdownName) => {
    setDropdownOpen((prevDropdownOpen) => ({
      ...prevDropdownOpen,
      [dropdownName]: true,
    }));
  };

  const handleDropdownLeave = (dropdownName) => {
    setDropdownOpen((prevDropdownOpen) => ({
      ...prevDropdownOpen,
      [dropdownName]: false,
    }));
  };

  return (
    <div className="navbar-container">
      <nav className="main-nav container">
        <div className="logo">
          <Link to="/">
            <img width={"20%"} src={logo} alt="Logo" />
           
          </Link>
        </div>
        <div className={`menu-link ${isOpen ? "open" : ""}`}>
          <span>
            <Link  className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                } to="/">Home</Link>
          </span>
          <span
            onMouseEnter={() => handleDropdownEnter("about")}
            onMouseLeave={() => handleDropdownLeave("about")}
          >
            <Link
              className="nav-link dropdown-toggle"
              role="button"
              aria-expanded={dropdownOpen.about}
              to="/AboutUs"
            >
              About
            </Link>
            <ul
              className="dropdown-menu"
              style={{ display: dropdownOpen.about ? "block" : "none" }}
            >
              <li>
                <Link className="dropdown-item" to="/Potfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </span>
          <span
            onMouseEnter={() => handleDropdownEnter("services")}
            onMouseLeave={() => handleDropdownLeave("services")}
          >
            <Link
              className="nav-link dropdown-toggle"
              role="button"
              aria-expanded={dropdownOpen.services}
              to="/Services"
            >
              Services
            </Link>
            <ul
              className="dropdown-menu"
              style={{ display: dropdownOpen.services ? "block" : "none" }}
            >
              <li>
                <Link className="dropdown-item" to="/Web_Development">
                  Website Development
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/App_Development">
                  App Development
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/Graphic_Design">
                  Graphic Designing
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/UIUX_Design">
                  UI/UX Designing
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/SEO">
                  SEO
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/Content_Writing">
                  Content Writing
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/Video_Animation">
                  Video Animation
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/Digital_Marketing">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </span>
          <span>
            <Link to="/Pricing_Plan">Pricing Plan</Link>
          </span>
          <span>
            <Link to="/Blog">Blogs</Link>
          </span>
          <span>
            <Link to="/FAQs">FAQs</Link>
          </span>
          <span>
            <Link to="/Contact">Contact Us</Link>
          </span>
        </div>
        <div className="number">
          <h3>Let's Talk</h3>
          <p>
            <Link to="tel:+14243820299">+1 424 382 0299</Link>
          </p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
};

export default Navber;
