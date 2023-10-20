import React, { useState } from "react";
import Navbar from "../component/navbar";
import "../pages/Signup.css";
import { Link } from "react-router-dom";

// function Signup() {

const Signup = () => {
  // Define state variables for the form fields
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const FormData = {
    Fname,
    Lname,
    Email,
    Password,
  };

  const handlesignup = async (data) => {
    try {
      const response = await fetch(
        "https://klabblogapi.onrender.com/api/klab/user/newuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        alert("Message Sent Successfull");
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
      } else {
        console.error("Failed to create user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-cntainer">
      {/* <div>SIGN UP</div> */}
      <div class="wrapperar">
        <form action="#">
          <h2>SIGN UP</h2>
          <div class="input-field">
            <input
              type="text"
              required
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label>First Name</label>
          </div>
          <div class="input-field">
            <input
              type="text"
              required
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label>Last Name</label>
          </div>
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
          {/* <div class="forget">
            <label for="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div> */}
         {/* <div className="upload-image">
        <input className="choose" type="file" name="image"></input>
        </div> */}

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handlesignup(FormData);
            }}
          >
            Register
          </button>

          <div class="register">
            <p>
              Don't have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Signup;
