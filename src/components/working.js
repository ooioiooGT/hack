import React from "react";
import workingcss from "./working.module.css";
import Logoimage from "../components/loginpage/logo.svg";

function Working() {
  return (
    <div className={workingcss.working}>
      <img src={Logoimage} alt="" />
      <p>
        This page is currently under Development. <br />
        It will soon be updated. <br />
        Thank you for your patience
      </p>
    </div>
  );
}

export default Working;
