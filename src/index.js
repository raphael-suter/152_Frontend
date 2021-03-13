import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Doc from "./pages/Doc";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/doc" component={Doc} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
