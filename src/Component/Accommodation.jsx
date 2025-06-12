import React, { useState } from "react";
import Accommodation1 from "../images/b2image2.jpg";
import Accommodation2 from "../images/b2image1.jpg";
import "../style/Accommodation.css";
export default function Accommodation() {
  const [buttonText, setButtonText] = useState("Accommdation");

  const handleMouseEnter = () => {
    setButtonText(">");
  };

  const handleMouseLeave = () => {
    setButtonText("Accommdation");
  };
  return (
    <div className="main-Accommodation">
      <h1>
        <b> &#8545; </b>
      </h1>
      <div className="blocks">
        <div className="block1">
          <img src={Accommodation1} alt="nothing" />
          <h2>Rooms</h2>
        </div>
        <div className="block1">
          <img src={Accommodation2} alt="nothing" />
          <h2>Pools</h2>
        </div>
        <div className="block1">
          <img src={Accommodation1} alt="nothing" />
          <h2>Dining</h2>
        </div>
      </div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="button"
      >
        {buttonText}
      </button>
    </div>
  );
}
