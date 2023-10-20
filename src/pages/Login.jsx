import React from "react";
import "../pages/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
 
  return (
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
          <Link to="/Blogs"> <button type="submitt">Log In</button></Link>

          {/* <Link to="/home">Forget Password</Link> */}
          <div class="register">
            <p>
              Don't have an account? <Link to="/Signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
