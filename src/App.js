import logo from './logo.svg';
import './App.css';

function App() {
  // fetch('https://ga-mobile-api.loklok.tv/cms/app').then(response => response.json())
  // .then(data => console.log(data));

  // fetch('https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0').then(response => response.json())
  // .then(data => console.log(data));

  const request = new Request('https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0');

  // const url = request.url;
  // const method = request.method;
  // const credentials = request.credentials;
  fetch(request)
  .then(response => response.blob())
  .then(blob => {
    // image.src = URL.createObjectURL(blob);
    console.log(blob);
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
