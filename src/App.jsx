import React, { useEffect, } from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/AboutUs";
import PotFolio from "./components/Potfolio";
import Services from "./components/Services";
import WebDevelopment from "./components/WebDev";
import AppDevelopment from "./components/AppDev";
import Graphic_designe from "./components/Graphicdesigne";
import UIUX_DESIGN from "./components/UIUXdesign";
import SEO from "./components/SEO";
import Contact_Writing from "./components/Content_Writing";
import VideoAnimation from "./components/VideoAnimation";
import Digital_marketing from "./components/digitalMarketing";
import Pricing_Planfrom from "./components/PricingPlan";
import Blog from "./components/Blog";
import FAQs from "./components/FAQs";
import Contact from "./components/contact";
import Blogs_Details from "./components/Blogs-Details";
import Aos from "aos";

import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return     (
    <>
  <Router>
      <div>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Potfolio" element={<PotFolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Web_Development" element={<WebDevelopment />} />
          <Route path="/App_Development" element={<AppDevelopment />} />
          <Route path="/Graphic_designe" element={<Graphic_designe />} />
          <Route path="/UIUX_Design" element={<UIUX_DESIGN />} />
          <Route path="/SEO" element={<SEO />} />
          <Route path="/Content_Writing" element={<Contact_Writing />} />
          <Route path="/Video_Animation" element={<VideoAnimation />} />
          <Route path="/Digital_marketing" element={<Digital_marketing />} />
          <Route path="/Pricing_Plan" element={<Pricing_Planfrom />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BlogsDetails/:id" element={<Blogs_Details />} />
        </Routes>
        <Footer />
    </div>
  </Router>
  </>
  );
};

export default App;
