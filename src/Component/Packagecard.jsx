import React, { useState } from "react";
import "../style/Packagecard.css";

export default function PackageCard({ name, version, image }) {
  const [buttonText1, setButtonText1] = useState("MORE");
  const [buttonText2, setButtonText2] = useState("🛒");

  const handleMouseEnter1 = () => {
    setButtonText1(">");
  };

  const handleMouseLeave1 = () => {
    setButtonText1("MORE");
  };

  const handleMouseEnter2 = () => {
    setButtonText2("Booking");
  };

  const handleMouseLeave2 = () => {
    setButtonText2("🛒");
  };

  return (
    <div className="package">
      <div className="packagedata">
        <h1>All season</h1>
        <h2>{name}</h2>
        <h3>{version}</h3>
        <div>
          <button
            className="button1"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            {buttonText1}
          </button>
          <button
            className="button2"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            {buttonText2}
          </button>
        </div>
      </div>
      <img id="image" src={image} alt="Package preview" />
    </div>
  );
}
