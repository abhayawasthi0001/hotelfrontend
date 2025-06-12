import React, { useEffect } from "react";
import b2image1 from "../images/b2image1.jpg";
import b2image2 from "../images/b2image2.jpg";
import b2image3 from "../images/b2image3.jpg";
import "../style/Banner2.css";

export default function Banner2() {
  useEffect(() => {
    // Load Bootstrap CSS dynamically
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCSS);

    // Load Bootstrap JS dynamically
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.defer = true;
    document.body.appendChild(bootstrapScript);

    // Cleanup function to remove Bootstrap files when component unmounts
    return () => {
      document.head.removeChild(bootstrapCSS);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  return (
    <div className="fullbanner2">
      <div className="banner2-wrapper">
        <div
          id="banner2Carousel"
          className="carousel slide banner2-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img
                src={b2image1}
                className="d-block w-100 banner2-img"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img
                src={b2image2}
                className="d-block w-100 banner2-img"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img
                src={b2image3}
                className="d-block w-100 banner2-img"
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev banner2-prev"
            type="button"
            data-bs-target="#banner2Carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next banner2-next"
            type="button"
            data-bs-target="#banner2Carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="banner-text">
        <div className="whitepage">
          <div className="banner-text-content">
            <p>
              Favorite hotel <br />
              Business and Event Spaces <br />
              Diverse Dining Options <br />
              Multiple Swimming Pools <br />
              Family-Friendly Amenities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
