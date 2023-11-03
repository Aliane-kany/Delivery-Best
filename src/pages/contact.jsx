import React from "react";
import Navbar from "../component/navbar";
import image from "../asset/contact1.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper-center">
        <div className="wrapper-content">
          <div class="wrapper">
            <div className="contact-image">
              <img src={image} alt="image" />
            </div>
            <form action="#">
              <div class="dbl-field">
                <div class="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <i class="fas fa-user"></i>
                </div>
                <div class="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <i class="fas fa-envelope"></i>
                </div>
              </div>
              <div class="dbl-field">
                <div class="field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                  />
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="field">
                  <i class="fas fa-globe"></i>
                </div>
              </div>
              <div class="message">
                <textarea
                  placeholder="Write your message"
                  name="message"
                ></textarea>
              </div>
              <div class="button-area">
                <button type="submit">Send Message</button>
                <span></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
