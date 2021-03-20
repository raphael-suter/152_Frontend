import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/docs" component={Docs} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
