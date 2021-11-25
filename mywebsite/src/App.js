import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";


function App() {
  return(
  
<Router>
      <div>
        <MyNav/>
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

);
}

export default App;
