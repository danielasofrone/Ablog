import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
import AboutPage from "./components/AboutPage/AboutPage";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  </Router>
);

export default Root;
