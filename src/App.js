import logo from './logo.svg';
import './App.css';


function App() {
  // fetch('https://ga-mobile-api.loklok.tv/cms/app').then(response => response.json())
  // .then(data => console.log(data));

  // fetch('https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0').then(response => response.json())
  // .then(data => console.log(data));

  // const request = new Request('https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0');


  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div className="flex flex-row">
        <div class="basis-1/4 md:basis-1/3 bg-orange-400">01</div>
        <div class="basis-1/4 md:basis-1/3 bg-orange-500">02</div>
        <div class="basis-1/4 md:basis-1/3 bg-orange-600">03</div>
      </div>
    </div>
  );
}

export default App;
