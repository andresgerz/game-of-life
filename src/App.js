import React from 'react'

import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NavbarWeb from './components/NavbarWeb'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <Router>  
      <div className="App">
        <NavbarWeb />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/play">
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
