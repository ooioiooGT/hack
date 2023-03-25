import React from "react";
import Modal from "./modal";
import modaldetail from "./modaldetail.module.css";
import image1 from "./image1.svg";

function Categories({ title, imageurl, body, alt, first, second,back,
  next, }) {
  return (
    <div className="categories">
      <div className="cards-container">
        <Modal
          title="Welcome to EaseHeal"
          imageurl={image1}
          para=" "
          body="We’re sorry that you’re going through a difficult time, but we’re here to help you through it. Our app is designed to help you navigate the grieving process and connect with your loved ones. Please take a moment to answer a few questions so that we can get to know you better"
          alt="Peaceful Lady"
          first="Dashboard"
          second="Next"
          back="/ModalFirst"
          next="/ModalSec"
        />
      </div>
    </div>
  );
}

export default Categories;
