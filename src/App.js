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
    setReading(reading);
    // setTimeout(() => {
    //   setReading("You are in the process of opening yourself up to personal growth and expansion. The energy around you is guiding you towards taking some bold and important steps for your future. Stay mindful of your surroundings, trust your intuition, and be open to new opportunities along the way. The hard work you are doing now will pay off in the long run and benefit you greatly.")
    // }, 3000)
  }

  const draw = (card) => {
    setCard(card);
      const randomOrientation = Math.floor(Math.random() * 2);
      setOrientation(randomOrientation);
    getReading();
  }

  const shuffledCards = () => {
    const array = [];
    const cardsToShuffle = [].concat(cards)
    for (let i = 0; i< 78; i++){
      let random = Math.floor(Math.random() * cardsToShuffle.length);
      array.push(cardsToShuffle.splice(random, 1)[0]);
    }
    return array;
  }

  const shuffled = shuffledCards();

  return (
    <div className="app">
      {card !== ''
        ? <Reading reading={reading} card={card} orientation={orientation}/>
        : <Cards cards={shuffled} setCard={draw}/>
      }
    </div>
  );
}

export default App;
