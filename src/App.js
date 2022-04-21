import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import useSWR from 'swr';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/navbar/navbar.component';
import Navbart from './components/navbar/navbart.component';
import Home from './pages/homepage/homepage.component';
import Watch from './pages/watch/watch.component';

const HomePage = () => {
  // const [preview, setPreview] = useState([]);
  // const [loading, setLoading] = useState(false);//false
  // const [progress,setProgress] = useState(false);


  // const list = [
  //   "https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0",
  //   "https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=1"
  // ]


  // useEffect(() => {
  //   fetch(`${list[0]}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json;charset=UTF-8',
  //       'lang': 'en',
  //       'versioncode': '11',
  //       'clienttype': 'ios_jike_default'
  //     }
  //   }).then(res => res.json())
  //     .then(d => {
  //       console.log(d)
  //       setPreview(d.data.recommendItems);
  //       // console.log(d.data.recommendItems);
  //     })
  //     .catch(err => {
  //       setProgress(true);
  //       console.log(err);
  //     })
  //     .finally(() => setLoading(false));
  // }, [progress]);

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
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/watch/:c/:v" element={<Watch />} />
        <Route exact path="/watch/:c/:v/:e" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
