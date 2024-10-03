import React from "react";
import { Link } from "react-router-dom";

const Video_Animation = () => {
  return (
    <div
      style={{ marginTop: "13vh " }}
      className="container-fluid p-0 Video_Animation"
    >
      <img width={"100%"} src="/src/assets/image/videoani.PNG" alt="" />
      <div className="container">
        <h1 data-aos="fade-up" className="text-center">VIDEO ANIMATION</h1>
        <h3 data-aos="fade-up" className="text-center">
          Welcome to Rootlet Solutions: Your Premier Destination for Exceptional
          Animated Video Services
        </h3>
        <p data-aos="fade-up" className="text-center my-5">
          Rootlet Solutions takes pride in delivering exceptional animated video
          services that bring your ideas to life. Our team of talented animators
          and creative minds is dedicated to crafting visually stunning and
          captivating animations that engage your audience. Discover our wide
          range of animated video services, tailored to meet your unique needs
          and elevate your brand.
        </p>
        <p data-aos="fade-up" className="text-center">
          Unleash the enchantment of animated video services at Rootlet
          Solutions. Animation is a powerful tool that goes beyond conventional
          storytelling, enabling you to effectively convey intricate messages in
          a visually appealing and easily understandable format. Our experts
          leverage cutting-edge technology and artistic expertise to create
          animations that deeply resonate with your target audience.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Why Choose Animated Videos?</h1>
              <p data-aos="fade-up">
                Explore the many advantages of using animated videos in your
                content strategy. From boosting engagement to explaining complex
                ideas, animated videos are a versatile and powerful way to
                communicate. At Rootlet Solutions, we take pride in being a top
                player in the field of animated video production, delivering
                impactful results.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/video1.png" alt="" data-aos="fade-down"/>
          </div>
          <div className="col-lg-12 col-md-11 col-sm-10" data-aos="zoom-in">
            <h1>Our Animation Process</h1>
            <p>
              Explore the details of our animation process, where imagination
              meets accuracy. At Rootlet Solutions, we take a comprehensive and
              collaborative approach to ensure the smooth creation of your
              animated video.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/video2.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Conceptualization</h1>
              <p data-aos="fade-up">
                Our journey starts by fully grasping your vision. Through
                collaborative brainstorming sessions, we closely collaborate
                with you to come up with ideas that match your brand identity
                and goals.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Storyboarding</h1>
              <p data-aos="fade-up">
                A carefully designed storyboard is the base for an amazing
                animation. Our skilled artists bring ideas to life through a
                visual story, allowing you to see how your animated video will
                flow and be structured even before production begins.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/video3.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/video4.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Animation Production</h1>
              <p data-aos="fade-up">
                Witness the realization of your vision as our skilled animators
                work their magic. At Rootlet Solutions, we utilize cutting-edge
                technology to produce animations that are visually captivating
                and effectively communicate your message with precision and
                influence.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Let's Collaborate</h1>
              <p data-aos="fade-up">
                Join us on a collaborative adventure with Rootlet Solutions. We
                believe in the strength of working together and appreciate your
                input during the animation process. Together, we'll bring your
                vision to life in a way that connects with your intended
                audience and accomplishes your communication objectives.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/video5.png" alt=""data-aos="fade-down"/>
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

export default Video_Animation;
