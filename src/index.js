import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function testFunction () {
  return (
  <div>
    <img src="logo192.png" width= "40px" />
    <h1>Testing react static page</h1>
    <ul>
    <li>Some random stuff here</li>
    <li>Some random junk here</li>
    <li>Some random poppycock here</li>
    <li>and finally last crap here</li>
    </ul>
  
  </div>
)
  }

ReactDOM.render(testFunction(), document.getElementById("root"))

//npm run start