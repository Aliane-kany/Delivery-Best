import React from "react";
import Button from "../component/button";
import Lifestyle from "./Lifestyle";
import welcome from "../asset/Girl2.jpg";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Navbar from "../component/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-title">
        <h1 className="about-world">//About me//</h1>
        <div className="main-about">
          <div className="col1">
            <div className="aboutpic">
              <img src={welcome} alt="image" />
            </div>
            <div className="about-icon-footer">
              <BsFacebook className="about-icon" />
              <FaInstagramSquare className="about-icon" />

              <FaTwitter className="about-icon" />
            </div>
          </div>

          <div className="col2">
            <div className="aboutpage">
              <div className="col2-title">
                <h2>HEY..What ‘s up ??Helloo</h2>
              </div>
              <div className="col2-content">
                <p className="col2-paragraphy">
                  I' am Aliane I can never read all the books I want; I can
                  never be a ll the people I want and live all the lives I want.
                  I can never train myself in all the skills I want. And why do
                  I want? I want to live a nd feel all the shades, tones and
                  vari ations of mental and physical experience possible in my
                  life. And I am horribly limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
