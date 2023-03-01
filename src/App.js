import { useState } from 'react';
import {cards} from './card-data'
import './App.css';
import Cards from './Cards'
import Reading from './Reading'
import { getTarotReading } from './openai';


function App() {
  const [card, setCard] = useState('');
  const [orientation, setOrientation] = useState(null); // 0 is upright, 1 is reversed
  const [reading, setReading] = useState('');


  const getReading = async() => {
    const reading = await getTarotReading(card, orientation)
    console.log(reading)
    setReading(reading);
    // setReading("a reading")
  }

  const draw = (card) => {
    setCard(card);
    const randomOrientation = Math.floor(Math.random() * 2); // get the current time and check digit for user-induced randomness
    setOrientation(randomOrientation);
    getReading();
  }

  const shuffledCards = () => {
    const array = [];
    for (let i = 0; i< 78; i++){
      let random = Math.floor(Math.random() * cards.length);
      array.push(cards.splice(random, 1)[0]);
    }
    return array;
  }

  return (
    <div className="App">
      {card !== ''
        ? <div><Reading reading={reading}/></div>
        : <Cards cards={shuffledCards()} setCard={draw}/>
      }
    </div>
  );
}

export default App;
