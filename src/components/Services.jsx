import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";




import serviceImage from "/src/assets/image/servicess.png";
import webdevImage from "/src/assets/image/dev6.png";
import mobdevImage from "/src/assets/image/mob.png";
import graphicImage from "/src/assets/image/graphic.png";
import uiImage from "/src/assets/image/ui.png";
import searchImage from "/src/assets/image/search.png";
import contentImage from "/src/assets/image/content.png";
import videoImage from "/src/assets/image/video1.png";
import digitalImage from "/src/assets/image/diigtal.png";
const Services = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
    <div
      style={{ marginTop: "13vh" }}
      className="Services container-fluid p-0"
    >
      <img width={"100%"} src={serviceImage} alt="Service Banner" />
      <div className="container">
        <h1 className="text-center" data-aos="fade-down">OUR SERVICES</h1>
        <p className="text-center" data-aos="fade-down">
          Approximately 85% of people use the Internet to discover local
          businesses. Nowadays, having a strong online presence, especially a
          good website, is crucial for attracting and retaining customers.
          Almost every business, regardless of its size, has a website.
        </p>
        <p className="text-center" data-aos="fade-down">
          However, having just any website is not enough. To stand out in a
          crowded market, you need a great website. Rootlet Solutions, a leading
          web development company, can help you create a powerful digital
          presence that sets you apart from your competitors and takes your
          business to new heights.
        </p>
        <div className="row">
          <h1 className="text-center" data-aos="fade-up">
            Our Web Development Services
            <br /> World-Class Solutions for Your Business
          </h1>
          <div className="col-lg-6 col-md-6 col-sm-12" >
            <div>
              <h1 data-aos="fade-up">WEBSITE DEVELOPMENT</h1 >
              <p data-aos="fade-up">
                Approximately 85% of people use the Internet to discover local
                businesses. Nowadays, having a strong online presence,
                especially a good website, is crucial for attracting and
                retaining customers. Almost every business, regardless of its
                size, has a website.
              </p>
              <p data-aos="fade-up">
                However, having just any website is not enough. To stand out in
                a crowded market, you need a great website. Rootlet Solutions, a
                leading web development company, can help you create a powerful
                digital presence that sets you apart from your competitors and
                takes your business to new heights. More Info
              </p>
              <button data-aos="fade-up">
                <Link to="/Web_Development" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={webdevImage} alt="Web Development" data-aos="fade-down"/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={mobdevImage} alt="Mobile Development" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">APP DEVELOPMENT</h1>
              <p data-aos="fade-up">
                We’re dedicated to providing our clients with cutting-edge,
                dependable, and user-focused mobile app solutions that enable
                them to meet their goals and stay one step ahead of the
                competition. Developing software applications especially for use
                on mobile devices, including smartphones and tablets, is referred
                to as app development or mobile app development. Numerous
                platforms, such as iOS (for Apple products like the iPhone and
                iPad) and Android (for devices running the Android operating
                system), are available for mobile app development. Our area of
                expertise is creating native iOS apps for iPads, iPhones, and
                other Apple products. Our iOS developers use the most recent
                frameworks, technologies, and design concepts to produce
                feature-rich, responsive apps that satisfy consumers and achieve
                business goals.
              </p>
              <button data-aos="fade-up">
                <Link to="/App_Development" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">GRAPHIC DESIGNING</h1>
              <p data-aos="fade-up">
                At Rootlet, we are aware of how important visually arresting
                content is to drawing in customers and successfully
                communicating your brand's message. Our graphic design services
                are customized to your unique requirements so that your business
                will stand out in a crowded market. Our all-inclusive graphic
                designing services guarantee uniformity in everything from color
                schemes to typography for all of your marketing collateral. We
                create a unified visual style that improves customer loyalty and
                brand identification.
              </p>
              <button data-aos="fade-up">
                <Link to="/Graphic_designe" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={graphicImage} alt="Graphic Designing" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={uiImage} alt="UI/UX Designing"  data-aos="fade-down"/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">UI/UX DESIGNING</h1>
              <p data-aos="fade-up">
                We at Rootlet Solutions are experts at creating digital
                experiences that are both aesthetically pleasing and easy to
                use. By increasing the usability, accessibility, and enjoyment
                of the user-product interaction, our UI/UX design services seek
                to increase user happiness. Our team of talented designers is
                ready to assist you in reaching your objectives, whether you're
                a startup trying to develop your first product or an established
                business trying to improve your current offers.
              </p>
              <button data-aos="fade-up">
                <Link to="/UIUX_Design" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">SEARCH ENGINE OPTIMIZATION (SEO)</h1>
              <p data-aos="fade-up">
                Discover the limitless possibilities for your online presence
                with Rootlet Solutions, your trusted partner for
                state-of-the-art SEO services. In a digital realm where
                visibility reigns supreme, our team of experts utilizes
                strategic and innovative methods to elevate your website to the
                pinnacle of search engine rankings. Explore our comprehensive
                range of SEO services and embark on the journey to establish
                your industry dominance in the online world.
              </p>
              <button data-aos="fade-up">
                <Link to="/SEO" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={searchImage} alt="SEO Services" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={contentImage} alt="Content Writing" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">CONTENT WRITING</h1>
              <p data-aos="fade-up">
                Rootlet Solutions is here to be your go-to source for
                professional content writing services in the United States.
                We're all about helping you elevate your brand, engage your
                audience, and achieve your business goals with our expertly
                crafted content. So, let's dive in and explore the diverse range
                of content writing services tailored to meet the unique needs of
                businesses across the USA!
              </p>
              <button data-aos="fade-up">
                <Link to="/Content_Writing" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">VIDEO ANIMATION</h1>
              <p data-aos="fade-up">
                Rootlet Solutions takes pride in delivering exceptional animated
                video services that bring your ideas to life. Our team of
                talented animators and creative minds is dedicated to crafting
                visually stunning and captivating animations that engage your
                audience. Discover our wide range of animated video services,
                tailored to meet your unique needs and elevate your brand.
              </p>
              <p data-aos="fade-up">
                Unleash the enchantment of animated video services at Rootlet
                Solutions. Animation is a powerful tool that goes beyond
                conventional storytelling, enabling you to effectively convey
                intricate messages in a visually appealing and easily
                understandable format. Our experts leverage cutting-edge
                technology and artistic expertise to create animations that
                deeply resonate with your target audience.
              </p>
              <button data-aos="fade-up">
                <Link to="/Video_Animation" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={videoImage} alt="Video Animation" data-aos="fade-down"/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={digitalImage} alt="Digital Marketing" data-aos="fade-down"/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">DIGITAL MARKETING</h1>
              <p data-aos="fade-up">
                Rootlet Solutions is a comprehensive digital marketing agency.
                We have been serving clients across industries since 2005,
                offering a wide range of services. Our expertise spans various
                online marketing tactics such as search engine optimization
                (SEO), pay-per-click (PPC) ads, Amazon store optimization,
                copywriting, and conversion rate optimization (CRO).
                Additionally, we specialize in web design and development for
                e-commerce and B2B companies. When it comes to choosing a
                digital marketing agency, trust is key. Partner with a company
                you can rely on.
              </p>
              <button data-aos="fade-up">
                <Link to="/Digital_marketing" rel="noopener noreferrer">More info</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cta container-3 container-fluid p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ">
              <h2 data-aos="fade-up">Let's Get in Touch</h2>
              <h1 data-aos="fade-up">LET'S TALK ABOUT YOUR BUSINESS IT SERVICES NEEDS</h1>
              <p data-aos="fade-up">Feel free to reach out to us.</p>
            </div>
            <div className="col-lg-6 col-md-5">
              <button data-aos="fade-right">
                <Link to="/Contact">
                  GET IN TOUCH <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
