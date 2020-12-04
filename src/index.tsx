import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import FrontPage from "./component/frontPage";
import LearningPage from "./component/learningPage";
import TrainingPage from "./component/trainingPage";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/learning" component={LearningPage} />
      <Route exact path="/training" component={TrainingPage} />
    </Switch >
  </Router >,
  document.getElementById('root')
);