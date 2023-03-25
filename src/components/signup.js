import React from "react";
import Background from "./background";
import signup from "./signup.module.css";

const Signup = () => {
  return (
    <div class={signup.container}>
      <Background />
      <div class={signup.logInPortion}>
        <h1 id={signup.loginTitle}>SignUp</h1>
        <div class={signup.infoSection}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            class={signup.inputBox}
          />
          <br />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            class={signup.inputBox}
          />
          <br />
          <input
            type="text"
            id="repassword"
            name="repassword"
            placeholder="Confirm Password"
            class={signup.inputBox}
          />
          <br />
          <button class={signup.loginButton}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
