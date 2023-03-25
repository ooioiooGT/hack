import React from "react";
import Modal from "./modal";
import modal from "./modal.module.css";
import image1 from "./image3.svg";

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
          para="Thank you for sharing that with us. We’re sorry for your loss. Can you tell us the name of the person who passed away?"
          imageurl={image1}
          body={
            <div>
              <input
                type="text"
                id={modal.name}
                name="name"
                placeholder="Name"
              />
            </div>
          }
          alt="Old Couple"
          first="Back"
          second="Next"
          back="/ModalSec"
          next="/ModalFour"
        />
      </div>
    </div>
  );
}

export default Categories;
