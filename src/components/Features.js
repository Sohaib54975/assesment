import React from "react";
import "../styles/features.css";
import features_img from "../images/features_img.png";
import playstore from "../images/playstore.png";
import apple from "../images/apple.png";
import available_on from "../images/available_on.png";

function Features() {
  return (
    <section id="features">
      <div className="features_wrapper">
        <div className="features">
          <h3>Features</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
          <img src={features_img} alt="features_img" />
        </div>
        <div className="available_on">
          <div className="left">
            <div className="hd_availble">
              <h3>Available on</h3>
            </div>
            <div className="hd_app_store">
              <h3>App Store, Play Store </h3>
            </div>
            <div className="paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry . Lorem Ipsum has <br />
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took
                <br /> a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
            <div className="icon">
              <img src={playstore} alt="playstore" />

              <img src={apple} alt="apple" />
            </div>
          </div>
          <div className="right">
            <img src={available_on} alt="available_on" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
