import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import signin from './components/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Route path="/" component ={signin}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
