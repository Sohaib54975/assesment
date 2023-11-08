import React from "react";
import "../styles/contactUs.css";
import get_in_touch from "../images/get_in_touch.png";
function ContactUs() {
  return (
    <section id="contact-us">
      <div className="contact_us_wrapper">
        <div className="left">
          <img src={get_in_touch} alt="get_in_touch" />
        </div>
        <div className="right">
          <h3>Get In Touch</h3>
          <p>
            Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
            scelerisque <br />
            porttitor, leo quam vulputate nibh, sit amet blandit erat magna.
          </p>
          <div>
            <form className="d-flex flex-column">
              <input type="text" name="Name" placeholder="Name" />
              <input type="text" name="Name" placeholder="Email" />
              <input type="text" name="Name" placeholder="Phone" />
              <input
                style={{ height: "120px" }}
                type="mesage"
                name="Name"
                placeholder="Write Comment"
              />

              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
