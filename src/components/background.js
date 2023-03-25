import React from "react";
import background from "./background.module.css";
import logo from "./loginpage/logo.svg";
import image from "./loginpage/image.svg";

const Background = () => {
  return (
    <div class={background.SignInContainer}>
      <div class={background.signUp}>
        <div class={background.logoHeading}>
          <img src={logo} alt="EaseHeal Logo" id={background.healLogo} />
          <h1>
            <span id={background.ease}>Ease</span>
            <span id={background.heal}>Heal</span>
          </h1>
        </div>
        <div id={background.paraSection}>
          <p>
            Gentle <span id={background.gentle}>guidance</span> through the
            <br />
            <span id={background.grieve}>grieving</span> process.
          </p>
        </div>
        <div>
          <img src={image} alt="Lady in Peace" id={background.girl} />
        </div>
      </div>
      <div class={background.rightPortion}></div>
    </div>
  );
};

export default Background;
