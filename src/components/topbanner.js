import React from "react";
import banner from "./topbanner.module.css";

export default function Banner({title , body}) {
  return <div className="banner">
    <h4>{title}</h4>
    <p>{body}</p>
  </div>;
}
