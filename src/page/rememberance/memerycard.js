import React from "react";
import card from "./card.module.css";

function Memorycard({ imageurl, name, comment }) {
  return (
    <div className={card.container}>
      <div className="people-image">
        <img src={imageurl} alt="" placeholder=""></img>
      </div>
      <div className={card.name}>
        <h2> {name} </h2>
      </div>
      <div className={card.comment}>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Memorycard;
