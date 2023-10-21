import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import SwipeButtons from "./SwipeButtons";
import Header from "./Header";
import { wait } from "@testing-library/user-event/dist/utils";

function TinderCards() {
  const [people, setPeople] = useState([
    { name: "Paylord Swift", 
      url : "https://imagenes.elpais.com/resizer/JRf0j6Vdr_klRRV4E5Ze3a41HKs=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SC366MQEQNDVRHXSDEQMKHM5DA.jpg",
      age: "25",
      distancia: "2 km"
    },
    { name: "Taylor Swift", 
      url : "https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/05/10/2947481.jpg",
      age: "19",
      distancia: "1 km"
    },
  ]);

  const onSwipe = (index) => {     //Make this function sleep for 1 sec
    setPeople((prevPeople) => prevPeople.filter((person, i) => i !== index))
    }

  return (
    <div>
    <Header></Header>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard        
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            swipeRequirementType="position"
            swipeThreshold={280}
             /*onCardLeftScreen - posiblemente sirva para poner invisible la card una vez swipeada*/
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h2>{person.name}</h2>
              <h3 className="edad">{person.age}</h3>
              <h3 className="distancia">{person.distancia}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <SwipeButtons>   
      </SwipeButtons>
    </div>
  );
  }
export default TinderCards;


