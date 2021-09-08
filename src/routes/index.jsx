import React from "react";
import { Route, Switch } from "react-router-dom";


import Home from "../pages/home"
import Finish from "../pages/finish"

const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/finish" component={Finish}/>
      </Switch>
    );
  };
  export default Routes;
  