import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const images = [
  "/src/assets/image/port1.jpg",
  "/src/assets/image/port2.jpg",
  "/src/assets/image/port3.jpg",
  "/src/assets/image/port4.jpg",
  "/src/assets/image/port5.jpg",
  "/src/assets/image/port6.jpg",
  "/src/assets/image/port7.jpg",
  "/src/assets/image/port8.jpg",
  "/src/assets/image/port9.jpg",
  "/src/assets/image/port10.jpg",
  "/src/assets/image/port11.jpg",
  "/src/assets/image/port12.jpg",
  "/src/assets/image/port13.jpg",
  "/src/assets/image/port14.jpg",
  "/src/assets/image/port15.jpg",
  "/src/assets/image/port16.jpg",
  "/src/assets/image/port17.jpg",
  "/src/assets/image/port18.jpg",
  "/src/assets/image/port19.jpg",
  "/src/assets/image/port20.jpg",
  "/src/assets/image/port21.jpg", 
];

const ImageGallery = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: currentImage,
  };

  const handleClick = (index) => {
    setCurrentImage(index);
    setSliderVisible(true);
  };

  const closeModal = () => {
    setSliderVisible(false);
  };

  return (
    <div className="gallery-container">
      <img width="100%" src="/src/assets/image/portfolio.png" alt="Portfolio Header" />
      <div className="container my-3">
        <div className="image-grid row">
          {images.map((image, index) => (
            <div className="col-lg-4 my-2" key={index}>
              <img
                width="100%"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => handleClick(index)}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
      {sliderVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <i className="fa-regular fa-circle-xmark" style={{ color: 'white' }}></i>
            </button>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <div className="slider" style={{ backgroundColor: 'rgba(0, 0, 0, 0.858)' }}>
                    <img
                      src={image}
                      alt={`Slider Image ${index + 1}`}
                      className="slider-image"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div className="cta container-6 container-fluid p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <h2>Let's Get in Touch</h2>
              <h1>LET'S TALK ABOUT YOUR BUSINESS IT SERVICES NEEDS</h1>
              <p>Feel free to reach out to us.</p>
            </div>
            <div className="col-lg-6 col-md-5">
              <button>
                <Link to="/ContactUs">
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

export default ImageGallery;
