import { useState } from 'react';
import {cards} from './card-data'
import './App.css';
import { getTarotReading } from './openai';


function Cards({cards, setCard}) {
  console.log(cards);
  return (
    <div id="cards">
      {cards.map((card, index) => 
        <div id={card} className='card-back' style={{marginLeft: `${index*10}px`}} onClick={() => setCard(card)}></div>
      )}
    </div>
  );
}

export default Cards;
