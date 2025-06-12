import Banner from "../Component/Banner.jsx";
import logo from "../images/logo.png";
import "../style/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isvisible, setisvisible] = useState(true);
  return (
    <div className="fullnav">
      <Banner />
      <nav className="navbarmain">
        <div className="nav-top">
          <button id="menu" className="menu1">
            {" "}
            ☰ MENU
          </button>
          <button
            id="menu"
            className="menu2"
            onClick={() => setisvisible(!isvisible)}
          >
            ☰ MENU
          </button>

          <div id="top_mid">
            <h2> 2 0 2 5 </h2>
            <img id="logo" src={logo} alt="main_logo" />
            <h2> ★ ★ ★ ★ ★ </h2>
          </div>
          <button id="booking">Booking</button>
        </div>

        <div className={isvisible ? "nav-buttom" : "nav-buttom2"}>
          <ul>
            <li>ROOMS</li>
            <li>WELLNESS</li>
            <li>GASTRO</li>
            <li>HOTEL</li>
            <li>EVENTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </nav>

      <div className="headingdiv">
        <h1>
          Hotel <br /> Royal Phoenicia
        </h1>
        <h2>YOUR FAVOURITE PLACE. OUR FAMILY STORY</h2>
      </div>
    </div>
  );
}

export default Navbar;


