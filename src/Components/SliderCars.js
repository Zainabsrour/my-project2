import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//takes an array of images URL and array of caption 
// as uch as we send itmes a carousel created
export default function Slider({ images, captions }) {
  return (
    <div id="brandCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Loops over images array and creates a small button for each slide. */}
      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#brandCarousel"
            // data-bs-slide-to={index} tells Bootstrap which slide this dot corresponds to.
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
          ></button>
        ))}
      </div>

      {/* Slides */}
      {/* part of the code is already showing the image and the caption together for each slide. */}
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={img}
              className="d-block w-100"
              alt={`slide-${index}`}
              style={{ height: "450px", objectFit: "cover" }}
            />

            <div className="carousel-caption ">
              <h5 className="slider-style">{captions[index]}</h5>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
