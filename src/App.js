import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Landing from "./pages/Landing"
import About from "./pages/About"
import Cookies from "./pages/Cookies"
import Orders from "./pages/Orders"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exactpath="/">
            <Landing/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/cookies">
            <Cookies/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/orders">
            <Orders/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
