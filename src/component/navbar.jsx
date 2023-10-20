import React, { useState } from "react";
// import {FaBar} from 'react-icons/fa'
import Button from "./button";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  console.log("MENU OPEN", mobileMenuOpen);

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    console.log("hello modal");
    setModal(!modal);
  };

  return (
    <div>
      <nav>
        <ul
          className={`mobile-menu ${mobileMenuOpen === false ? " hidden" : ""}`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link onClick={handleModal}>Login</Link>
        </ul>

        <span className="menu">
          <button
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            Menu
          </button>
        </span>
      </nav>

      {modal && (
        <div className="modal-container">
          <div className="form-cntainer">
            <div class="wrapperr">
              <form action="#">
                <h2>Login</h2>
                <div class="input-field">
                  <input type="text" required />
                  <label>Enter your email</label>
                </div>
                <div class="input-field">
                  <input type="password" required />
                  <label>Enter your password</label>
                </div>
                <div class="forget">
                  <label for="remember">
                    <input type="checkbox" id="remember" />
                    <p>Remember me</p>
                  </label>
                  <Link to="/Signup">Forget Password</Link>
                </div>
                <Link to="/Blogs">
                  {" "}
                  <button onClick={handleModal} className="">
                    Log In
                  </button>
                </Link>

                {/* <Link to="/home">Forget Password</Link> */}
                <div class="register">
                  <p>
                    Don't have an account? <Link to="/Signup">Register</Link>
                  </p>
                </div>
              </form>
            </div>
            {/* <button onClick={handleModal}className=""></button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
