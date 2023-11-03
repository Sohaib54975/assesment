import React from "react";
import "../styles/whyGalxy.css";
import galaxy_img from "../images/galaxy_img.png";
import vedio_btn from "../images/vedio_btn.png";
function WhyGalaxy() {
  return (
    <section id="why-galaxy">
      <div className="why_galaxy">
        <div className="why_galaxy_left">
          <div className="heading">
            <h3>Why Galaxi?</h3>
          </div>
          <div className="paragraph pt-3">
            <p>
              inappropriate behavior is often laughed off as “boys will be
              boys,” <br />
              women face higher conduct standards especially in the workplace.
              <br /> That’s why it’s crucial that, as women, our behavior on the
              job is <br />
              beyond reproach. inappropriate behavior is often laughed off{" "}
              <br />
              <br />
              inappropriate behavior is often laughed off as “boys will be
              boys,”
              <br /> women face higher conduct standards especially in the
              workplace.
              <br /> That’s why it’s crucial that, as women, our behavior on the
              job is
              <br /> beyond reproach. inappropriate behavior is often laughed
              off
            </p>
          </div>
        </div>

        <img src={galaxy_img} />
      </div>
      <div className="explainer_vedio">
        <div className="heading p-4">
          <h3>Explainer Video</h3>
        </div>
        <div className="vedio_sec">
          <img src={vedio_btn} alt="vedio button" />
        </div>
      </div>
    </section>
  );
}

export default WhyGalaxy;
