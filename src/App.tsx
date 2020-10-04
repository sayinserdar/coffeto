import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from 'pages/home'

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        {/* <About /> */}
      </Route>
      <Route path="/users">
        {/* <Users /> */}
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
