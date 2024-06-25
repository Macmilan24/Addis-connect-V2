import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import IssuesPage from "./pages/IssuesPage";
import SolutionsPage from "./pages/SolutionsPage";
import DiscussionsPage from "./pages/DiscussionsPage";
import DirectoryPage from "./pages/DirectoryPage";

const HomeRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/issues" component={IssuesPage} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/discussions" component={DiscussionsPage} />
      <Route path="/directory" component={DirectoryPage} />
    </Switch>
  </Router>
);

export default HomeRoutes;
