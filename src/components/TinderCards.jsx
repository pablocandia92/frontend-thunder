import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import SwipeButtons from "./SwipeButtons";
import Header from "./Header";
import { wait } from "@testing-library/user-event/dist/utils";

function TinderCards() {
  const [people, setPeople] = useState([
    { name: "Warlock", 
      url : "https://imagenes.elpais.com/resizer/JRf0j6Vdr_klRRV4E5Ze3a41HKs=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SC366MQEQNDVRHXSDEQMKHM5DA.jpg"
    },
    { name: "Taylor Swift", 
      url : "https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/05/10/2947481.jpg"
    },



  ]);


  const onSwipe = (index) => {
    //Make this function sleep for 1 sec
    


    setPeople((prevPeople) => prevPeople.filter((person, i) => i !== index))

    }


  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard onSwipe={() => onSwipe(people.indexOf(person))}
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            swipeRequirementType="position"
            swipeThreshold={280}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <SwipeButtons />
    </div>
    
  );

  }
export default TinderCards;