import React from "react";
import "../style/Package.css";
import PackageCard from "../Component/Packagecard.jsx";
import weekend from "../images/weekend.jpg"; 
import familyfun from "../images/familyfun.jpg"; 
import swimingfamily from "../images/swimingfamily.jpg"; 

export default function Package() {
  return (
    <>
      <h1 className="packageheading">Stay Packages</h1>
      <div className="packagerow">
        <PackageCard
          name="Royal Weekend Escape Package"
          version="From BHD 250 / Per Person / 3 Night"
          image={weekend}
        />
        <PackageCard
          name="Family Fun Staycation"
          version="From BHD 150 / 4 Person / 2 Night"
          image={familyfun}
        />
        <PackageCard
          name="Royal Weekend Escape Package"
          version="From BHD 250 / Per Person / 3 Night"
          image={swimingfamily}
        />
      </div>
      <div id="hr"></div>
    </>
  );
}
