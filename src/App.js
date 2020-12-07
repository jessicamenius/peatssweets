import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import Landing from "./pages/Landing"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exactpath="/landing">
            <Landing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
