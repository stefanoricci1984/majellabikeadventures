import React, { useState } from "react";

export const Gallery = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex === 0) ? props.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex === props.data.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="gallery" className="text-center">
      <div className="container" style={{ height: "750px" }}>
        <div className="section-title" style={{ marginTop: "100px", marginBottom: "30px" }}>
          <h2>Gallery</h2>
        </div>
        <div className="gallery-container">
          <div className="gallery-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {props.data.map((image, i) => (
              <div key={`gallery-image-${i}`} className="gallery-slide">
                <img
                  src={image}
                  alt={`gallery-image-${i}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
          <div className="gallery-navigation">
            <button onClick={goToPrevSlide}>&lt;</button>
            <button onClick={goToNextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};
