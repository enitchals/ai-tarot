import { useState } from 'react';
import {cards} from './cards'
import './App.css';
import { getTarotReading } from './openai';


function App() {
  const [card, setCard] = useState('');
  const [orientation, setOrientation] = useState(null); // 0 is upright, 1 is reversed
  const [reading, setReading] = useState('');


  const getReading = async() => {
    const reading = await getTarotReading(card, orientation)
    console.log(reading)
    setReading(reading);
  }

  const draw = () => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    setCard(cards[randomNumber]);
    const randomOrientation = Math.floor(Math.random() * 2);
    setOrientation(randomOrientation);
    getReading();
  }

  console.log(process.env)

  return (
    <div className="App">
      <button onClick={draw}>Draw a Card</button>
      <div>{reading}</div>
    </div>
  );
}

export default App;
