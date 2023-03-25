import React from "react";
import modal from "./modal.module.css";
import { Link } from "react-router-dom";

function Modal({
  title,
  imageurl,
  para,
  body,
  alt,
  first,
  second,
  back,
  next,
  action
}) {
  return (
    <body class={modal.modalBody}>
      <div class={modal.container}>
        <div class={modal.imageContainer}>
          <img class={modal.modalImage} src={imageurl} alt={alt} />
        </div>
        <div class={modal.textContainer}>
          <h2>{title}</h2>
          <div class={modal.paragraph}>{para}</div>
          <div>{body}</div>
        </div>
        <div className={modal.buttonContainer}>
          <Link to={back}>
            <button id={modal.first}>{first}</button>
          </Link>
          <Link to={next}>
            <button onClick={action}>{second}</button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Modal;
