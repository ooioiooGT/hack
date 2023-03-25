import React from "react";
import banner from "./topbanner.module.css";
import logo from "./sidelogo.svg";
import rightlogo from "./rightlogo.svg";

export default function Banner({ title, body }) {
  return (
    <div className={banner.container}>
      <img class={banner.logo} src={logo} />
      <div class={banner.texts}>
        <h4>{title}</h4>
        <div>{body}</div>
      </div>
      <img class={banner.rightlogo} src={rightlogo} />
    </div>
  );
}
