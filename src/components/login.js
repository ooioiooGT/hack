import React from "react";
import Background from "./background";
import login from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class={login.container}>
      <Background />
      <div class={login.logInPortion}>
        <h1 id={login.loginTitle}>Login</h1>
        <div class={login.infoSection}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            class={login.inputBox}
          />
          <br />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            class={login.inputBox}
          />
          <br />
          <button class={login.loginButton}>LOGIN</button>
          <p>
            Don't have an account?{" "}
            <Link to="/Signup">
              <span id={login.signUpLink}>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
