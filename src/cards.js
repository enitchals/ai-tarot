import './App.css';

function Cards({cards, setCard}) {
  console.log(cards);
  return (
    <div id="cards">
      <div className='tai-title'>T.A.I. (Tarot AI)</div>
      <div className='tai-text'>Choose a card and Tarot AI will tell your fortune . . .</div>
      {cards.map((card, index) => 
        <div id={card.name} className='card-back' style={{transform: `translate(${index*6}px, -${index*229}px)`}} onClick={() => setCard(card)}></div>
      )}
    </div>
  );
}

export default Cards;
