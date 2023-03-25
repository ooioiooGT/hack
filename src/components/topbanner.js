import React from "react";
import banner from "./topbanner.module.css";

export default function Banner({ title, body }) {
  return (
    <div className={banner.container}>
      <h4>{title}</h4>
      <div>{body}</div>
    </div>
  );
}
