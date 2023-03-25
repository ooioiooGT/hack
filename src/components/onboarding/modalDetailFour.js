import React from "react";
import Modal from "./modal";
import modal from "./modal.module.css";
import image1 from "./image4.svg";

function Categories({
  title,
  imageurl,
  para,
  body,
  alt,
  first,
  second,
  back,
  next,
}) {
  return (
    <div className="categories">
      <div className="cards-container">
        <Modal
          title=""
          para={
            <div>
              <p>
                We know that this is a difficult time for you. We’re here to
                support you and help you through the grieving process.
              </p>
              <p id={modal.extra}>
                Can you tell us how you’re feeling right now?
              </p>
            </div>
          }
          imageurl={image1}
          body={
            <div>
              <input type="radio" value="happy" />
              In Peace
              <input type="radio" value="sad" /> Heartbroken
              <input type="radio" value="mad" /> Mad
            </div>
          }
          alt="Peaceful Lady"
          first="Back"
          second="Complete"
          back="/ModalSec"
          next="/ModalFour"
        />
      </div>
    </div>
  );
}

export default Categories;
