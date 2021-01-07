import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";

import { DashboardRoutes } from '../routers/DashboardRoutes';
import { HomeScreen } from '../components/home/homeScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';



export const AppRouter = () => {


  return (
    <Router>
      <div>


        <Switch>
          <Route
            exact path="/login"
            component={ LoginScreen }
          />

          <Route
            exact path="/register"
            component={ RegisterScreen }
          />

          <Route
            exact path="/"
            component={ HomeScreen }
          />

          <Route
            path="/logedin"
            component={ DashboardRoutes }
          />
        </Switch>
      </div>
    </Router>
  );
}
