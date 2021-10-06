import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Navigation from "./components/static/Navigation";
import TopBar from "./components/static/TopBar";

const App = () => {
  return (
    <div>
      <TopBar />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
