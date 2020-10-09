import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
// import SinglePost from "./components/SinglePost/SinglePost";
import AboutPage from "./components/AboutPage/AboutPage";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      {/* <Route exact path="/post/:id/:slug" component={SinglePost} /> */}
    </Switch>
  </Router>
);

export default Root;
