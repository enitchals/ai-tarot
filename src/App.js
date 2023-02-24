import { useState } from 'react';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import {cards} from './cards'
import './App.css';

dotenv.config()

function App() {
  const [card, setCard] = useState('');
  const [orientation, setOrientation] = useState(null); // 0 is upright, 1 is reversed
  const [reading, setReading] = useState('');

  const config = new Configuration({
    apiKey: process.env.OPEN_API_KEY
  })

  const openai = new OpenAIApi(config)

  const getReading = async() => {
    const reading = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a tarot reading for ${card} ${orientation === 1 ? 'reversed' : ''}`,
      temperature: 0.99,
      max_tokens: 30,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.49,
    })
    setReading(reading);
  }

  const draw = () => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    setCard(cards[randomNumber]);
    const randomOrientation = Math.floor(Math.random() * 2);
    setOrientation(randomOrientation);
    getReading();
  }

  return (
    <div className="App">
      <button onClick={draw}>Draw a Card</button>
      <div>{reading}</div>
    </div>
  );
}

export default App;
