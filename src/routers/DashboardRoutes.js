import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from "react";

import { MainScreen } from '../components/main/MainScreen';
import { Navbar } from '../components/ui/Navbar';



export const DashboardRoutes = () => {


  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/main" component={ MainScreen } />

          <Redirect to='/main' />
        </Switch>
      </div>
    </>
  );
}
