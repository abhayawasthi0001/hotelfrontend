import "../style/Tagline.css";
import { useState } from "react";

function Tagline() {
  const [buttonText, setButtonText] = useState("Hotel");
  const handleMouseEnter = () => {
    setButtonText("Book Now");
  };

  const handleMouseLeave = () => {
    setButtonText("Hotel");
  };

  return (
    <div className="tagline-container">
      <main>
        <h1>I</h1>
        <p>
          The stay at Wellness & pool Hotel <br />
          RoyalPhoenicia means enjoying every moment. <br />
          Relax. Find inspiration. Be fascinated
        </p>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {buttonText}
        </button>
      </main>
    </div>
  );
}

export default Tagline;
