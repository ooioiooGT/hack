import {React, useState, useEffect} from "react";
import Modal from "./modal";
import modal from "./modal.module.css";
import image1 from "./image3.svg";
import { db} from "../../api/firebase";



function Categories({
  imageurl,
  title,
  para,
  body,
  alt,
  first,
  second,
  back,
  next,
  action
  
}) {
  const [name, setName] = useState("");
  const [user, setUser] = useState(null)
  useEffect(()=>{const storedUserString = localStorage.getItem("user");
  const storedUser = JSON.parse(storedUserString);
  setUser(storedUser);
  }, [name])
  const handleChange = (e) => {setName(e.target.value)}
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
                value = {name}
                onChange = {handleChange}
                placeholder="Name"
              />
            </div>
          }
          alt="Old Couple"
          first="Back"
          second="Next"
          back="/ModalSec"
          next="/ModalFour"
          action =  {() => {
            if(user){
              console.log('User ID: ', user.id);
              db.collection("users").doc(user.uid).collection('Relatives').doc(name).set({name: name})
            }
          }
        }
        />
      </div>
    </div>
  );
}

export default Categories;
