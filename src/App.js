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
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/watch/:v" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
