import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile } from "./views";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/customer/:customerID">
            <Profile />
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
