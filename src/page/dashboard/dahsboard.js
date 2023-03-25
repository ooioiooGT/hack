import React, { useState, useEffect, useRef} from "react";
// import Navbar from "../../components/navbar/Navbar";
import Navigation from "../../components/navigation";
import Banner from "../../components/topbanner";
import dash from "./dashboard.module.css";
import articleImage from "./articleimage.svg";
import Memorycard from "../rememberance/memerycard";
import memoryimg from "../rememberance/placeholder.svg";
import {db} from "../../api/firebase";

export default function Dashboard() {
  const [memorials, setMemorials] = useState([])
  const loaded = useRef(false)
  var user = JSON.parse(localStorage.getItem('user'))
  useEffect (()=> {
    if(!loaded.current){
    const memorialArray = []
    db.collection('users').doc(user.uid).collection('relatives').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      memorialArray.push({name: data.name, quote: data.quote})
      // console.log(data.name)
    });
    setMemorials(memorialArray);
    
  })}
  loaded.current = true;
}, [] )
  return (
    <div>
      <Navigation
        body={
          <div>
            <div>
              <Banner
                title="Welcome!"
                body='"When someone you love becomes a memory, the memory becomes a treasure"'
              />
            </div>
            <div class={dash.memorials}>
              <p>Memorials</p>
              <div class={dash.memories}>
                {memorials.map((memorial) => 
                (<Memorycard
                  class={dash.eachItem}
                  imageurl={memoryimg}
                  name= {memorial.name}
                  comment={memorial.quote}
                />))}
                
              </div>
            </div>

            <div class={dash.bottomPart}>
              <div class={dash.articlecontainer}>
                <p id={dash.heading}>Article of the Day</p>
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
