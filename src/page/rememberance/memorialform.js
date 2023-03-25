import React from "react";
import Navigation from "../../components/navigation";


const MemorialForm = () => {
  return (
  <div className="container">
    <Navigation
      body={
        <div className="sub-container">
          <h5> Create Memorial</h5>
          <div className="top-input">
            <div className="left-input">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                class="inputBox"
              />
              <br />
              <input
                type="text"
                id="birthday"
                name="birthday"
                placeholder="Birthday"
                class="inputBox"
              />
              <br />
            </div>
            <div className="right-input">
            <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                class="inputBox"
              />
              <br />
              <input
                type="text"
                id="deaddate"
                name="deaddate"
                placeholder="Dead Date"
                class="inputBox"
              />
              <br />

            </div>

            
          </div>
          <div className="button-input">
            <div className="lastinput">
            <input
                type="text"
                id="location"
                name="location"
                placeholder="Where is he/she from?"
                class="inputBox"
              />
              <br />
              <input
                type="text"
                id="comment"
                name="comment"
                placeholder="Describe your loved one with one sentence"
                class="inputBox"
              />
              <br />
            </div>  
          </div>
          <div className="imageinput">
            <div className="importpicture">
              <p> 
                Upload a picture of your loved one:
                <br/>
                <button className="submmitphoto">CHOOSE FILE</button>
                No file selected
              </p>
            </div>
            <div className="image" > 
              <img src="" alt=""/>
            </div>
          </div>
          <button className="submitdata">ADD NEW PERSON</button> 
      </div>}
    />
  </div>
  )
};

export default MemorialForm;
