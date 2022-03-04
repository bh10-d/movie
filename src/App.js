import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/homepage/homepage.component';
import Watch from './pages/watch/watch.component';

const HomePage = ()=> {
  return(
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/watch" element={<Watch/>} />
      </Routes>
    </div>
  );
}

export default App;
