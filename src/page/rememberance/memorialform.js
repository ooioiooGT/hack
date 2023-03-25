import React from "react";
import Navigation from "../../components/navigation";
import form from "./memorialform.module.css";

const MemorialForm = () => {
  return (
    <div className={form.container}>
      <Navigation
        body={
          <div className={form.subContainer}>
            <h5> Create Memorial</h5>
            <div className={form.topInput}>
              <div className={form.leftinput}>
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
              <div className={form.rightinput}>
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
            <div className={form.buttoninput}>
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
            <div className={form.imageinput}>
              <div className="importpicture">
                <p>
                  Upload a picture of your loved one:
                  <br />
                  <button className={form.submmitphoto}>CHOOSE FILE</button>
                  No file selected
                </p>
              </div>
              <div className="image">
                <img src="" alt="" />
              </div>
            </div>
            <button className={form.submitdata}>ADD NEW PERSON</button>
          </div>
        }
      />
    </div>
  );
};

export default MemorialForm;
