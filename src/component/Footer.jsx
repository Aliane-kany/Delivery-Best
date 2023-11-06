import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
const FooterSection = () => {
  return (
    <div className="container-footer">
      {/* <img src={footerImg} alt="" className="FooterImg"/> */}
      <div className="top-footer">
        <h3>INSURE</h3>
        <div className="title-icon">
          <BsFacebook />
          <FaInstagramSquare />
          <FaTwitter />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="bottom-footer">
        <div>
          <h4>OUR COMPANY</h4>
          <a href="#">HOW WE WORK</a>
          <a href="#">WHY INSURE</a>
          <a href="#">WHY PLANS</a>
          <a href="#">REVIEWS</a>
        </div>
        <div>
          <h4>HELP ME</h4>
          <a href="#">FAQ</a>
          <a href="#">TERMS OF USE</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">COOKIES</a>
        </div>
        <div>
          <h4>CONTACT</h4>
          <a href="#">SALES</a>
          <a href="#">SUPPORT</a>
          <a href="#">LIVE CHAT</a>
        </div>
        <div>
          <h4>OTHERS</h4>
          <a href="#">CAREERS</a>
          <a href="#">PRESS</a>
          <a href="#">LICENSES</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
