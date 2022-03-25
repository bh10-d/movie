import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import useSWR from 'swr';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/homepage/homepage.component';
import Watch from './pages/watch/watch.component';

const HomePage = () => {
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);//false

  useEffect(() => {
    fetch('https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        'lang': 'en',
        'versioncode': '11',
        'clienttype': 'ios_jike_default'
      }
    }).then(res => res.json())
      .then(d => {
        setPreview(d.data.recommendItems);
        console.log(d.data.recommendItems);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);


//   useEffect(() => {
//     getAllNotes() ;
//  }, []);
//   const page = 0;
//   const url = `https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=${page}`;
//   const getAllNotes = () => {
//     axios.get (`${url}`,{
//       headers: {
//         lang: "en",
//         versioncode: "11",
//         clienttype: "ios_jike_default",
//       }
//     })
//      .then((response) => {
//       setPreview(response.data.data.recommendItems);
//     } )
//      .catch (error => console.error (`Error: ${error}`));
// }
  return (
    <div>
      <Navbar />
      { loading?<p>Data is loading...</p>:<Home data={preview} />}
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
