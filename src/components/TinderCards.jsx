import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
import SwipeButtons from "./SwipeButtons";

const db = [
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
]

function Advanced () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () => {
    const refs = [];
    for (let i = 0; i < db.length; i++) {
      refs.push(React.createRef());
    }
    return refs;
  }, [db.length]);


  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    console.log(`${nameToDelete} (${index})`)
    
    setTimeout(() => {
      updateCurrentIndex(index - 1);
    }, 550); // 1000 milliseconds = 1 second
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} expected. (${idx})left the screen!, ${currentIndex}`)
    console.log(childRefs.length)
    //currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className='Container'>
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            swipeRequirementType='position'
            className={`swipe ${currentIndexRef.current < index ? 'hidden' : ''}`}
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
              <h3 className="edad">{character.age}</h3>
              <h3 className="distancia">{character.distancia}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      
      {<SwipeButtons 
      handleReplay={() => goBack()}
      handleRight={() => swipe('right')}
      handleLeft={() => swipe('left')}
      handleSuper={() => swipe('up')}
      />}
      
    </div>
  )
}

export default Advanced
