import React, { useState, useEffect } from 'react';
import style from './Slider.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage: 'url("img/hero/hero-1.jpg")',
      title: 'Fall - Winter Collections 2030',
      description:
        'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    },
    {
      backgroundImage: 'url("img/hero/hero-2.jpg")',
      title: 'Fall - Winter Collections 2030',
      description:
        'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSliderClick = (event) => {
    const sliderWidth = event.currentTarget.offsetWidth;
    const clickPositionX = event.pageX - event.currentTarget.offsetLeft;

    if (clickPositionX < sliderWidth / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <div className={style.slider}>
      <section className={style.hero} onClick={handleSliderClick}>
        <div className={style.hero__slider}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${style.hero__items} ${index === currentSlide ? style.active : ''}`}
              style={{ backgroundImage: slide.backgroundImage, transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className={style.hero__text}>
                      <h6>Summer Collection</h6>
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      <a href="#" className={style.primary_btn}> Shop now 
                      <span></span>
                      </a>
                      <div className={style.hero__social}>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="next-btn" onClick={nextSlide}>
          &gt;
        </button> */}
      </section>
    </div>
  );
};

export default Slider;
