import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const App_Development = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 2000));
     
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
      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ClipLoader color="#000000" loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="container-fluid AppDev p-0" style={{ marginTop: "12vh" }}>
      <img width={"100%"} src="/src/assets/image/app.png" alt="" />
      <div className="container container-1" data-aos="fade-up">
        <h1>APP DEVELOPMENT</h1>
        <p>
          We’re dedicated to providing our clients with cutting-edge,
          dependable, and user-focused mobile app solutions that enable them to
          meet their goals and stay one step ahead of the competition.
          Developing software applications especially for use on mobile devices,
          including smartphones and tablets is referred to as app development or
          mobile app development. Numerous platforms, such as iOS (for Apple
          products like the iPhone and iPad) and Android (for devices running
          the Android operating system), are available for mobile app
          development. Our area of expertise is creating native iOS apps for
          iPads, iPhones, and other Apple products. Our iOS developers use the
          most recent frameworks, technologies, and design concepts to produce
          feature-rich, responsive apps that satisfy consumers and achieve
          business goals.
        </p>
      </div>
      <div className="container container-2">
        <div className="row">
          <h1>APP DEVELOPMENT PROCESS</h1>
          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Idea Generation and Planning</h1>
            <p>
              Coming up with an app idea and defining its features, target
              market, and goal is the first stage in the app development
              process. In order to do this, market research must be done in
              order to determine user wants and to outline the functionalities
              and design specifications of the app.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app1.png" alt="" data-aos="fade-right" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app2.png" alt="" data-aos="fade-right" />
          </div> 
          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Design</h1>
            <p>
              After defining the app's concept, the design must be developed.
              This includes creating the application's overall visual style, user
              interface (UI) and user experience (UX). The screens and
              navigation flow of the app can be mocked up and prototyped by
              designers using wire framing and prototyping tools.
            </p>
          </div>

          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Development</h1>
            <p>
              Using the design criteria as a guide, developers create the app's
              code during this phase. This includes incorporating features like
              user authentication, data storage, and push notifications, as well
              as programming the functionality of the app and integrating it
              with external services or APIs. Programming languages like Java
              can be used by developers for Android development and Swift or
              Objective-C for iOS development.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app3.png" alt="" data-aos="fade-right" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app4.png" alt="" data-aos="fade-right" />
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Testing</h1>
            <p>
              To make sure the software works as intended and adheres to quality
              standards, testing is an essential step in the development
              process. Functional, usability, performance, and compatibility
              testing across various hardware and operating systems are some
              examples of the testing that can be done. The development team
              addresses and fixes bugs and issues found during testing.
            </p>
          </div>

          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Deployment</h1>
            <p>
              The app is prepared for release to the app stores after it has
              undergone extensive testing and approval. Apps on iOS devices must
              be submitted to the Apple App Store, and apps on Android devices
              must be submitted to the Google Play Store. The administrators of
              the app store inspect the application before allowing people to
              download it.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app5.png" alt="" data-aos="fade-right"/>
          </div>
          <div className="col-lg-12" data-aos="zoom-in">
            <h1>WHY CHOOSE ROOTLET FOR APP DEVELOPMENT</h1>
            <p>
              When looking for app development services, Rootlet is a great
              option for a number of reasons.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app6.png" alt="" data-aos="fade-right" />
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Expertise</h1>
            <p>
              Rootlet has a group of seasoned specialists with a wealth of
              platform and industry-specific app development expertise. Because
              of their experience, they can provide creative, high-quality
              solutions that are suited to the demands of individual clients.
            </p>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Client-Centric Approach</h1>
            <p>
              Throughout the development process, Rootlet places a high priority
              on client participation and satisfaction. They take the time to
              comprehend the objectives, specifications, and difficulties of
              their consumers in order to guarantee that the finished work meets
              their expectations and vision.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app7.png" alt=""  data-aos="fade-right" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src="/src/assets/image/app8.png" alt="" data-aos="fade-right" />
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
            <h1>Tailored Solutions</h1>
            <p>
              Rootlet rejects the idea of universally applicable solutions.
              Their expertise lies on creating personalized applications that
              cater to distinct corporate requirements and goals. Rootlet offers
              the expertise and adaptability to provide customized solutions,
              whether they be for web, mobile, or cross-platform applications.
            </p>
          </div>
        </div>
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

export default App_Development;
