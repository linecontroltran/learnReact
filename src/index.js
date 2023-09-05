import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header.js'
import Footer from './Footer.js'
import List from './List.js'


      function Page() {
        return (
          <div>
            <Header />
            <List />
            <Footer />
          </div>
        );
      }

ReactDOM.render(<Page />, document.getElementById("root"))


//npm run start