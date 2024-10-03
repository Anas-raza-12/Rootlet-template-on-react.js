import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import ClipLoader from "react-spinners/ClipLoader";

import ProgressBar from "./ProgressBar"; // Ensure you have the correct path

const Home = () => {
  const skills = [
    { name: "Website Development", percentage: 92, person: "92%" },
    { name: "Graphic Designing", percentage: 80, person: "80%" },
    { name: "Search Engine Optimization", percentage: 90, person: "90%" },
    { name: "Content Writing", percentage: 91, person: "91%" },
    { name: "Video Animation", percentage: 85, person: "85%" },
    { name: "Digital Marketing", percentage: 75, person: "75%" },
  ];

  const services = [
    {
      anima: "fade-down-right",
      icon: "fa-solid fa-code",
      title: "WEB DEVELOPMENT",
      description:
        "Your brand needs a website to gain public trust. We use the latest web development technologies to create websites that are fast, secure, and SEO-friendly. Our experts are here to assist you in putting your thoughts to reality. Create a custom-made website with Rootlet.",
    },
    {
      anima: "fade-up",
      icon: "fa-solid fa-pen-fancy",
      title: "GRAPHIC DESIGN",
      description:
        "We’ll help you develop a strong visual identity for your business. This includes creating a logo, branding guidelines, and other visual assets that will help you create a cohesive and recognizable brand. Convey your ideas or promote your business with visual presentation.",
    },
    {
      anima: "fade-up",
      icon: "fa-brands fa-searchengin",
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Our SEO experts are constantly monitoring the latest search engine algorithms and trends. This means that we can help you keep your website ranking high in search results, even as the algorithms change.",
    },
    {
      anima: "fade-down-left",
      icon: "fa-brands fa-digital-ocean",
      title: "DIGITAL MARKETING",
      description:
        "Once your website is ranking well in search results, we can help you reach your target audience through a variety of digital marketing channels. This may include social media marketing, email marketing, paid advertising, and more.",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [homeBlog, setHomeBlog] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS animations

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rootletsolutions.com/rootlet-admin/fetch_data.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setHomeBlog(result.data); // Access the data array from the result
      } catch (error) {
        setError(error.message);
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
          overflow: "hidden",
        }}
        className="loader-container"
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

  if (error) return <div className="error-message">Error: {error}</div>;

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const steps = [
    {
      icon: "fa-solid fa-1",
      title: "CONCEPTUALIZE",
      description: "Brainstorm with us to define your vision of excellence.",
    },
    {
      icon: "fa-solid fa-2",
      title: "PLAN & SUPPORT",
      description:
        "We’ll bring your abstract vision into reality with proficiency.",
    },
    {
      icon: "fa-solid fa-3",
      title: "DEPLOYMENT",
      description:
        "Engage your target audience with your live project. Your business is ready to grow.",
    },
  ];

  const testimonials = [
    {
      quote:
        "They provided outstanding service! To create a unique software solution for our company, their team went beyond perfection. They showed professionalism, knowledge and a dedication to quality from the first consultation to the last deployment. Extremely recommended!",
      image: "/src/assets/image/0x0.webp",
      onername: " (Emily Grace)",
    },
    {
      quote:
        "With the mobile app created by rootlet, I couldn't be happier. The crew completed the project on schedule and under budget and they were also very responsive and detail-oriented. Their team created smooth and functioning app just as I imagined.",
      image: "/src/assets/image/download.jpeg",
      onername: " (Joshua David)",
    },
    {
      quote:
        "For our business, collaborating with rootlet solutions was revolutionary. Their proficiency in web building enabled us to revive our online presence and draw in new clients. The entire procedure was stress-free and seamless because of their active communication and attention to detail. Looking forward to further partnerships in the future!",
      image:
        "/src/assets/image/ceo-woman-Depositphotos_12497994_xl-2015-800w.webp",
      onername: " (Hannah Joy)",
    },
    {
      quote:
        "Working on a challenging software integration project with Rootlet Solutions was a great experience for me. Throughout the engagement, their team showed off their extensive technical expertise, inventiveness and problem-solving abilities, I would not think twice about working with them in the future.",
      image: "/src/assets/image/ceo-vs-cfo.webp",
      onername: " (Benjamin Paul)",
    },
    {
      quote:
        "Bravo to Rootlet Solutions team for excellent client service! They addressed our issues and made sure the transaction went well, they were informed and accommodating. Their dedication to client satisfaction distinguishes them and I heartily endorse their services to anybody in need of software development.",
      image: "/src/assets/image/ceo.jpg",
      onername: "(Christopher James)",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-fluid p-0 Home position-relative">
      <div className="background_image">
        <img
          className="bg-image"
          src="/src/assets/image/it-bg-full.jpg"
          alt="Background"
        />
      </div>
      <div className="hero-image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 481.54166 222.25"
          version="1.1"
        >
          <g transform="translate(0,-74.749984)">
            <path
              style={{
                fill: "#2C479F",
                fillOpacity: 0.83417089,
                strokeWidth: 0.26458332,
              }}
              d="M -37.41942,65.027063 V 297.04648 h 555.625 V 65.027063 Z m 385.24418,26.073343 c 5.16568,-0.06559 10.30682,1.828283 14.17588,5.697327 l 22.51077,22.510767 c 2.81369,2.8137 7.10706,1.33438 7.86464,-2.23708 2.21908,-6.43973 5.15977,-13.60111 8.76741,-17.208757 10.10198,-10.101963 25.7768,-10.300582 35.62522,-0.452167 9.84843,9.848414 9.64978,25.523244 -0.45217,35.625204 -3.60765,3.60766 -10.76936,6.54852 -17.20929,8.76743 -3.57201,0.75699 -4.34764,5.75355 -2.23655,7.86463 l 29.54549,29.54549 c 7.73808,7.73808 7.57481,20.56352 -0.36227,28.50058 l -17.31727,17.31729 c -4.32922,4.32922 -12.15765,3.7166 -14.93552,-1.94717 -2.07338,-4.96117 -4.86992,-9.19938 -6.98047,-11.3099 -9.8484,-9.84841 -25.52375,-9.64979 -35.62572,0.45217 -10.10177,10.10177 -10.3006,25.77732 -0.45218,35.62573 2.11053,2.11053 6.34937,4.90595 11.30941,6.98045 4.94276,3.49888 6.27689,10.60629 1.94767,14.93552 l -17.31729,17.31729 c -7.93724,7.93726 -20.76249,8.09984 -28.50057,0.36174 l -84.41553,-84.41552 c -7.7381,-7.7381 -7.57482,-20.56301 0.36225,-28.50007 l 79.37139,-79.371375 v -5.16e-4 c 3.96862,-3.968627 9.15901,-5.993473 14.3247,-6.059063 z"
            />
            <path
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.26052347,
                strokeOpacity: 1,
                width: "100vw",
              }}
              d="m 314.90636,266.1817 0.0512,0.0512 h 71.61114 v 0 c -23.89724,-0.003 -47.7139,0.007 -71.61114,0 z m 71.66229,0.0512 c 0,0 -0.0376,2.36455 -1.54522,4.09644 -5.94783,6.83282 -18.34141,18.62228 -18.34141,18.62228 -7.93727,7.93727 -20.76199,8.23348 -28.50007,0.49537 L 314.95751,266.23286 H -43.089358 v 31.34279 H 521.98518 v -31.34279 z"
              id="rect857"
            />
          </g>
        </svg>
        <div className="write" data-aos="fade-up">
          <h1 data-aos="fade-up">We serve your desire digitally</h1>
          <p data-aos="fade-up">
            <span>Coding Websites and Weaving your digital presence</span>, to
            uplift your online presence,
            <br /> the possibilities of excellence and attainment are limitless
            with our proficiency <br /> and your dedication
          </p>
          <button data-aos="fade-up">
            <Link to="/Contact">
              GET IN TOUCH <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </div>
      <div className="home-about container-fluid white-bg">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 py-0 px-4  skill">
            <div className="skills-container">
              {skills.map((skill) => (
                <div key={skill.name} className="skill ">
                  <div className="row ">
                    <div className="skill-name col-lg-6 col-sm-4">
                      {skill.name}{" "}
                    </div>
                    <div
                      style={{ fontWeight: "700" }}
                      className="skill-percerntage col-lg-6 text-end col-sm- 4 "
                    >
                      {skill.person}
                    </div>{" "}
                  </div>

                  <div className="skill-bar my-3">
                    <ProgressBar target={skill.percentage} speed={30} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up">
            <h4>About Us</h4>
            <p>
              We are a team of experienced professionals who specialize in
              graphic design, web development, SEO, digital marketing, and video
              editing. We help businesses of all sizes create a strong online
              presence that attracts customers and grows their bottom line.
            </p>
            <p>
              Since 2017, Rootlet Solutions has been dedicated to researching
              and developing cutting-edge digital technology to help our clients
              grow their brands. We aim to be the go-to digital marketing
              company for all digital solutions. Recognizing the ever-changing
              nature of the digital marketing industry, we ensure our tools stay
              up-to-date, keeping our clients ahead of the curve.
            </p>
            <button>
              <Link to="/AboutUs">
                Find Out More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="home-service white-bg container-fluid">
        <h1 data-aos="fade-up">OUR SERVICES</h1>
        <h1 data-aos="fade-up">World-Class Solutions for your Business</h1>
        <hr />
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              key={index}
              data-aos={service.anima}
            >
              <i className={service.icon}></i>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="col-lg-12">
            <Link to="/services" data-aos="fade-up">
              Find Out More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid white-bg Home-app">
        <div className="row">
          {steps.map((step, index) => (
            <div
              className="col-lg-3 col-md-12 col-sm-12"
              key={index}
              data-aos="fade-down"
            >
              <div className="icon">
                <i className={step.icon}></i>
              </div>
              <h1>{step.title}</h1>
              <p>{step.description}</p>
            </div>
          ))}
          <div
            className="col-lg-4 slider-1 col-md-4 col-sm-12"
            style={{ backgroundImage: "url(/src/assets/image/puzzle.png)" }}
            data-aos="fade-left"
          >
            <h3>Hear from our clients</h3>
          </div>
          <div
            className="col-lg-8 slider-2 col-md-6 col-sm-12 testimonial-slider"
            data-aos="fade-left"
          >
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <p>"{testimonial.quote}"</p>
                  <div className="d-flex">
                    <img src={testimonial.image} alt="CEO" />
                    <p>
                      {testimonial.ownername}
                      <br /> CEO
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="cta container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ">
              <h2>Let's Get in Touch</h2>
              <h1 data-aos="fade-up">
                LET'S TALK ABOUT YOUR BUSINESS IT SERVICES NEEDS
              </h1>
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
      <div className="journey container-fluid white-bg">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h1 data-aos="fade-up">OUR JOURNEY OF SUCCESS</h1>
              <p data-aos="fade-up">
                Our mission was to transform the software market by offering
                innovative solutions that enable companies to prosper in the
                digital era. Our mission is to leave a lasting impression on the
                technology industry. We were founded on the values of honesty,
                creativity, and passion. From the beginning, we realized that
                technical proficiency alone would not be sufficient for success
                in the software sector. It required a thorough comprehension of
                the requirements, difficulties, and goals of our clients. For
                this reason, we have made it our goal to establish deep
                connections with our clients by paying close attention to their
                input and working together to create solutions that genuinely
                satisfy their needs.
              </p>
              <button data-aos="fade-up">
                <Link to="/Potfolio">
                  Find Out More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm" data-aos="zoom-in">
                <img
                  width={"100%"}
                  src="/src/assets/image/church2-2-scaled.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm" data-aos="zoom-in">
                <img
                  width={"100%"}
                  src="/src/assets/image/Sparktechbesa-scaled.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm" data-aos="zoom-in">
                <img
                  width={"100%"}
                  src="/src/assets/image/church3-2-scaled.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm" data-aos="zoom-in">
                <img
                  width={"100%"}
                  src="/src/assets/image/Rent-A-Property-2-scaled.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-Blog container-fluid white-bg">
        <h3 data-aos="fade-up">RESOURCES</h3>
        <h1 data-aos="fade-up">Our Blogs</h1>
        <div className="row">
          {homeBlog.slice(0, 3).map((blog) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              key={blog.id}
              data-aos="fade-right"
            >
              <div className="card blog-card">
                <div className="blog-img">
                  <Link to={`/blogsdetails/${blog.id}`}>
                    <img
                      width="100%"
                      src={`https://rootletsolutions.com/rootlet-admin/${blog.img}`}
                      alt={blog.title}
                    />
                  </Link>
                </div>
                <div style={{ padding: "2vh" }} className="card-content">
                  <Link to={`/blogsdetails/${blog.id}`}>
                    <h5
                      style={{
                        fontSize: "15px",
                        letterSpacing: "-1px",
                        padding: "0",
                        fontWeight: "600",
                      }}
                    >
                      {blog.title}
                    </h5>
                  </Link>
                  <p
                    style={{
                      fontSize: "12px",
                      padding: "0",
                      margin: "0",
                      color: "#878787",
                    }}
                  >
                    {stripHtmlTags(blog.content).slice(0, 80)}...
                  </p>
                  <Link
                    style={{
                      color: "#275ee8",
                      fontSize: "15px",
                      padding: "4vh 0vw",
                    }}
                    to={`/blogsdetails/${blog.id}`}
                  >
                    Read More
                  </Link>{" "}
                  <br />
                  <span style={{ fontSize: "10px" }}>
                    <i className="fa-regular fa-clock"></i>{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/Blog" data-aos="fade-up">
          Find Out More <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;
