import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import signin from './components/signin';
import signinTable from './components/signinTable';

function App() {
  return (
    <div className="App">
      <Router>
        
          <Route exact path="/" component ={signin}/>
          <Route exact path="/admin" component ={signinTable}/>
       
      </Router>
    </div>
  );
}

export default App;
