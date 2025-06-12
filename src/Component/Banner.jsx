import React from "react";
import image1 from "../images/bannerimage2.jpg";
import image2 from "../images/bannerimage1.png";
import "../style/Banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="image-wrapper">
          <img src={image1} alt="Banner 1" className="image1" />
          <img src={image2} alt="Banner 2" className="image2" />
        </div>
      </div>
    </>
  );
}
