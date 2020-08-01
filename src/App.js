import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import signin from './components/signin';
import signinTable from './components/signinTable';
import Judging from './components/judging';
import { placementForm } from './components/placementForm';

function App() {
  return (
    <div className="App">
      <Router>
        
          <Route exact path="/signin" component ={signin}/>
          <Route exact path="/judging" component ={Judging}/>
          <Route exact path="/placement" component ={placementForm}/>
          <Route exact path="/admin" component ={signinTable}/>
       
      </Router>
    </div>
  );
}

export default App;
