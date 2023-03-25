import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import Navigation from "../../components/navigation";
import Banner from "../../components/topbanner";
import dash from "./dashboard.module.css";
import articleImage from "./articleimage.svg";
import Memorycard from "../rememberance/memerycard";
import memoryimg from "../rememberance/placeholder.svg";
import circle from "./circle.svg";
import elderly from "./elderly.svg";
import elderly2 from "./elderly2.svg";
import elderly3 from "./elderly3.svg";

export default function Dashboard() {
  return (
    <div>
      <Navigation
        body={
          <div class={dash.overall}>
            <div>
              <Banner
                title="Welcome!"
                body='"When someone you love becomes a memory, the memory becomes a treasure"'
              />
            </div>
            <div class={dash.memorials}>
              <p class={dash.littleHeader}>Memorials</p>
              <div class={dash.memories}>
                <Memorycard
                  class={dash.eachItem}
                  imageurl={elderly}
                  name="Jovita Ceron"
                  comment="“A faithful woman”"
                />
                <Memorycard
                  class={dash.eachItem}
                  imageurl={elderly2}
                  name="Larae Murdock"
                  comment="“A spiritual woman”"
                />
                <Memorycard
                  class={dash.eachItem}
                  imageurl={elderly3}
                  name="Segundo Carazas"
                  comment="“A happy men”"
                />
              </div>
            </div>

            <div class={dash.bottomPart}>
              <div class={dash.articlecontainer}>
                <p id={dash.heading} class={dash.littleHeader}>
                  Article of the Day
                </p>
                <div class={dash.articlePart}>
                  <img src={articleImage} id={dash.img} />
                  <div class={dash.info}>
                    <h2>Understanding Grief</h2>
                    <p>
                      Although many of us are able to speak frankly about death,
                      we still have a lot to learn about dealing wisely with its
                      aftermath: grief, the natural reaction to loss of a loved
                      one.
                    </p>
                    <p id={dash.learnmore}>LEARN MORE</p>
                  </div>
                </div>
              </div>
              <div class={dash.comingUp}>
                <p class={dash.littleHeader}>Memorable Dates</p>
                <div class={dash.dates}>
                  <div class={dash.dateDetails}>
                    <img src={circle} class={dash.round} />
                    <div>
                      <p class={dash.dateColor}>Tuesday, Feb 10</p>
                      <p class={dash.eventColor}>Carlos Escalona Birthday</p>
                    </div>
                  </div>
                  <div class={dash.dateDetails}>
                    <img src={circle} class={dash.round} />
                    <div>
                      <p class={dash.dateColor}>Tuesday, Feb 14</p>
                      <p class={dash.eventColor}>Jovita’s Birthday</p>
                    </div>
                  </div>
                  <div class={dash.dateDetails}>
                    <img src={circle} class={dash.round} />
                    <div>
                      <p class={dash.dateColor}>Tuesday, Feb 10</p>
                      <p class={dash.eventColor}>Larae’s Anniversary </p>
                    </div>
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
