import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import List from './components/List.js'


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