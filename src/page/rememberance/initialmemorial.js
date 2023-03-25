import React from "react";
import memorial from "./initialmemorial.module.css";
import Navigation from "../../components/navigation";
import flower from "./flower.svg";
import Banner from "../../components/topbanner";
import Memorycard from "./memerycard";
import person from "./placeholder.svg";
import { Link } from "react-router-dom";

const MemorialPage = () => {
  return (
    <div class={memorial.container}>
      <Navigation
        body={
          <div class={memorial.container}>
            <span class={memorial.user}>
              <img src={flower} />
            </span>
            <Banner
              class={memorial.banner}
              title="Memorials"
              body={
                <div>
                  <p>
                    “Our dead are never dead to us until we have forgotten them:
                    they can be injured by us, they can be wounded; they know
                    all our penitence, all our aching sense that their place is
                    empty, all the kisses we bestow on the smallest relic of
                    their presence.” ― George Eliot
                  </p>
                </div>
              }
            />
            <div class={memorial.cards}>
              <Memorycard
                imageurl={person}
                name="Name"
                comment="Person's comment"
              />
            </div>
            <Link to="/MemorialForm">
              <button class={memorial.butt}>ADD NEW PERSON</button>
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default MemorialPage;
