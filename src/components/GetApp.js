import React from "react";
import "../styles/getApp.css";
import get_it_applestore from "../images/get_it_applestore.png";
import get_it_playstore from "../images/get_it_playstore.png";
import logo from "../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
function GetApp() {
  return (
    <section id="get-app">
      <div className="getapp_wrapper">
        <div className="getapp_above">
          <h3>Try Galaxi App for free! </h3>
          <p>
            Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
            scelerisque <br />
            porttitor, leo quam vulputate nibh, sit amet blandit erat magna.
          </p>
          <div className="getapp">
            <img src={get_it_playstore} alt="get_it_playstore" />
            <img src={get_it_applestore} alt="get_it_applestore" />
          </div>
        </div>
        <div className="getapp_below">
          <img src={logo} alt="" />
          <p>
            Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
            scelerisque <br />
            porttitor, leo quam vulputate nibh, sit amet blandit erat magna.
          </p>
        </div>
        <hr />
        <div className="all_right-reserve">
          <div className="right_reserve">
            <p>All Rights Reserved 2023</p>
          </div>
          <div className="social_icons">
            <FaFacebookF size="30px" />
            <BiLogoLinkedin size="30px" />
            <FaPinterestP size="30px" />
            <AiOutlineTwitter size="30px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApp;
