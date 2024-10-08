import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import FAQsImg from "/src/assets/image/faqs.png";
 
const FAQs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay for data fetching
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

  const faqData = [
    {
      anima: "fade-right",
      question: "Which services are you providing?",
      answer: "Web development, mobile app development (iOS and Android), software integration, bespoke software solutions, UI/UX design, quality assurance, and testing are just a few of the many software development services we provide."
    },
    {
      anima: "fade-left",
      question: "In which industries are you an expert?",
      answer: "Although we’ve worked in a variety of businesses, we particularly like working in the healthcare, banking, e-commerce, education, and technology sectors. Due to the knowledge of our staff, we are able to provide solutions that are specifically designed to satisfy the demands of each sector."
    },
    {
      anima: "fade-right",
      question: "How do you go about developing something?",
      answer: "Our agile development process enables iterative development, regular customer input, and adaptability to changing needs. Our procedure consists of project planning, design and development sprints, testing, deployment, and continuous support in addition to the first consultation."
    },
    {
      anima: "fade-left",
      question: "How do you make sure your work is of a high caliber?",
      answer: "At the heart of what we do is quality. Every level of development is subjected to extensive testing by our devoted quality assurance staff in order to find and fix any problems. To guarantee the finest caliber outputs, we also abide by industry best practices and standards."
    },
    {
      anima: "fade-right",
      question: "How much time does it take to create a software program?",
      answer: "Project complexity, scope, and client needs are some of the variables that affect project durations. Throughout the project planning phase, we provide our clients predicted timeframes to work by and update them on developments as they happen."
    },
    {
      anima: "fade-left",
      question: "What is the price of creating bespoke software?",
      answer: "The project scope, features, technology stack, and intended timetable are only a few of the variables that affect the cost of development. In order to guarantee transparency and budget alignment, we give clear estimates and affordable pricing depending on the unique demands of our customers."
    },
    {
      anima: "fade-right",
      question: "Do you offer continuing upkeep and support?",
      answer: "Indeed, we provide maintenance and post-development assistance to make sure your program keeps operating at its best. Updates, security patches, bug fixes, and continuous technical help are all included in our support services to handle any potential problems."
    },
    {
      anima: "fade-left",
      question: "Can you work on platforms or systems that are already in place?",
      answer: "Indeed. Our group has worked with a variety of platforms and technologies. Whether you need to move data, interface with current systems, or improve functionality, we can easily customize our services to match your needs."
    },
    {
      anima: "fade-right",
      question: "What makes your software company unique from the rest?",
      answer: "What makes us unique is our dedication to innovation, quality, and client happiness. Establishing enduring connections with our clientele, providing exceptional solutions that surpass anticipations, and staying ahead of market developments to offer state-of-the-art technological solutions are our top priorities."
    },
    {
      anima: "fade-left",
      question: "How can I begin working on a project?",
      answer: "To initiate communication, either utilize the contact form available on our website or send an email to INFO@ROOTLETSOLUTIONS.COM. Our staff will arrange a meeting to go over the specifications, objectives, and timetable of your project and to offer customized advice based on your requirements."
    }
  ];

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
    <div className="container-fluid p-0 FAQs">
      <img width={"100%"} src={FAQsImg} alt="FAQs" />
      <div className="ui-accordion ui-accordion--outlined container" style={{ width: "80%", maxWidth: "100%" }}>
        <h1>FAQs</h1>
        {faqData.map((faq, index) => (
          <div onClick={() => toggleAccordion(index)} key={index} className="ui-accordion-item" data-aos={faq.anima}>
            <button className={`ui-accordion-header ${activeIndex === index ? "ui-active" : ""}`}>
              {index + 1} - {faq.question}
            </button>
            {activeIndex === index && (
              <div className="ui-accordion-body">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="cta container-3 container-fluid p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
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

export default FAQs;
