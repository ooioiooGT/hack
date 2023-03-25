import React from "react";
import Modal from "./modal";
import modal from "./modal.module.css";
import image1 from "./image2.svg";

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
      <div className={modal.cardscontainer}>
        <Modal
          title=""
          para="Have you lost a loved one recently?"
          imageurl={image1}
          body={
            <div class={modal.radioPart}>
              <input type="radio" value="yes" /> <span id={modal.yes}>Yes</span>
              <input type="radio" value="no" /> No
            </div>
          }
          alt="Worried"
          first="Back"
          second="Next"
          back="/ModalFirst"
          next="/ModalThree"
        />
      </div>
    </div>
  );
}

export default Categories;
