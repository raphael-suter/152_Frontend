import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/docs" component={Docs} />
    </Switch>
  );
};

const createRouter = (children) => <BrowserRouter>{children}</BrowserRouter>;
ReactDOM.render(createRouter(<App />), document.getElementById("root"));
