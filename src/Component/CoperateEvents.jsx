import React, { useState } from "react";
import "../style/CoperateEvents.css";
import coperateevent from "../images/coperateevent.jpg";
export default function CoperateEvents() {
  const [buttonText, setButtonText] = useState("MORE");

  const handleMouseEnter = () => {
    setButtonText(">");
  };

  const handleMouseLeave = () => {
    setButtonText("MORE");
  };
  return (
    <div className="coperate-events">
      <h1>&#8548;</h1>
      <h2>Coperate Events</h2>
      <img src={coperateevent} alt="nothing" />
      <div className="detailcards">
        <div className="transparent">
          <div className="white">
            <div className="whitecard">
              <h3>For Companies</h3>
              <p>
                Host your formal business meetings in a unique and refreshing
                setting. Enjoy elegant venues, comfortable accommodations, and
                exceptional cuisine that elevate every professional gathering.
              </p>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="transparent">
          <div className="white">
            <div className="whitecard">
              <h3>Family gatherings</h3>
              <p>
                We know how much your event means to you-be it a jubilee,
                anniversary, or wedding, we're here to make every detail count
                with elegance, care, and unforgettable experiences tailored just
                for you.
              </p>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
