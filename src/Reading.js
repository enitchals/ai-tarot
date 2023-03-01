import './App.css';

function Reading({card, orientation, reading}) {
  const readingElement = (
    <div>
      <div className='reading-card'>{`${card.card}${orientation === 1 ? ' (reversed)' : ''}`}</div>
      <div className='reading-text'>{reading}</div>
      <div className='reading-more-info'>read more about <a href={card.link} target="_blank" className='reading-link'>{card.card}</a></div>
      <div className='ai-disclaimer'>{'The above text was generated using GPT-3, OpenAI\'s large-scale language-generation model. Like all tarot readings, it is purely for shits and giggles.'}</div>

    </div>
  )

  const loadingElement = (
    <div className='spinner-wrapper'>
      <div className='loading-text'>generating your reading . . .</div>
      <div className="spinner"></div>
    </div>
  )

  return (
    <>
      <div id="reading">
        {reading !== '' ? readingElement : loadingElement}
      </div>
    </>
  );
}

export default Reading;
