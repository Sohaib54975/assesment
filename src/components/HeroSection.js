import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import hero_sec_img from "../images/hero_sec_img.png"
import "../styles/heroSection.css"

function HeroSection() {
  return (
    <>
      <div className="hero_sec_wrapper">
        <div className="hero_sec_left">
          <div>
            <h1>
              Galaxi is for <br />
              everyone
            </h1>
          </div>
          <div>
            <p>
              The world’s number 1 stocks screener. Get hottest stocks <br />
              picks in the world using AI.
            </p>
          </div>
          <div className="button">
            <button>Explainer Vedio <span><IoPlayOutline style={{color:"white" , fontSize:"25px" , marginLeft:"5px"}}/></span></button>
          </div>
        </div>
        <div className="hero_sec_right">
            <img src={hero_sec_img}/>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
