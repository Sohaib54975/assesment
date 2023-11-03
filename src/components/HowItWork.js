import React from "react";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import "../styles/howItWorks.css";
import c1 from "../images/c1.png";
function HowItWork() {
  return (
    <section id="how-it-works">
      <div className="how_it_work_wrapper">
        {/* <div className="blur_img"><img src={c1}/></div> */}
        <div className="hd_pg_wrapper">
          <div className="heading">
            <h2>How it Works?</h2>
          </div>
          <div className="paragraph">
            <p>
              Is amazing, modern and clean landing page for showcaseyour app
              anything else.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card card_1">
            <div className="card_no">01</div>
            <div className="card_img">
              <img src={card1} alt="card1" />
            </div>
            <div className="hd_pg">
              <div className="card_heading">
                <h3>Sign Up:</h3>
                <hr />
              </div>
              <div className="card_para">
                <p>
                  Lorem ipsum dolor sit amet <br /> consectet adipiscing elit{" "}
                  <br /> eget quamumto.
                </p>
              </div>
            </div>
          </div>
          <div className="card card_2">
            <div className="card_no">02</div>
            <div className="card_img">
              <img src={card2} alt="card1" />
            </div>
            <div className="hd_pg">
              <div className="card_heading">
                <h3>Subscription:</h3>
                <hr />
              </div>
              <div className="card_para">
                <p>
                  Lorem ipsum dolor sit amet <br /> consectet adipiscing elit{" "}
                  <br /> eget quamumto.
                </p>
              </div>
            </div>
          </div>
          <div className="card card_3">
            <div className="card_no">03</div>
            <div className="card_img">
              <img src={card3} alt="card1" />
            </div>
            <div className="hd_pg">
              <div className="card_heading ">
                <h3>Explore:</h3>
                <hr />
              </div>
              <div className="card_para">
                <p>
                  Lorem ipsum dolor sit amet <br /> consectet adipiscing elit{" "}
                  <br /> eget quamumto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
