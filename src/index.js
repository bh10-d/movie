import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';

ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <HomePage />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
