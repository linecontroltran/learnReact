import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ImageComponent() {
return (
  <div>
    <img src="logo192.png" width= "40px" />
  </div>
);
  }

  function HeaderComponent () {
    return (
    <div>
      
      <h1>A good ol Header for my Page.</h1>
      
    </div>
  );
    }

    function ListComponent () {
      return (
      <div>
        <ul>
        <li>And some deets</li>
        <li>Some random junk here</li>
        <li>Some random poppycock here</li>
        <li>and finally last crap here</li>
        </ul>
      
      </div>
    );
      }
  
      function Page() {
        return (
          <div>
            <ImageComponent />
            <HeaderComponent />
            <ListComponent />
          </div>
        );
      }

ReactDOM.render(<Page />, document.getElementById("root"))


//npm run start