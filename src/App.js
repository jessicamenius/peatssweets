import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"

import Landing from "./pages/Landing"
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
          <Route path="/cookies">
            <Cookies/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
