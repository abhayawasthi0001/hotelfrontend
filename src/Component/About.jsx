import React from "react";
import "../style/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWaterLadder,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import about1 from "../images/hotelkey.jpg";
import about2 from "../images/hotelbed.jpg";
import about3 from "../images/hotelbardining.jpg";

export default function About() {
  return (
    <div className="about">
      <h1 className="aboutheading"> &#8547;</h1>
      <h2 className="aboutheading2">
        Exceptional gastronomy <br />served in elegant spaces.
      </h2>
      <div className="aboutus">
        <section>
          <img src={about1} alt="Nothing" />
          <img src={about2} alt="Nothing" />
          <img src={about3} alt="Nothing" />
        </section>
        <div>
          <h2>About Us</h2>
          <p>
            Royal Phoenicia Hotel offers an array of top-tier facilities <br />
            designed to enhance the comfort and convenience of every guest. The{" "}
            hotel features a luxurious spa and wellness center, where guests can{" "}
            indulge in soothing treatments and rejuvenating massages. For those{" "}
            seeking to maintain their fitness routine, the fully equipped gym{" "}
            provides a space for exercise, while the outdoor pool offers a{" "}
            relaxing environment to unwind. Dining at the hotel is a pleasure,{" "}
            with an on-site restaurant offering a diverse selection of cuisines{" "}
            in an elegant atmosphere. Additionally, the hotel provides business{" "}
            facilities, including meeting rooms and event spaces, ideal for{" "}
            corporate travelers. With its comprehensive range of services.{" "}
          </p>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="aboutdetail">
        <div>
          <h2>
            <FontAwesomeIcon
              icon={faUtensils}
              size="1x"
              style={{ color: "black" }}
            />
          </h2>
          <h2>Restaurant</h2>
          <p>
            Royal Phoenicia offers an array of top-tier <br />
            facilities designed to enhance the comfort and <br />
            convenience of every guest.
          </p>
        </div>

        <div>
          <h2>
            <FontAwesomeIcon
              icon={faWaterLadder}
              style={{ color: "#000000" }}
            />
          </h2>
          <h2>POOL</h2>
          <p>
            Royal Phoenicia Hotel features multiple outdoor <br />
            swimming pools, including a dedicated <br />
            children's pool, offering relaxation for all guests.
          </p>
        </div>

        <div>
          <h2>
            <FontAwesomeIcon icon={faDoorOpen} style={{ color: "#000000" }} />
          </h2>
          <h2>ROOM</h2>
          <p>
            Royal Phoenicia Hotel in Manama, Bahrain, <br />
            offers a variety of spacious and well-equipped <br />
            rooms to suit diverse guest preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
