import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



  function HeaderComponent () {
    return (
    <header>
      <nav className="nav">
    
       <img src="logo192.png" className="nav-logo" />
     
      <ul className="nav-items">
        <li>Prices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     
      </nav>
      </header>
  );
    }

    function Footer () {
      return (
        <div>
          <p className="all-rights">All Rights Reserved</p>
        </div>
      )
    }

    function ListComponent () {
      return (
      <div>
         <h1>A good ol Header for my Page.</h1>
        <ul>
        <li>And some deets</li>
        <li>Some random junk here</li>
        <li>Some random poppycock here</li>
        <li>and finally last crap here</li>
        </ul>
        <ol>
        <li>Hi there how are you?</li>
        <li>And thank you for visiting my page!</li>
        </ol>
      
      </div>
    );
      }
  
      function Page() {
        return (
          <div>
            <HeaderComponent />
            <ListComponent />
            <Footer />
          </div>
        );
      }

ReactDOM.render(<Page />, document.getElementById("root"))


//npm run start