import React from "react"
import { Router, RouteComponentProps } from "@reach/router";
import Home from 'pages/home'

const App = () => (
  <Router>
        <RouterPage path="/" pageComponent={<Home />} />
  </Router>
);

export default App;

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;