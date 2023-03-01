import './App.css';

function Reading({reading}) {
  const readingElement = (
    <div>
      {reading}
    </div>
  )

  const loadingElement = (
    <div class="spin">
    </div>
  )

  return (
    <div id="reading">
      {reading !== '' ? readingElement : loadingElement}
    </div>
  );
}

export default Reading;
