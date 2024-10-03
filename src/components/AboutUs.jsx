import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const AboutUs = () => {
  // Data for the sections
  const About_first = [
    {
      title: "ABOUT ROOTLET SOLUTIONS",
      heading: "ABOUT US",
      description:
        "We are a team of experienced professionals who specialize in graphic design, web development, SEO, digital marketing, and video editing. We help businesses of all sizes create a strong online presence that attracts customers and grows their bottom line.",
      description2:
        "Since 2017, Rootlet Solutions has been dedicated to researching and developing cutting-edge digital technology to help our clients grow their brands. We aim to be the go-to digital marketing company for all digital solutions. Recognizing the ever-changing nature of the digital marketing industry, we ensure our tools stay up-to-date, keeping our clients ahead of the curve.",
    },
  ];

  const About_second = [
    {
      title: "WHY TO CHOOSE ROOTLET",
      heading: "Proven Track Record",
      description:
        "We have a history of success in bringing cutting-edge technological solutions to our clients and helping them achieve their business objectives. Our vast experience and knowledge position us as a reliable partner for businesses trying to meet their strategic goals.",
    },
    {
      title: "",
      heading: "Domain Expertise",
      description:
        "The members of our team are highly qualified experts with in-depth knowledge of a variety of technologies and industries. In the areas of software development, cloud computing, cybersecurity, and data analytics, we have the skills and expertise to make a positive impact on the projects of our partners.",
    },
    {
      title: "",
      heading: "Creative Solutions",
      description:
        "The foundation of all we do is creativity. To keep ahead of new trends and technology, we continually engage in research and development. Organizations can have access to cutting-edge solutions that promote growth and competitive advantage by partnering with us.",
    },
  ];

  const testimonials = [
    {
      quote:
        "They provided outstanding service! To create a unique software solution for our company, their team went beyond perfection. They showed professionalism, knowledge and a dedication to quality from the first consultation to the last deployment. Extremely recommended!",
      image: "/src/assets/image/0x0.webp",
      ownername: " (Emily Grace)",
    },
    {
      quote:
        "With the mobile app created by Rootlet, I couldn't be happier. The crew completed the project on schedule and under budget and they were also very responsive and detail-oriented. Their team created smooth and functioning app just as I imagined.",
      image: "/src/assets/image/download.jpeg",
      ownername: " (Joshua David)",
    },
    {
      quote:
        "For our business, collaborating with Rootlet Solutions was revolutionary. Their proficiency in web building enabled us to revive our online presence and draw in new clients. The entire procedure was stress-free and seamless because of their active communication and attention to detail. Looking forward to further partnerships in the future!",
      image:
        "/src/assets/image/ceo-woman-Depositphotos_12497994_xl-2015-800w.webp",
      ownername: " (Hannah Joy)",
    },
    {
      quote:
        "Working on a challenging software integration project with Rootlet Solutions was a great experience for me. Throughout the engagement, their team showed off their extensive technical expertise, inventiveness and problem-solving abilities, I would not think twice about working with them in the future.",
      image: "/src/assets/image/ceo-vs-cfo.webp",
      ownername: " (Benjamin Paul)",
    },
    {
      quote:
        "Bravo to Rootlet Solutions team for excellent client service! They addressed our issues and made sure the transaction went well, they were informed and accommodating. Their dedication to client satisfaction distinguishes them and I heartily endorse their services to anybody in need of software development.",
      image: "/src/assets/image/ceo.jpg",
      ownername: "(Christopher James)",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const stats = [
    { number: 8, label: "Business Years" },
    { number: 150, label: "Clients" },
    { number: 250, label: "Projects Delivery" },
    { number: 20, label: "Team Members" },
  ];

  const contentArray = [
    {
      anima: "fade-up-right",
      imgSrc: "/src/assets/image/pic8.jpg",
      title: "WHO WE ARE",
      description:
        "We are a team of passionate and dedicated professionals who are committed to helping our clients succeed. We believe that everyone deserves to have a strong online presence, and we work hard to make that happen for our clients. We are always looking for new and innovative ways to help our clients reach their marketing goals.",
    },
    {
      anima: "fade-up",
      imgSrc: "/src/assets/image/pic9.jpg",
      title: "MISSION STATEMENT",
      description:
        "At Rootlet Solutions, we aim to enable companies by providing creative digital solutions that promote expansion, effectiveness, and prosperity. We develop customized software solutions that solve difficult problems, optimize processes, and create enduring partnerships in an effort to surpass customer expectations. We are dedicated to excellence, innovation, and honesty. As a dependable partner for businesses looking to prosper in the digital era, we strive to remain at the forefront of technological advancements and uphold a culture of constant learning and development.",
    },
    {
      anima: "fade-up-left",
      imgSrc: "/src/assets/image/pic10.jpg",
      title: "OUR JOURNEY OF SUCCESS",
      description:
        "Our strategy has always been centered on innovation. We were aware that we had to push the envelope of what was feasible in order to stay ahead in a field that was changing quickly. For this reason, we made significant investments in research and development and are always investigating new technologies, approaches and best practices in order to provide solutions that are not just state of the art but also useful, scalable and long-lasting.",
    },
  ];

  // State for loading
  const [loading, setLoading] = useState(true);
  // State for error (if needed)
  const [error, setError] = useState(null);

  // Fetch data (if applicable)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a delay
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Counter component to increment numbers
  const Counter = ({ target, speed = 500 }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const increment = target / (speed / 100);
      let interval;

      if (isInView) {
        interval = setInterval(() => {
          setCount(prevCount => {
            if (prevCount < target) {
              return Math.min(prevCount + increment, target);
            }
            clearInterval(interval);
            return target;
          });
        }, 100);
      }

      return () => clearInterval(interval);
    }, [isInView, target, speed]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, []);

    return <span ref={counterRef}>{Math.floor(count)}+</span>;
  };

  if (loading) return <div style={{ height: '100vh', width: '100vw',display:'flex',justifyContent:'center',alignItems:'center'  }}><ClipLoader  color="#000000" loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="About container-fluid p-0">
      <div className="container container-1">
        <div className="row">
          <div className="col-lg-6">
            <div data-aos="fade-up">
              {About_first.map((item, index) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <h1>{item.heading}</h1>
                  <p>{item.description}</p>
                  <p>{item.description2}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 image"
            data-aos="fade-right"
          >
            <img
              className="image1"
              src="/src/assets/image/puzzle.png"
              alt="Puzzle"
            />
            <img
              className="image2"
              src="/src/assets/image/it-generic-6.jpg"
              alt="IT Generic"
            />
          </div>
        </div>
      </div>

      <div className="container container-2" data-aos="fade-down">
        <div className="col-lg-12">
          <div>
            {About_second.map((item_2, index) => (
              <div key={index}>
                <h3>{item_2.title}</h3>
                <h1>{item_2.heading}</h1>
                <p>{item_2.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-12">
          <h1>HOW TECHNOLOGICAL PARTNERSHIPS WORK WITH ROOTLET</h1>
          <ul>
            <li>Concise and clear exchange of information</li>
            <li>Collaborative approach and innovative solutions</li>
            <li>Long term partnership</li>
            <li>Fast growth of business</li>
            <li>Trust and reliability granted</li>
            <li>Committed to every step of growth and development</li>
            <li>Shared decision making and problem solving integration</li>
            <li>Collaboration and risk management</li>
          </ul>
        </div>
      </div>

      <div className="container container-3">
        <div className="row" data-aos="fade-left">
          <div
            className="col-lg-4 slider-1 col-md-4 col-sm-12"
            style={{ backgroundImage: "url(/src/assets/image/puzzle.png)" }}
          >
            <h3>Hear from our clients</h3>
          </div>
          <div className="col-lg-8 slider-2 col-md-8 col-sm-12 testimonial-slider">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <p>"{testimonial.quote}"</p>
                  <div className="d-flex">
                    <img src={testimonial.image} alt="Client" />
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

      <div
        style={{ backgroundColor: "#212529" }}
        className="container-fluid container-4"
      >
        <div className="counter container">
          <div className="row">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12 text-white text-center py-4"
              >
                <Counter target={stat.number} speed={3000} />
                <h3>{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-5 container">
        <div className="row">
          {contentArray.map((content, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos={content.anima}
            >
              <img width="100%" src={content.imgSrc} alt={content.title} />
              <h1>{content.title}</h1>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta container-6 container-fluid p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <h2 data-aos="fade-up">Let's Get in Touch</h2>
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
    </div>
  );
};

export default AboutUs;
