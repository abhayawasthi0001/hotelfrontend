import React, { useState } from "react";
import "../style/Wellness.css";
import fitness from "../images/fitness.jpg";
import dining from "../images/dining.jpg";
import spa from "../images/spa.jpg";
export default function Wellness() {
  const [buttonText, setButtonText] = useState("Spa & Wellness");
  const handleMouseEnter = () => {
    setButtonText(">");
  };

  const handleMouseLeave = () => {
    setButtonText("MORE");
  };
  return (
    <div className="wellness">
      <h1 id="wellheading">&#8546;</h1>
      <div className="wellness-images">
        <div className="wellimage1">
          <img id="image1" src={fitness} alt="nothing" />
          <div className="text">
            <h2>
              <b>Fitness Center</b>
            </h2>
            <p>
              For those looking to maintain their fitness routine while
              traveling, the hotel offers a well-equipped fitness center.
            </p>
          </div>
        </div>
        <div className="wellimage2">
          <img id="image2" src={dining} alt="nothing" />
          <div className="text">
            <h2>
              <b>
                On - Site <br />
                Dining
              </b>
            </h2>
            <p>
              The hote features an on-site restaurant serving a variety of
              cuisines, diverse dining experience without leaving the premises. <br />
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="wellnessbutton"
              >
                {buttonText}
              </button>
            </p>
          </div>
        </div>
        <div className="wellimage3">
          <img id="image3" src={spa} alt="nothing" />
          <div className="text">
            <h2>
              <b>
                Wellness Center <br /> & Spa
              </b>
            </h2>
            <p>
              Guests can unwind with various spa services, including full-body
              massages, steam rooms, and other spa facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
