import React, { useState } from "react";
import "../pages/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  // fetching data in login
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
          body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        setEmail("");
        setPassword("");
      } else {
        console.error("Fail to  Login.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
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
            type="submitt"
            onClick={(e) => {
              e.preventDefault();
              handlelogin(FormData);
            }}
          >
            Log In
          </button>
          <div class="register">
            <p>
              Don't have an account? <Link to="/Signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
