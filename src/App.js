import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbart from './components/navbar/navbart.component';
import Home from './pages/homepage/homepage';
import Watch from './pages/watch/watch';
import History from './pages/history/history';
import Search from './pages/search/search';
import OddMovie from './pages/odd/OddMovie';
import NewMovie from './pages/new/NewMovie';
import SeriesMovie from './pages/series/SeriesMovie';
import AppProvider from './context/AppProvider';

const HomePage = () => {
  const [goToTop,setGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll=()=>{
        setGoToTop(window.scrollY >= 650);
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
        window.removeEventListener('scroll',handleScroll);
    }
  },[]);

  const handleGotoTop = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="relative">
      <Navbart absolute="absolute"/>
      <Home />
      {goToTop && (
        <button
            style={{
                position: 'fixed',
                right: 20,
                bottom: 20,
                zIndex: 99
            }}
            onClick={handleGotoTop}
        >
            <div className="animate-bounce">
              <i className='bx bx-up-arrow-alt text-4xl'></i>
            </div>
        </button>
      )}
    </div>
  )
}

function App() {
  return (
    <div>
        <AppProvider>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/watch/:c/:v" element={<Watch />} />
              <Route exact path="/watch/:c/:v/:e" element={<Watch />} />
              <Route exact path="/history" element={<History />} />
              <Route exact path="/odd" element={<OddMovie />} />
              <Route exact path="/new" element={<NewMovie />} />
              <Route exact path="/series" element={<SeriesMovie />} />
              <Route path="/search" element={<Search />} />
          </Routes>
        </AppProvider>
    </div>
  );
}

export default App;
