import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from 'pages/home'
import History from 'pages/history'

const App = () => (
  <Router>
    <Switch>
      <Route path="/history">
        <History />
      </Route>
      <Route path="/">
        <Home />
      </Route>

    </Switch>
  </Router>
);

export default App;
