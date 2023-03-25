import React from "react";
import memorials from "./memorials.module.css";
import Banner from "../../components/topbanner";
import Navigation from "../../components/navigation";
import image from "./lady.svg";

const Memorials = () => {
  return (
    <div class={memorials.container}>
      <Navigation
        body={
          <div class={memorials.container}>
            <span class={memorials.user}>
              <img src={image} />
            </span>
            <Banner
              class={memorials.banner}
              title="Jovita Ceron Guerrero"
              body={
                <div>
                  <p>Feb 15, 1943 - August 29, 2017</p>
                  <p>Hidalgo, Mexico</p>
                  <p>“We live to die, and we die to live”</p>
                </div>
              }
            />
          </div>
        }
      />
    </div>
  );
};

export default Memorials;
