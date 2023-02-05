import React, { useState } from 'react'

const Slider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider__styles = {
    height: "100%",
    position: "relative",

  }
  const slide__styles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const left__arrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#003469",
    zIndex: 1,
    cursor: "pointer",
  };

  const right__arrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#003469",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center"
  }

  const dotStyle = {
    margin: "0 10px",
    cursor: "pointer",
    fontSize: "50px"
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div style={slider__styles}>
      <div style={left__arrow} onClick={goToPrevious}>&#10096;</div>
      <div style={right__arrow} onClick={goToNext}>&#10097;</div>
      <div style={slide__styles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyle} onClick={() => goToSlide(slideIndex)}>&#8226;</div>
        ))}
      </div>
    </div>
  )
}

export default Slider