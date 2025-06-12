import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "../style/Footer.css";
import footerimage from "../images/footerlogo.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="leftcontent">
        <div className="left1">
          <h2>
            &#8544;<b>Rooms</b>
          </h2>
          <h2>
            &#8545;<b>Wellness</b>
          </h2>
          <h2>
            &#x2162;<b>Gastro</b>
          </h2>
          <h2>
            &#8547;<b>Hotel</b>
          </h2>
          <h2>
            &#8548;<b>Events</b>
          </h2>
        </div>
        <div className="left2">
          <h2>More about rooms</h2>
          <h3>120 comfortable rooms</h3>
          <h3>Dinings</h3>
          <h3>Packages</h3>
          <h3>Pools</h3>
        </div>
      </div>
      <div className="rightcontent">
        <img src={footerimage} alt="Nothing" />
        <h1>
          Wellness & Pools <br />
          Hotel Royal Phoenicia
        </h1>
        <h2>
          Building 1288 <br /> Road 3931, Block 339 <br />
          Umm AI Hasam - Manama <br />
          Bahrian
        </h2>
        <h2>+973 1730 7307</h2>
        <h2>info@royalphoeniciahotel.com</h2>
        <h2>Contacts</h2>
        <div className="socialmedia">
          <FontAwesomeIcon id="icon" icon={faInstagram} />
          <FontAwesomeIcon id="icon" icon={faFacebook} />
          <FontAwesomeIcon id="icon" icon={faYoutube} />
        </div>
        <h4 className="copyright">Copyright © 2025 by Abhay</h4>
      </div>
    </div>
  );
}
