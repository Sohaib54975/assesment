import React from "react";
import "../styles/getApp.css";
import get_it_applestore from "../images/get_it_applestore.png";
import get_it_playstore from "../images/get_it_playstore.png";
import logo from "../images/logo.png";
import c2_l from "../images/c2_l.png";

function GetApp() {
  return (
    <section id="get-app">
      <div className="getapp_wrapper">
        <div className="getapp_above">
          <div className="c2_l">
            <img src={c2_l} alt="c2_l" />
          </div>
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
          <img src={logo} alt="getapp_below" />
          <p>
            Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
            scelerisque <br />
            porttitor, leo quam vulputate nibh, sit amet blandit erat magna.
          </p>
        </div>
        <div className="hrzental">
          <hr className="hrz" />
        </div>
        <div className="all_right-reserve">
          <div className="right_reserve">
            <p><span><i class="fa-regular fa-copyright m-1"></i></span> All Rights Reserved 2023</p>
          </div>
          <div className="social_icons">
            <i className="icon fa-brands fa-facebook-f m-2"></i>
            <i className="icon fa-brands fa-linkedin-in m-2"></i>
            <i className="icon fa-brands fa-pinterest-p m-2"></i>
            <i className="icon fa-brands fa-twitter m-2"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApp;
