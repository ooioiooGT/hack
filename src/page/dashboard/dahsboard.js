import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import Navigation from "../../components/navigation";
import Banner from "../../components/topbanner";
import dash from "./dashboard.module.css";
import articleImage from "./articleimage.svg";

export default function Dashboard() {
  return (
    <div>
      <Navigation
        body={
          <div>
            <div>
              <Banner />
            </div>
            <div></div>
            <div class={dash.bottomPart}>
              <div class={dash.articlecontainer}>
                <p id={dash.heading}>Article of the Day</p>
                <div class={dash.articlePart}>
                  <img src={articleImage} />
                  <div class={dash.info}>
                    <h2>Understanding Grief</h2>
                    <p>
                      Although many of us are able to speak frankly about death,
                      we still have a lot to learn about dealing wisely with its
                      aftermath: grief, the natural reaction to loss of a loved
                      one.
                    </p>
                    <p>LEARN MORE</p>
                  </div>
                </div>
              </div>
              <div class={dash.comingUp}>
                <p>Memorable Dates</p>
                <div class={dash.dates}>
                  <div>
                    <p>Date</p>
                    <p>Event</p>
                  </div>
                  <div>
                    <p>Date</p>
                    <p>Event</p>
                  </div>
                  <div>
                    <p>Date</p>
                    <p>Event</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
