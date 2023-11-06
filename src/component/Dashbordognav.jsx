import React, { useState } from "react";
// import {FaBar} from 'react-icons/fa'
import Button from "./button";
import { Link } from "react-router-dom";
import Card from "../component/card";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  console.log("MENU OPEN", mobileMenuOpen);

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    console.log("hello modal");
    setModal(!modal);
  };

  {
    /*------ LOGIN -----*/
  }

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const FormData = {
    Email,
    Password,
  };
  const handlelogin = async (data) => {
    try {
      const response = await fetch(
        "https://klabblogapi.onrender.com/api/klab/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Use FormData directly without
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        alert("user Login Successfull");
        localStorage.setItem("token", data.token);
        window.location = "./Dashbordog";
        setEmail("");
        setPassword("");
      } else {
        console.error("Fail to  Login.");
        alert("Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="log">
      <nav>
        <h1 className="web-logo">
          <acronym title="Delivery of Best Story">DBS</acronym> <span>App</span>
        </h1>
        <ul
          className={`mobile-menu ${mobileMenuOpen === false ? " hidden" : ""}`}
        >
          <Link className="menu-list" to="/"></Link>
          <Link className="menu-list" to="/Dashbordog">
            Dashbord
          </Link>
          <Link className="menu-list" to="/Blogs">
            Post
          </Link>
          <Link className="menu-list" to="/Allcharts">
            chart
          </Link>
          <button>
            <Link
              className="sideba-link"
              onClick={() => {
                window.location = "/";
                sessionStorage.clear();

                alert("logout");
              }}
            >
              Logout
            </Link>
          </button>
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
                  <input
                    type="text"
                    required
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Enter your email</label>
                </div>
                <div class="input-field">
                  <input
                    type="password"
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Enter your password</label>
                </div>
                <div class="forget">
                  <label for="remember">
                    <input type="checkbox" id="remember" />
                    <p>Remember me</p>
                  </label>
                  <Link to="/Signup">Forget Password</Link>
                </div>

                <button
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                    {
                      handlelogin(FormData);
                      handleModal;
                    }
                  }}
                >
                  Log out
                </button>

                {/* <Link to="/home">Forget Password</Link> */}
                <div class="register">
                  <p>
                    Don't have an account? <Link to="/Signup">Register</Link>
                  </p>
                </div>
              </form>
            </div>
            <button onClick={handleModal} className=""></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
